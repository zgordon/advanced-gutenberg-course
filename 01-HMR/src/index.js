/**
 * Dynamically locate, load & register all Editor Blocks & Plugins.
 */
import { registerBlockType, unregisterBlockType } from "@wordpress/blocks";
import { registerPlugin, unregisterPlugin } from "@wordpress/plugins";
import { select, dispatch } from "@wordpress/data";

/**
 * No-op function for use as a default argument value.
 *
 * @returns null
 */
const noop = () => null;

/**
 * Require a set of modules and configure them for hot module replacement.
 *
 * The first argument should be a function returning a `require.context()`
 * call. All modules loaded from this context are cached, and on each rebuild
 * the incoming updated modules are checked against the cache. Updated modules
 * which already exist in the cache are unregistered with the provided function,
 * then any incoming (new or updated) modules will be registered.
 *
 * @param {Function} getContext Execute and return a `require.context()` call.
 * @param {Function} register   Function to register accepted modules.
 * @param {Function} unregister Function to unregister replaced modules.
 * @param {Function} [before]   Function to run before updating moules.
 * @param {Function} [after]    Function to run after updating moules.
 */
const autoload = ({
	getContext,
	register,
	unregister,
	before = noop,
	after = noop
}) => {
	const cache = {};
	const loadModules = () => {
		before();

		const context = getContext();
		context.keys().forEach(key => {
			const module = context(key);
			if (module === cache[key]) {
				// Module unchanged: no further action needed.
				return;
			}
			if (cache[key]) {
				// Module changed, and prior copy detected: unregister old module.
				unregister(cache[key]);
			}
			// Register new module and update cache.
			register(module);
			cache[key] = module;
		});

		after();

		// Return the context for HMR initialization.
		return context;
	};

	const context = loadModules();

	if (module.hot) {
		module.hot.accept(context.id, loadModules);
	}
};

// Maintain the selected block ID across HMR updates.
let selectedBlockId = null;
const storeSelectedBlock = () => {
	selectedBlockId = select("core/editor").getSelectedBlockClientId();
	dispatch("core/editor").clearSelectedBlock();
};
const refreshAllBlocks = () => {
	// Refresh all blocks by iteratively selecting each one.
	select("core/editor")
		.getBlocks()
		.forEach(({ clientId }) => {
			dispatch("core/editor").selectBlock(clientId);
		});
	// Reselect whatever was selected in the beginning.
	if (selectedBlockId) {
		dispatch("core/editor").selectBlock(selectedBlockId);
	} else {
		dispatch("core/editor").clearSelectedBlock();
	}
	selectedBlockId = null;
};

// Load all block index files.
autoload({
	getContext: () => require.context("./blocks", true, /index\.js$/),
	register: ({ name, options }) => registerBlockType(name, options),
	unregister: ({ name }) => unregisterBlockType(name),
	before: storeSelectedBlock,
	after: refreshAllBlocks
});

// Load all plugin files.
autoload({
	getContext: () => require.context("./plugins", true, /index\.js$/),
	register: ({ name, options }) => registerPlugin(name, options),
	unregister: ({ name }) => unregisterPlugin(name)
});

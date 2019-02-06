const { __ } = wp.i18n;
const { createBlock } = wp.blocks;
const { registerPlugin } = wp.plugins;
const { PluginSidebar, PluginSidebarMoreMenuItem } = wp.editPost;
const { Fragment } = wp.element;

import icons from "./icons";
import "./plugin.scss";
import SwitcherControls from "./components/SwitcherControls";

const LayoutSwitcher = () => {
  const layouts = {
    default: [createBlock("core/paragraph", {})],
    hero: [
      createBlock("core/cover", { align: "full" }),
      createBlock("core/button", { text: "Call to Action", align: "center" }),
      createBlock("core/columns", { columns: 3 })
    ],
    featured: [
      createBlock("core/heading", {}),
      createBlock("core/spacer", { height: "10" }),
      createBlock("core/media-text", { align: "full" }),
      createBlock("core/spacer", { height: "40" }),
      createBlock("core/quote", {}),
      createBlock("core/spacer", { height: "20" }),
      createBlock("core/media-text", { mediaPosition: "right" }),
      createBlock("core/paragraph", { placeholder: "Outro text" })
    ]
  };
  return (
    <Fragment>
      <PluginSidebarMoreMenuItem target="jsforwpadvgb-layout-switcher">
        {__("Layout Switcher", "jsforwpadvblocks")}
      </PluginSidebarMoreMenuItem>
      <PluginSidebar
        name="jsforwp-layout-switcher"
        title={__("Layout Switcher", "jsforwpadvblocks")}
      >
        <SwitcherControls layouts={layouts} icons={icons} />
      </PluginSidebar>
    </Fragment>
  );
};

registerPlugin("jsforwpadvgb-layout-switcher", {
  icon: icons.switcher,
  render: LayoutSwitcher
});

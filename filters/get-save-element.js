const { addFilter } = wp.hooks;

// Wrap all quote get-save-element a custom wrapper
const extendWithGetSaveElement = (el, type, attributes) => {
  if (type.name === "core/quote") {
    return <div className="MYWRAPPER">{el}</div>;
  }
  return el;
};

addFilter(
  "blocks.getSaveElement",
  "jsforwpadvgb/get-save-element",
  extendWithGetSaveElement
);

const { addFilter } = wp.hooks;

// Wrap all quote blocks with a custom wrapper
const quoteWrapperFilter = (el, type, attributes) => {
  if (type.name === "core/quote") {
    return <div className="MYWRAPPER">{el}</div>;
  }
  return el;
};

addFilter(
  "blocks.getSaveElement",
  "jsforwpadvgb/quote-wrapper",
  quoteWrapperFilter
);

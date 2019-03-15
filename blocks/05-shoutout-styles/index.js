/**
 * Block dependencies
 */
// import icons from "./icons";
import "./style.scss";
// import "./editor.scss";

/**
 * Internal block libraries
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Register example block
 */
export default registerBlockType("jsforwpadvblocks/shoutout-styles", {
  title: __("Shoutout", "jsforwpadvblocks"),
  description: __(
    "An example block for working with Styles API.",
    "jsforwpadvblocks"
  ),
    category: "jsforwpadvblocks",
  icon: {
    src: "megaphone"
  },
  keywords: [__("Call to Action", "jsforwpadvblocks")],
  attributes: {
    headline: {
      type: "string"
    },
    text: {
      type: "html"
    }
  },
  edit: props => {
    const {
      attributes: { headline, text },
      className,
      setAttributes,
      isSelected
    } = props;

    return (
      <div className={className}>
        {/* {isSelected ? (
          <TextControl
            label="Headline"
            value={headline}
            onChange={headline => setAttributes({ headline })}
          />
        ) : (
          <h2>{headline}</h2>
        )} */}
        <RichText
          value={headline}
          tagName="h2"
          placeholder={__("Headline", "jsforwpadvblocks")}
          onChange={headline => setAttributes({ headline })}
        />
        <RichText
          value={text}
          placeholder={__("Shoutout Text", "jsforwpadvblocks")}
          onChange={text => setAttributes({ text })}
        />
      </div>
    );
  },
  save: props => {
    const { headline, text } = props.attributes;
    return (
      <div>
        <RichText.Content value={headline} tagName="h2" />
        <RichText.Content value={text} tagName="div" />
      </div>
    );
  }
});

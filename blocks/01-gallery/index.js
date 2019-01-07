/**
 * Block dependencies
 */
import icon from "./icon";
import "./style.scss";
import "./editor.scss";

/**
 * Internal block libraries
 */
const { Fragment } = wp.element;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
  InspectorControls,
  MediaUpload,
  MediaPlaceholder,
  BlockControls,
  BlockAlignmentToolbar
} = wp.editor;
const {
  Button,
  IconButton,
  PanelBody,
  PanelRow,
  RadioControl,
  ToggleControl,
  Toolbar
} = wp.components;

import Gallery from "react-photo-gallery";

/**
 * Register block
 */
export default registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block.", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon,
  keywords: [
    __("Masonry", "jsforwpadvblocks"),
    __("Images Media", "jsforwpadvblocks"),
    __("Lightbox", "jsforwpadvblocks")
  ],
  attributes: {
    images: {
      type: "array",
      default: []
    },
    direction: {
      type: "string",
      default: "row"
    },
    isLightboxEnabled: {
      type: "boolean",
      default: true
    }
  },
  supports: {
    align: ["full", "wide"]
  },
  edit: props => {
    const {
      attributes: { direction, images, isLightboxEnabled },
      className,
      setAttributes
    } = props;
    const onSelectImages = newImages => {
      const images = newImages.map(img =>
        Object.assign(
          {},
          {
            src: img.sizes.large.url,
            width: img.sizes.large.width,
            height: img.sizes.large.height,
            id: img.id,
            alt: img.alt,
            caption: img.caption
          }
        )
      );
      setAttributes({
        images
      });
    };
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Gallery Settings", "jsforwpadvblocks")}
            initialOpen={true}
          >
            <PanelRow>
              <RadioControl
                label={__("Gridy Style", "jsforwpblocks")}
                selected={direction}
                options={[
                  { label: "Rows", value: "row" },
                  { label: "Columns", value: "column" }
                ]}
                onChange={direction => setAttributes({ direction })}
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label="Enable / disable lightbox"
                checked={isLightboxEnabled}
                onChange={isLightboxEnabled =>
                  setAttributes({ isLightboxEnabled })
                }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <div className={`${className} ${direction}`}>
          {!!!images.length && (
            <Fragment>
              <MediaPlaceholder
                icon={icon}
                labels={{
                  title: __("Gallery"),
                  instructions: __(
                    "Drag images, upload new ones or select files from your library."
                  )
                }}
                onSelect={onSelectImages}
                accept="image/*"
                multiple
              />
            </Fragment>
          )}
          {!!images.length && <Gallery photos={images} direction={direction} />}
        </div>
      </Fragment>
    );
  },
  save: props => {
    const { direction, images, isLightboxEnabled } = props.attributes;
    return (
      <div
        className={`${direction}`}
        data-direction={direction}
        data-lightbox={isLightboxEnabled}
      >
        <div class="react-photo-gallery--gallery server-side">
          <div style="display: flex; flex-flow: row wrap;">
            {images.map(img => (
              <img
                src={img.src}
                alt={img.alt}
                title={img.caption}
                width={img.width}
                height={img.height}
                data-id={img.id}
                style={{
                  width: img.width,
                  height: img.height
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
});

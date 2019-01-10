/**
 * Block dependencies
 */

import icon from "./icon";
import "./style.scss";
import Gallery from "react-photo-gallery";

/**
 * Block libraries
 */

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const {
  BlockControls,
  InspectorControls,
  MediaUpload,
  MediaPlaceholder
} = wp.editor;
const {
  IconButton,
  Toolbar,
  PanelBody,
  PanelRow,
  RadioControl,
  ToggleControl
} = wp.components;

/**
 * Register Block
 */

export default registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon,
  keywords: [
    __("Masonry", "jsforwpadvblocks"),
    __("Images Media", "jsforwpadvblocks"),
    __("Lightbox", "jsforwpadvblocks")
  ],
  supports: ["full", "wide"],
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
  edit: props => {
    const {
      attributes: { images, direction, isLightboxEnabled },
      className,
      setAttributes
    } = props;
    const onSelectImages = newImages => {
      const images = newImages.map(img => {
        return {
          src: img.sizes.large.url,
          width: img.sizes.large.width,
          height: img.sizes.large.height,
          id: img.id,
          alt: img.alt,
          caption: img.caption
        };
      });
      setAttributes({ images });
    };
    return (
      <Fragment>
        <InspectorControls>
          <PanelBody
            title={__("Gallery Settings", "jsforwpadvblocks")}
            initalOpen={true}
          >
            <PanelRow>
              <RadioControl
                label={__("Grid Style", "jsforwpadvblocks")}
                selected={direction}
                options={[
                  { label: __("Rows", "jsforwpadvblocks"), value: "row" },
                  { label: __("Columns", "jsforwpadvblocks"), value: "column" }
                ]}
                onChange={direction => setAttributes({ direction })}
              />
            </PanelRow>
            <PanelRow>
              <ToggleControl
                label={__("Enable / disable lightbox", "jsforwpadvblocks")}
                checked={isLightboxEnabled}
                onChange={isLightboxEnabled =>
                  setAttributes({ isLightboxEnabled })
                }
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        {!!images.length && (
          <BlockControls>
            <Toolbar>
              <MediaUpload
                allowedTypes={["images"]}
                multiple
                gallery
                value={images.map(img => img.id)}
                onSelect={onSelectImages}
                render={({ open }) => (
                  <IconButton
                    className="components-toolbar__control"
                    label={__("Edit Gallery", "jsforwpadvblocks")}
                    icon="edit"
                    onClick={open}
                  />
                )}
              />
            </Toolbar>
          </BlockControls>
        )}
        <div className={`${className} ${direction}`}>
          {!!!images.length ? (
            <MediaPlaceholder
              labels={{
                title: __("Gallery", "jsforwpadvblocks"),
                instructions: __(
                  "Drag images, upload new ones or select files from your library.",
                  "jsforwpadvblocks"
                )
              }}
              icon={icon}
              accept="images/*"
              multiple
              onSelect={onSelectImages}
            />
          ) : (
            <Gallery photos={images} direction={direction} />
          )}
        </div>
      </Fragment>
    );
  },
  save: props => {
    const { images, direction, isLightboxEnabled } = props.attributes;
    return (
      <div
        className={`${direction}`}
        data-direction={direction}
        data-isLightboxEnabled={isLightboxEnabled}
      >
        {images.map(img => (
          <img
            src={img.src}
            alt={img.alt}
            title={img.caption}
            data-id={img.id}
            width={img.width}
            height={img.height}
          />
        ))}
      </div>
    );
  }
});

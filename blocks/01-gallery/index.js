/**
 * Block dependencies
 */
import icon from "./icon";
import style from "./style.scss";
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
 * Register block
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
      attributes: { images, direction, isLightboxEnabled },
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
            id: img.sizes.large.id,
            alt: img.sizes.large.alt,
            caption: img.sizes.large.caption
          }
        )
      );
      setAttributes({ images });
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
                label={__("Grid Style", "jsforwpadvblocks")}
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
              icon={icon}
              labels={{
                title: __("Gallery", "jsforwpadvblocks"),
                instructions: __(
                  "Drag images, upload new ones or select files from your library",
                  "jsforwpadvblocks"
                )
              }}
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
        <div className="react-photo-gallery--gallery server-render">
          <div style="display: flex; flex-flow: row wrap">
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

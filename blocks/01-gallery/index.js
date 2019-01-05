/**
 * Block dependencies
 */
import icons from "./icons";
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
  Toolbar
} = wp.components;

import Gallery from "react-photo-gallery";

/**
 * Register example block
 */
export default registerBlockType("jsforwpadvblocks/gallery", {
  title: __("Gallery", "jsforwpadvblocks"),
  description: __("A demo custom gallery block.", "jsforwpadvblocks"),
  category: "jsforwpadvblocks",
  icon: {
    background: "rgba(254, 243, 224, 0.52)",
    src: icons.upload
  },
  keywords: [__("Media", "jsforwpadvblocks"), __("Images", "jsforwpadvblocks")],
  attributes: {
    direction: {
      type: "string",
      default: "row"
    },
    images: {
      type: "array",
      default: []
    },
    blockAlignment: {
      type: "string",
      default: "wide"
    }
  },
  getEditWrapperProps({ blockAlignment }) {
    if (
      "left" === blockAlignment ||
      "right" === blockAlignment ||
      "full" === blockAlignment
    ) {
      return { "data-align": blockAlignment };
    }
  },
  edit: props => {
    const {
      attributes: { direction, images, blockAlignment },
      className,
      setAttributes,
      isSelected
    } = props;
    const onSelectImages = photos => {
      const images = photos.map(img =>
        Object.assign(
          {},
          {
            src: img.sizes.large.url,
            width: img.sizes.large.width,
            height: img.sizes.large.height,
            id: img.id,
            alt: img.alt,
            caption: img.caption
            // sizes: img.sizes
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
                label={__("Flex Direction", "jsforwpblocks")}
                selected={direction}
                options={[
                  { label: "Row", value: "row" },
                  { label: "Column", value: "column" }
                ]}
                onChange={direction => setAttributes({ direction })}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>
        <BlockControls>
          <BlockAlignmentToolbar
            value={blockAlignment}
            onChange={blockAlignment => setAttributes({ blockAlignment })}
          />

          {!!images.length && (
            <Toolbar>
              <MediaUpload
                onSelect={onSelectImages}
                allowedTypes={["image"]}
                multiple
                gallery
                value={images.map(img => img.id)}
                render={({ open }) => (
                  <IconButton
                    className="components-toolbar__control"
                    label={__("Edit Gallery")}
                    icon="edit"
                    onClick={open}
                  />
                )}
              />
            </Toolbar>
          )}
        </BlockControls>

        <div className={`${className} ${direction}`}>
          {!!!images.length && (
            <Fragment>
              {/* <MediaUpload
              onSelect={onSelectImages}
              type="image"
              multiple="true"
              render={({ open }) => (
                <Button className={"button button-large"} onClick={open}>
                {icons.upload}
                {__(" Upload Image", "jsforwpadvblocks")}
                </Button>
                )}
              /> */}
              <MediaPlaceholder
                icon="format-gallery"
                className={className}
                labels={{
                  title: __("Gallery"),
                  instructions: __(
                    "Drag images, upload new ones or select files from your library."
                  )
                }}
                onSelect={onSelectImages}
                accept="image/*"
                //allowedTypes={ALLOWED_MEDIA_TYPES}
                multiple
                //notices={noticeUI}
                //onError={noticeOperations.createErrorNotice}
              />
            </Fragment>
          )}
          {!!images.length && <Gallery photos={images} direction={direction} />}
        </div>
      </Fragment>
    );
  },
  save: props => {
    const { direction, images, blockAlignment } = props.attributes;
    return (
      <div
        className={`align${blockAlignment} ${direction}`}
        data-direction={direction}
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

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Button, PanelBody, PanelRow } = wp.components;
const { withSelect, dispatch } = wp.data;

import SwitcherButton from "./SwitcherButton";
import ResetControls from "./ResetControls";

const SwitcherControls = ({ blocks, layouts, icons }) => {
  const blockIds = blocks.map(block => block.clientId);
  return (
    <Fragment>
      <PanelBody title={__("Layout Choices", "jsforwpadvblocks")} opened>
        <PanelRow className="layout-switcher">
          <SwitcherButton
            blockIds={blockIds}
            layout={layouts.hero}
            icon={icons.hero}
            label={__("Hero", "jsforwpadvblocks")}
          />
          <SwitcherButton
            blockIds={blockIds}
            layout={layouts.featured}
            icon={icons.featured}
            label={__("Featured", "jsforwpadvblocks")}
          />
        </PanelRow>
      </PanelBody>
      <PanelBody title={__("Reset Layout", "jsforwpadvblocks")}>
        <PanelRow>
          <ResetControls />
        </PanelRow>
      </PanelBody>
    </Fragment>
  );
};

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(SwitcherControls);

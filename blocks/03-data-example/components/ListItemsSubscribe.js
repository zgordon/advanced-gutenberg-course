const { Component } = wp.element;
const { subscribe, select, dispatch } = wp.data;
const { Button } = wp.components;

import {
  core,
  coreBlocks,
  coreEditor,
  coreEditPost,
  coreNotices,
  coreNux,
  coreViewport
} from "../selectors";

export default class ListItemsSubscribe extends Component {
  state = {
    blockCount: select("core/editor").getBlockCount()
  };

  componentDidMount() {
    const unsubscribe = subscribe(() => {
      const blockCount = select("core/editor").getBlockCount();
      this.setState({ blockCount });
      // core();
      // coreBlocks();
      // coreEditor();
      // coreEditPost();
      // coreNotices();
      // coreNux();
      coreViewport();
    });
  }

  //   console.log(blocks);
  render() {
    return (
      <div>
        <p>Block Count: {this.state.blockCount}</p>
        <Button
          onClick={() => {
            dispatch("core/nux").triggerGuide([
              "core/editor.inserter",
              "core/editor.settings",
              "core/editor.preview",
              "core/editor.publish"
            ]);
          }}
        >
          Trigger Guide
        </Button>
      </div>
    );
  }
}

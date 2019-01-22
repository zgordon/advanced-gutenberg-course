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

import {
  core as coreDispatch,
  coreEditor as coreEditorDispatch
} from "../dispatch";

export default class DataApiTest extends Component {
  state = {
    blockCount: select("core/editor").getBlockCount()
  };

  componentDidMount() {
    const unsubscribe = subscribe(() => {
      const blockCount = select("core/editor").getBlockCount();
      this.setState({ blockCount });
      // core();
      // coreBlocks();
      coreEditor();
      // coreEditPost();
      // coreNotices();
      // coreNux();
      // coreViewport();
    });
  }

  //   console.log(blocks);
  render() {
    return (
      <div>
        <p>Block Count: {this.state.blockCount}</p>
        <Button
          isPrimary
          onClick={() => {
            coreEditorDispatch();
          }}
        >
          Trigger
        </Button>
      </div>
    );
  }
}

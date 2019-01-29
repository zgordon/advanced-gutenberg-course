const { __ } = wp.i18n;
const { Component } = wp.element;
const { subscribe, select } = wp.data;

export default class SubscribeDemo extends Component {
  state = {
    blockCount: ""
  };

  componentDidMount() {
    const unsubscribe = subscribe(() => {
      const blockCount = select("core/editor").getBlockCount();

      // console.group("State Changed!");
      // console.log("Prev Count:", this.state.blockCount);
      // console.log("New Count:", blockCount);
      // console.groupEnd();

      // if (this.state.blockCount < blockCount) {
      //   console.log("Block Added!");
      // }
      // if (this.state.blockCount > blockCount) {
      //   console.log("Block Removed!");
      // }

      this.setState({ blockCount });
    });
  }

  render() {
    return (
      <div>
        <pre>
          <code>{"subscribe(() => {})"}</code>
        </pre>
        <p>
          {__("Block Count:", "jsforwpadvblocks")} {this.state.blockCount}
        </p>
      </div>
    );
  }
}

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

<<<<<<< HEAD
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
=======
      console.group("State Updated");
      console.log("Previous Count:", this.state.blockCount);
      console.log("Current Count:", blockCount);
      console.groupEnd();
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5

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

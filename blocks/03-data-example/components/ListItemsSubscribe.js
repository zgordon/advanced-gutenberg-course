const { Component } = wp.element;
const { subscribe, select } = wp.data;

export default class ListItemsSubscribe extends Component {
  state = {
    blockAdded: false,
    blockRemoved: false
  };
  displayBlockAddedMessage = () => {
    this.setState({ blockAdded: true });
    setTimeout(() => {
      this.setState({ blockAdded: false });
    }, 2600);
  };
  componentDidMount() {
    const prevBlockCount = select("core/editor").getBlockCount();
    const unsubscribe = subscribe(() => {
      const blockCount = select("core/editor").getBlockCount();
      if (prevBlockCount < blockCount) {
        this.displayBlockAddedMessage();
      }
    });
  }

  //   console.log(blocks);
  render() {
    return (
      <div>
        <p>
          Block Notice:
          {!!this.state.blockAdded && <strong>Block Added!</strong>}
        </p>
      </div>
    );
  }
}

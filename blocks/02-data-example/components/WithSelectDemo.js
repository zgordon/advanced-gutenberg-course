const { __ } = wp.i18n;
const { withSelect } = wp.data;

const WithSelectDemo = ({ blockCount }) => (
  <div>
    <pre>
      <code>{`withSelect(()=> {})(WithSelectDemo)`}</code>
    </pre>
    <p>
      {__("Block Count:", "jsforwpadvblocks")} {blockCount}
    </p>
  </div>
);

export default withSelect((select, ownProps) => {
  // console.log(ownProps);
  return {
    blockCount: select("core/editor").getBlockCount()
  };
})(WithSelectDemo);

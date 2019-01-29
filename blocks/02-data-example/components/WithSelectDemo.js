const { __ } = wp.i18n;
const { withSelect } = wp.data;

const WithSelectDemo = ({ blockCount }) => (
  <div>
    <pre>
<<<<<<< HEAD
      <code>{`withSelect(()=> {})(WithSelectDemo)`}</code>
=======
      <code>{`withSelect(() => {})(WithSelectDemo)`}</code>
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
    </pre>
    <p>
      {__("Block Count:", "jsforwpadvblocks")} {blockCount}
    </p>
  </div>
);

export default withSelect((select, ownProps) => {
<<<<<<< HEAD
  // console.log(ownProps);
=======
  // console.log("Props", ownProps);
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
  return {
    blockCount: select("core/editor").getBlockCount()
  };
})(WithSelectDemo);

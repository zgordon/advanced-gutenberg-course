const { withSelect } = wp.data;

import BlockItem from "./BlockItem";

const BlockList = ({ blocks }) => {
  const nodes = blocks.map(block => {
    return <BlockItem block={block} />;
  });
  return (
    <ul className="jsforwp-toc">
      {nodes}
      {/* {blocks.map(block => {
        return <BlockItem block={block} />;
      })} */}
    </ul>
  );
};

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(BlockList);

const { withSelect } = wp.data;

import BlockItem from "./BlockItem";

const BlockList = ({ blocks }) => {
  return (
    <ul className="jsforwp-toc">
      {blocks.map(block => (
        <BlockItem block={block} />
      ))}
    </ul>
  );
};

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(BlockList);

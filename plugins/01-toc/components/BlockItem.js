import BlockButton from "./BlockButton";

const BlockItem = ({ block }) => {
  let childBlocks = null;

  if (block.innerBlocks) {
    childBlocks = block.innerBlocks.map(innerBlock => (
      <BlockItem block={innerBlock} />
    ));
  }
  return (
    <li key={block.clientId}>
      <BlockButton block={block} />
      {childBlocks && <ul>{childBlocks}</ul>}
    </li>
  );
};

export default BlockItem;

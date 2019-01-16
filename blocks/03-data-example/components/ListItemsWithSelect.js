const { Component } = wp.element;
const { withSelect } = wp.data;

// import DeleteButton from "./ButtonDispatch";
import DeleteButton from "./ButtonWithDispatch";

const ListItemsWithSelect = ({ blocks, heading }) => (
  <div>
    <h3>{heading}</h3>
    <ul>
      {blocks.map(block => (
        <li>
          {block.name} <DeleteButton clientId={block.clientId} />
        </li>
      ))}
    </ul>
  </div>
);

export default withSelect((select, ownProps) => {
  // console.log(ownProps);
  return {
    blocks: select("core/editor").getBlocks()
  };
})(ListItemsWithSelect);

const { Component } = wp.element;
const { select } = wp.data;

const ListItemsSelect = ({ heading }) => {
  const blocks = select("core/editor").getBlocks();
  return (
    <div>
      <h3>{heading}</h3>
      <ul>
        {blocks.map(block => (
          <li>{block.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItemsSelect;

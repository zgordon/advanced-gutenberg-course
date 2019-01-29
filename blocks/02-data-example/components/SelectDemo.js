const { __ } = wp.i18n;
const { select } = wp.data;

<<<<<<< HEAD
const SelectDemo = prop => {
  const blockCount = select("core/editor").getBlockCount();

=======
const SelectDemo = props => {
  const blockCount = select("core/editor").getBlockCount();
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
  return (
    <div>
      <pre>
        <code>{"select()"}</code>
      </pre>
      <p>
        {__("Block Count:", "jsforwpadvblocks")} {blockCount}
      </p>
    </div>
  );
};

export default SelectDemo;

const { __ } = wp.i18n;
const { Button } = wp.components;
const { dispatch } = wp.data;
const { withSelect } = wp.data;

import DeleteButton from "./DeleteButton";

const WithDispatchDemo = ({ blocks }) => (
  <div>
    <pre>
      <code>{"withDispatch(() => {})(WithDispatchDemo)"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li>
          {block.name} <DeleteButton clientId={block.clientId} />
        </li>
      ))}
    </ul>
  </div>
);

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(WithDispatchDemo);

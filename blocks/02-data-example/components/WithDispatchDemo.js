const { __ } = wp.i18n;
const { Button } = wp.components;
const { withSelect, dispatch } = wp.data;

import DeleteButton from "./DeleteButton";

const DispatchDemo = ({ blocks }) => (
  <div>
    <pre>
      <code>{"withDispatch(()=>{})(WithDispatchDemo)"}</code>
    </pre>
    <ul>
      {blocks.map(block => (
        <li key={block.clientId}>
          {block.name}
          <DeleteButton clientId={block.clientId} />
        </li>
      ))}
    </ul>
  </div>
);

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
})(DispatchDemo);

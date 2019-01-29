const { __ } = wp.i18n;
const { Button } = wp.components;
<<<<<<< HEAD
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
=======
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
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5
        </li>
      ))}
    </ul>
  </div>
);

export default withSelect(select => {
  return {
    blocks: select("core/editor").getBlocks()
  };
<<<<<<< HEAD
})(DispatchDemo);
=======
})(WithDispatchDemo);
>>>>>>> f5cb6b4e299d6f9893722582ad2f6423b4028ae5

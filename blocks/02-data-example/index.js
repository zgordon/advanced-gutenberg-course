const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import icon from "./icon";
import "./style.scss";

import SelectDemo from "./components/SelectDemo";
import SubscribeDemo from "./components/SubscribeDemo";
import WithSelectDemo from "./components/WithSelectDemo";
import DispatchDemo from "./components/DispatchDemo";
import WithDispatchDemo from "./components/WithDispatchDemo";
import WithComposeDemo from "./components/WithComposeDemo";

export default registerBlockType("jsforwpadvblocks/data-example", {
  title: __("Data API Example", "jsforwpadvblocks"),
  description: __(
    "Demo of select, subscribe, dispatch, withSelect, withDispatch and compose",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon,
  attributes: {},
  edit: props => {
    const { className } = props;
    return (
      <div className={className}>
        <SelectDemo />
        <SubscribeDemo />
        <WithSelectDemo />
        <DispatchDemo />
        <WithDispatchDemo />
        <WithComposeDemo />
      </div>
    );
  },
  save: props => {
    return <p>{__("Data API Example", "jsforwpadvblocks")}</p>;
  }
});

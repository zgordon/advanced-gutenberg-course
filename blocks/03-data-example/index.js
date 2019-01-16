const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;

import icon from "./icon";
import CoreData from "./components/CoreData";
import ListItemsSelect from "./components/ListItemsSelect";
import ListItemsWithSelect from "./components/ListItemsWithSelect";
import ListItemsWithCompose from "./components/ListItemsWithCompose";
import ListItemsSubscribe from "./components/ListItemsSubscribe";

export default registerBlockType("jsforwpadvblocks/data-example", {
  title: __("Data Example", "jsforwpadvblocks"),
  description: __(
    "Demo of select, distaptch, withSelect and withDispatch",
    "jsforwpadvblocks"
  ),
  category: "jsforwpadvblocks",
  icon,
  attributes: {},
  edit: props => {
    return (
      <Fragment>
        <ListItemsSubscribe />
        {/* <ListItemsSelect
          heading={__("<ListItemsSelect />", "jsforwpadvblocks")}
        />
        <ListItemsWithSelect
          heading={__("<ListItemsWithSelect />", "jsforwpadvblocks")}
        />
        <ListItemsWithCompose /> */}
      </Fragment>
    );
  },
  save: props => {
    return <p>DATA</p>;
  }
});

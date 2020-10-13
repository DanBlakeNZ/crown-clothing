import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";
import { DirectoryMenu } from "./directory.styles.jsx";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ categories }) => (
  <DirectoryMenu>
    {categories.map(({ id, ...categoryProps }) => (
      <MenuItem key={id} {...categoryProps} /> //rather than title={title} imageUrl={imageUrl} size={size}
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

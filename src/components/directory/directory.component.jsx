import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ categories }) => (
  <div className="directory-menu">
    {categories.map(({ id, ...categoryProps }) => (
      <MenuItem key={id} {...categoryProps} /> //rather than title={title} imageUrl={imageUrl} size={size}
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

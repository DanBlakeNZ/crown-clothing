import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  //connect() below passes in state
  isLoading: (state) => !selectIsCollectionsLoaded(state), //memoization
});

const CollectionContainer = compose(connect(mapStateToProps), WithSpinner)(Collection);

export default CollectionContainer;

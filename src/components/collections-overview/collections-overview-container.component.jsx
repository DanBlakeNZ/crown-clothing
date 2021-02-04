import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, //matches WithSpinner expected prop name.
});

// const CollectionsOverviewContainer = connect(
//   mapStateToProps(WithSpinner(CollectionsOverview))
// );
// CollectionsOverview is wrapped by WithSpinner, which returns the collectionsOverview with Spinner component.
// It is then passed into connect which will pass mapStateToProps and the isLoading prop to WithSpinner.
// However this way can be difficult to read, especially if you have more higher order components to add.

// Solution is via compose which curries our functions together, it is equivalent to the above:
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

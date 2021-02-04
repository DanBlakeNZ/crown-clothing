import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../../pages/collection/collection.container.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview-container.component";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
          exact
          path={`${match.path}/:collectionName`}
          component={CollectionPageContainer}
        />

        {/* :collectionName (above) - this can be called whatever you want, it is simple the name we are giving to the parameter of what ever ends up after ${match.path} (much like when you add parameter names to a function). This makes it dynamic for each path. Doing this then provides the CollectionPage component with access to the 'collectionName' parameter value */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);

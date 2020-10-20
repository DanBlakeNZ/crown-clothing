import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections"); // The actual name of the collection is 'collections'

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    });
  }

  render() {
    const match = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.match.path}`} component={CollectionsOverview} />
        <Route
          exact
          path={`${match.match.path}/:collectionName`}
          component={CollectionPage}
        />

        {/* :collectionName - this can be called whatever you want, it is simple the name we are giving to the parameter of what ever ends up after ${match.path} (much like when you add parameter names to a function). This makes it dynamic for each path. Doing this then provides the CollectionPage component with access to the 'collectionName' parameter value */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);

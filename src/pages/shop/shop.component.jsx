import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionName`} component={CollectionPage} />

    {/* :collectionName - this can be called whatever you want, it is simple the name we are giving to the parameter of what ever ends up after ${match.path} (much like when you add parameter names to a function). This makes it dynamic for each path. Doing this then provides the CollectionPage component with access to the 'collectionName' parameter value */}
  </div>
);

export default ShopPage;

import React, { memo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Items from "../pages/items/items";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import MainLayout from "./MainLayout";

const Home = () => (
    <BrowserRouter> 
      <MainLayout>
        <Switch>
          <Route exact path="/items" component={Items} />
          <Route path="/items/:id" component={ProductDetail} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
);

export default memo(Home);

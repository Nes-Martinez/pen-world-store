import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import {
  getAllProductsReducer,
  getFeaturedProductsReducer,
  getSingleProductReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getAllProductsReducer,
  getFeatured: getFeaturedProductsReducer,
  getProduct: getSingleProductReducer,
});

const middleware = [thunk];

const localStorageCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: localStorageCart,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

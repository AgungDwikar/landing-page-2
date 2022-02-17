// men gumpulkan semua yang ada di productsaga middleware
import { takeEvery, all } from "redux-saga/effects";

import * as ActionTypeProduct from "../constants/ProductConstant";
import * as ActionTypeCategory from "../constants/CategoryConstant";
// import product saganya untuk generate fungsionnya
import { handleGetProduct, handleAddProduct, handleDeleteProduct } from "./ProductSaga";
import { handleGetCategory } from "./CategorySaga";

function* watchAll() {
    yield all([
        takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleGetProduct),
        takeEvery(ActionTypeProduct.ADD_PRODUCT_REQUEST, handleAddProduct),
        takeEvery(ActionTypeProduct.DELETE_PRODUCT_REQUEST,handleDeleteProduct),
        takeEvery(ActionTypeCategory.GET_CATEGORY_REQUEST, handleGetCategory),
    ]);
}

export default watchAll;

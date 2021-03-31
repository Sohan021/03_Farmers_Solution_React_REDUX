import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import Cookie from 'js-cookie';
import { roleDeleteReducer, roleDetailsReducer, roleListReducer, roleSaveReducer, roleUpdateReducer } from './reducers/user/roleReducers';
//import { cartReducer } from './reducers/shop/sCartReducers';
import { adminRegistrationReducer, farmerListReducer, farmerRegistrationReducer, holesellerListReducer, holesellerRegistrationReducer, userProfileDetailsReducer, userSigninReducer, userUpdatePasswordReducer, userUpdateReducer } from './reducers/user/accountReducers';
import { cartReducer, scartReducer } from './reducers/shop/sCartReducers';
import {
    scategoryListReducer,
    scategoryDetailsReducer,
    scategoryDeleteReducer,
    scategoryUpdateReducer,
    scategorySaveReducer
} from './reducers/shop/scategoryReducers'

import {
    sinstrumentListReducer,
    sinstrumentListByCategoryReducer,
    sinstrumentDetailsReducer,
    sinstrumentDeleteReducer,
    sinstrumentUpdateReducer,
    sinstrumentSaveReducer
} from './reducers/shop/sInstrumentReducers'
import {
    mysOrderListReducer,
    sorderCreateReducer,
    sorderDeleteReducer,
    sorderDetailsReducer,
    sorderListReducer,
    sorderPayReducer
} from './reducers/shop/sOrderReducers';
import { bcartReducer } from './reducers/business/bCartReducers';
import {
    bcategoryDeleteReducer,
    bcategoryDetailsReducer,
    bcategoryListReducer,
    bcategorySaveReducer,
    bcategoryUpdateReducer
} from './reducers/business/bcategoryReducers';

import {
    sproductListReducer,
    sproductListByCategoryReducer,
    sproductDetailsReducer,
    sproductDeleteReducer,
    sproductUpdateReducer,
    sproductSaveReducer
} from './reducers/business/bproductReducers'

import { countryDeleteReducer, countryDetailsReducer, countryListReducer, countrySaveReducer, countryUpdateReducer } from './reducers/Area/countryReducers';
import { divisionDeleteReducer, divisionDetailsReducer, divisionListReducer, divisionSaveReducer, divisionUpdateReducer } from './reducers/Area/divisionReducers';
import { districtDeleteReducer, districtDetailsReducer, districtListReducer, districtSaveReducer, districtUpdateReducer } from './reducers/Area/districtReducers';
import { upozilaDeleteReducer, upozilaDetailsReducer, upozilaListReducer, upozilaSaveReducer, upozilaUpdateReducer } from './reducers/Area/upozilaReducers';
import { unionDeleteReducer, unionDetailsReducer, unionListReducer, unionSaveReducer, unionUpdateReducer } from './reducers/Area/unionOrWardReducers';
import { marketDeleteReducer, marketDetailsReducer, marketListReducer, marketSaveReducer, marketUpdateReducer } from './reducers/Area/marketReducers';
import { areaCodeListReducerad, countryListReducerad, districtListReducerad, divisionListReducerad, marketListReducerad, unionListReducerad, upozilaListReducerad } from './reducers/Area/addressReducers';
import { borderCreateReducer, borderDeleteReducer, borderDetailsReducer, borderListReducer, borderPayReducer, farmerbOrderListReducer, mybOrderListReducer } from './reducers/business/borderReducers';


const scartItems = Cookie.getJSON('scartItems') || [];
const bcartItems = Cookie.getJSON('bcartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;


const initialState = {
    scart: { scartItems },
    bcart: { bcartItems },
    userSignIn: { userInfo },
};

const reducer = combineReducers({

    roleList: roleListReducer,
    roleDetails: roleDetailsReducer,
    roleSave: roleSaveReducer,
    roleUpdate: roleUpdateReducer,
    roleDelete: roleDeleteReducer,

    farmerRegistrationReducer: farmerRegistrationReducer,
    holesellerListReducer: holesellerListReducer,
    holesellerRegistrationReducer: holesellerRegistrationReducer,
    adminRegistrationReducer: adminRegistrationReducer,
    userUpdateReducer: userUpdateReducer,
    userPasswordUpdate: userUpdatePasswordReducer,
    userProfileDetailsReducer: userProfileDetailsReducer,
    farmerListReducer: farmerListReducer,

    scategoryListReducer: scategoryListReducer,
    scategoryDetailsReducer: scategoryDetailsReducer,
    scategoryDeleteReducer: scategoryDeleteReducer,
    scategoryUpdateReducer: scategoryUpdateReducer,
    scategorySaveReducer: scategorySaveReducer,

    bcategoryListReducer: bcategoryListReducer,
    bcategoryDetailsReducer: bcategoryDetailsReducer,
    bcategoryDeleteReducer: bcategoryDeleteReducer,
    bcategoryUpdateReducer: bcategoryUpdateReducer,
    bcategorySaveReducer: bcategorySaveReducer,

    sinstrumentListReducer: sinstrumentListReducer,
    sinstrumentListByCategoryReducer: sinstrumentListByCategoryReducer,
    sinstrumentDetailsReducer: sinstrumentDetailsReducer,
    sinstrumentDeleteReducer: sinstrumentDeleteReducer,
    sinstrumentUpdateReducer: sinstrumentUpdateReducer,
    sinstrumentSaveReducer: sinstrumentSaveReducer,

    sorderCreateReducer: sorderCreateReducer,
    sorderDetailsReducer: sorderDetailsReducer,
    sorderPayReducer: sorderPayReducer,
    mysOrderListReducer: mysOrderListReducer,
    sorderListReducer: sorderListReducer,
    sorderDeleteReducer: sorderDeleteReducer,

    countryList: countryListReducer,
    countryDetails: countryDetailsReducer,
    countrySave: countrySaveReducer,
    countryUpdate: countryUpdateReducer,
    countryDelete: countryDeleteReducer,

    divisionList: divisionListReducer,
    divisionDetails: divisionDetailsReducer,
    divisionSave: divisionSaveReducer,
    divisionUpdate: divisionUpdateReducer,
    divisionDelete: divisionDeleteReducer,

    districtList: districtListReducer,
    districtDetails: districtDetailsReducer,
    districtSave: districtSaveReducer,
    districtUpdate: districtUpdateReducer,
    districtDelete: districtDeleteReducer,

    upozilaList: upozilaListReducer,
    upozilaDetails: upozilaDetailsReducer,
    upozilaSave: upozilaSaveReducer,
    upozilaUpdate: upozilaUpdateReducer,
    upozilaDelete: upozilaDeleteReducer,

    unionList: unionListReducer,
    unionDetails: unionDetailsReducer,
    unionSave: unionSaveReducer,
    unionUpdate: unionUpdateReducer,
    unionDelete: unionDeleteReducer,

    marketList: marketListReducer,
    marketDetails: marketDetailsReducer,
    marketSave: marketSaveReducer,
    marketUpdate: marketUpdateReducer,
    marketDelete: marketDeleteReducer,

    countryListAd: countryListReducerad,
    divisionListAd: divisionListReducerad,
    districtListAd: districtListReducerad,
    upozilaListAd: upozilaListReducerad,
    unionListAd: unionListReducerad,
    marketListAd: marketListReducerad,
    areaCodeList: areaCodeListReducerad,

    userSignIn: userSigninReducer,
    scart: scartReducer,
    bcart: bcartReducer,


    sproductListReducer: sproductListReducer,
    sproductListByCategoryReducer: sproductListByCategoryReducer,
    sproductDetailsReducer: sproductDetailsReducer,
    sproductDeleteReducer: sproductDeleteReducer,
    sproductUpdateReducer: sproductUpdateReducer,
    sproductSaveReducer: sproductSaveReducer,

    borderCreateReducer: borderCreateReducer,
    borderDetailsReducer: borderDetailsReducer,
    borderPayReducer: borderPayReducer,
    mybOrderListReducer: mybOrderListReducer,
    farmerbOrderListReducer: farmerbOrderListReducer,
    borderListReducer: borderListReducer,
    borderDeleteReducer: borderDeleteReducer,

    form: formReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
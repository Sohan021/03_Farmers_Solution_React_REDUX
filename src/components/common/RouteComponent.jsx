import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";

import HomeScreen from './HomeScreenComponent';
import NavigationComponent from './NavigationComponent';
import DivisionScreen from "../Area/division/divisionsScreen";
import DivisionCreateScreen from "../Area/division/divisionCreateScreen";
import DivisionDetails from "../Area/division/divisonDetailsScreen";
import DivisionEditScreen from "../Area/division/divisionEditScreen";
import DistrictScreen from "../Area/district/districtsScreen";
import DistrictCreateScreen from "../Area/district/districtCreateScreen";
import DistrictEditScreen from "../Area/district/districtEditScreen";
import DistrictDetails from "../Area/district/districtDetailsScreen";
import UpozilaScreen from "../Area/upozila/upozilasScreen";
import UpozilaCreateScreen from "../Area/upozila/upozilaCreateScreen";
import UpozilaDetails from "../Area/upozila/upozilaDetailsScreen";
import UpozilaEditScreen from "../Area/upozila/upozilaEditScreen";
import UnionScreen from "../Area/union/unionsScreen";
import UnionCreateScreen from "../Area/union/unionCreateScreen";
import UnionDetails from "../Area/union/unionDetailsScreen";
import UnionEditScreen from "../Area/union/unionEditScreen";
import MarketsScreen from "../Area/market/marketsScreen";
import MarketCreateScreen from "../Area/market/marketCreateScreen";
import MarketDetails from "../Area/market/marketDetailsScreen";
import MarketEditScreen from "../Area/market/marketEditScreen";
import AdminRegistrationScreen from "../user/AdminSignUpScreen";
import RolesScreen from "../user/Role/RolesScreen";
import RoleCreateScreen from "../user/Role/RoleCreateScreen";
import RoleUpdateScreen from "../user/Role/RoleUpdateScreen";
import RoleDetails from "../user/Role/RoleDetailsScreen";
import SigninScreen from "../user/SignInScreen";
import FarmerSignUpScreen from "../user/FarmerSignUpScreen";
import WholeSellerSignUpScreen from "../user/WholeSellerSignUpScreen";
import CategorySScreen from "../shop/scategory/sCaregoriesScreen";
import CategoryCreateSScreen from "../shop/scategory/sCategoryCreateScreen";
import CategorySDetails from "../shop/scategory/sCategoryDetails";
import CategorySUpdateScreen from "../shop/scategory/sCategoryUpdate";
import CategoryBScreen from "../business/bcategory/bCategoriesScreen";
import CategoryCreateBScreen from "../business/bcategory/bCategoryDetailsScreen";
import CategoryBDetails from "../business/bcategory/bCategoryScreen";
import CategoryBUpdateScreen from "../business/bcategory/bCategoryUpdate";
import InstrumentHomeScreen from "../shop/sinstrument/InstrumentHomeScreen";
import InstrumentCreateScreen from "../shop/sinstrument/InstrumentCreateScren";
import InstrumentDetailsScreen from "../shop/sinstrument/InstrumentDetailsScreen";
import InstrumentssScreen from "../shop/sinstrument/InstrumentsScreen";
import InstrumentUpdateScreen from "../shop/sinstrument/InstrumnetUpdateScreen";
import InstrumentCaregory from "../shop/sinstrument/InstrumentCategory";
import InstrumentListByCategory from "../shop/sinstrument/InstrumentListByCategories";
import SCartScreen from "../shop/scart/sCartScreen";
import SPlaceOrderScreen from "../shop/sorder/splacesOrder";
import OrderListForFarmer from "../shop/sorder/sorderListForFarmer";
import SOrderListForAdmin from "../shop/sorder/sorderListForAdmin";
import SOrderDetails from "../shop/sorder/sorderdetails";
import AreaCodeScreen from "../Area/AreaCode/AreaCodeComponent";
import CreateProductScreen from "../business/bproduct/createProductScreen";
import MyProductList from "../business/bproduct/myproductList";
import WholeSellerFindFarmer from "../business/bproduct/wholesellerSearchMarket";
import ProductDetailsScreen from "../business/bproduct/productDetailsScreen"
import BCartScreen from "../business/bcart/bCartScreen";
import BPlaceOrderScreen from "../business/border/bplaceorder";
import BOrderListForAdmin from "../business/border/borderListScreenForAdmin";
import BOrderDetails from "../business/border/borderDetails";
import BOrderListGetForFarmer from "../business/border/borderListGetForFarmer";
import WoleSellerListForAdmin from "../user/WholeSellerListScreen";
import FarmerListForAdmin from "../user/FarmerListRequest";
import ChangePasswordScreen from "../user/changePassswordScreen";
import UserProfileDetailsScreen from "../user/UserProfileScreen";


const RouteComponemt = ({ sidebarIsOpen, toggleSidebar }) => (
    <Container
        fluid
        className={classNames("content", { "is-open": sidebarIsOpen })}
    >
        <NavigationComponent toggleSidebar={toggleSidebar} />
        <Switch>

            <Route path="/" exact component={HomeScreen} />

            <Route path="/roles" exact component={RolesScreen} />
            <Route path="/rolecreate" exact component={RoleCreateScreen} />
            <Route path="/roledetails/:id" exact component={RoleDetails} />
            <Route path="/roleupdate/:id" exact component={RoleUpdateScreen} />

            <Route path="/divisions" exact component={DivisionScreen} />
            <Route path="/divisioncreate" exact component={DivisionCreateScreen} />
            <Route path="/divisiondetails/:id" exact component={DivisionDetails} />
            <Route path="/divisionupdate/:id" exact component={DivisionEditScreen} />

            <Route path="/districts" exact component={DistrictScreen} />
            <Route path="/districtcreate" exact component={DistrictCreateScreen} />
            <Route path="/districtdetails/:id" exact component={DistrictDetails} />
            <Route path="/districtupdate/:id" exact component={DistrictEditScreen} />

            <Route path="/upozilas" exact component={UpozilaScreen} />
            <Route path="/upozilacreate" exact component={UpozilaCreateScreen} />
            <Route path="/upoziladetails/:id" exact component={UpozilaDetails} />
            <Route path="/upozilaupdate/:id" exact component={UpozilaEditScreen} />

            <Route path="/unions" exact component={UnionScreen} />
            <Route path="/unioncreate" exact component={UnionCreateScreen} />
            <Route path="/uniondetails/:id" exact component={UnionDetails} />
            <Route path="/unionupdate/:id" exact component={UnionEditScreen} />

            <Route path="/markets" exact component={MarketsScreen} />
            <Route path="/marketcreate" exact component={MarketCreateScreen} />
            <Route path="/marketdetails/:id" exact component={MarketDetails} />
            <Route path="/marketupdate/:id" exact component={MarketEditScreen} />

            <Route path="/adminsignup" exact component={AdminRegistrationScreen} />
            <Route path="/farmersignup" exact component={FarmerSignUpScreen} />
            <Route path="/wholesellersignup" exact component={WholeSellerSignUpScreen} />
            <Route path="/signin" exact component={SigninScreen} />

            <Route path="/scategories" exact component={CategorySScreen} />
            <Route path="/scategorycreate" exact component={CategoryCreateSScreen} />
            <Route path="/scategorydetails/:id" exact component={CategorySDetails} />
            <Route path="/scategoryedit/:id" exact component={CategorySUpdateScreen} />

            <Route path="/bcategories" exact component={CategoryBScreen} />
            <Route path="/bcategorycreate" exact component={CategoryCreateBScreen} />
            <Route path="/bcategorydetails/:id" exact component={CategoryBDetails} />
            <Route path="/bcategoryedit/:id" exact component={CategoryBUpdateScreen} />

            <Route path="/instruments" exact component={InstrumentHomeScreen} />
            <Route path="/instrumentcreate" exact component={InstrumentCreateScreen} />
            <Route path="/instrumentsdetails/:id" exact component={InstrumentDetailsScreen} />
            <Route path="/instrumentsadmin" exact component={InstrumentssScreen} />
            <Route path="/instrumentedit/:id" exact component={InstrumentUpdateScreen} />
            <Route path="/instrumentcategory" exact component={InstrumentCaregory} />
            <Route path="/instrumentcategory/:id" exact component={InstrumentListByCategory} />

            <Route path="/createproduct" exact component={CreateProductScreen} />

            <Route path="/scart/:id?" exact component={SCartScreen} />
            <Route path="/splaceorder" exact component={SPlaceOrderScreen} />
            <Route path="/sorderList" exact component={OrderListForFarmer} />
            <Route path="/sorderListforadmin" exact component={SOrderListForAdmin} />
            <Route path="/sorderDeatils/:id" exact component={SOrderDetails} />

            <Route path="/bcart/:id?" exact component={BCartScreen} />
            <Route path="/bplaceorder" exact component={BPlaceOrderScreen} />
            <Route path="/areacodes" exact component={AreaCodeScreen} />
            <Route path="/myproducts" exact component={MyProductList} />
            <Route path="/productsdetails/:id" exact component={ProductDetailsScreen} />

            <Route path="/borderlistadmin" exact component={BOrderListForAdmin} />
            <Route path="/bOrderDeatils/:id" exact component={BOrderDetails} />

            <Route path="/borderlistgetdarmer" exact component={BOrderListGetForFarmer} />

            <Route path="/wholesellerlist" exact component={WoleSellerListForAdmin} />

            <Route path="/farmerslist" exact component={FarmerListForAdmin} />

            <Route path="/changepassword" exact component={ChangePasswordScreen} />

            <Route path="/profile" exact component={UserProfileDetailsScreen} />

            <Route path="/findMarket" exact component={WholeSellerFindFarmer} />



        </Switch>
    </Container>
);

export default RouteComponemt;


import React, { useEffect } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function SideBar({ isOpen, toggle }) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    useEffect(() => {

        return () => {
            //
        }
    }, [])

    return (
        <div className={classNames("sidebar", { "is-open": isOpen })}>
            <br />
            <br />
            <div className="sidebar-header">
                <span color="info" onClick={toggle} style={{ color: "#fff" }}>
                    &times;
                </span>

            </div>
            {userInfo.item2.name == "Admin" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Home</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/divisions"}>
                                Division
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/districts"}>
                                District
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/upozilas"}>
                                Upozila
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/unions"}>
                                UnionOrWard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/markets"}>
                                Market
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/roles"}>
                                Application_Role
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <h3>Shop</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/scategories"}>
                                Instrument_Category
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/instruments"}>
                                Instrument
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/instrumentcreate"}>
                                Instrument Create
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/sorderListforadmin"}>
                                OrderList
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <h3>Business</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/bcategories"}>
                                Category
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/borderlistadmin"}>
                                WholeSeller OrderList
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/farmerslist"}>
                                Farmer
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/wholesellerlist"}>
                                Whole_Seller
                            </NavLink>
                        </NavItem>

                    </Nav>
                </div>
            ) : (

                    <h1> </h1>
                )
            }


            {userInfo.item2.name == "Farmer" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">
                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Farmer</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/instruments"}>
                                Instrument
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/sorderList"}>
                                My Order
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area_Code
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/createproduct"}>
                                Create_Product
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/myproducts"}>
                                My Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/profile"}>
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/changepassword"}>
                                Password Change
                            </NavLink>
                        </NavItem>
                    </Nav>


                </div>
            ) : (
                    <h1> </h1>
                )
            }

            {userInfo.item2.name == "WholeSeller" ? (
                <div className="side-menu">
                    <Nav vertical className="list-unstyled pb-3">

                        <NavItem>
                            <NavLink tag={Link} to={"/"}>
                                <h3>Whole Seller</h3>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/findMarket"}>
                                Find Market
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/borderlistadmin"}>
                                WholeSeller OrderList
                            </NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink tag={Link} to={"/findMarket"}>
                                Farmer OrderList[Get]
                            </NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink tag={Link} to={"/areacodes"}>
                                Area_Code
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/profile"}>
                                Profile
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to={"/changepassword"}>
                                Password Change
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            ) : (
                    <h1> </h1>
                )
            }



        </div>
    );
}






export default SideBar;

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    Navbar,
    Button,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { userSignOut } from '../../actions/user/accountActions'


const NavigationComponent = ({ toggleSidebar, props }) => {


    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const dispatch = useDispatch();

    useEffect(() => {

        return () => {
            //
        }
    }, [])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        dispatch(userSignOut());
    }
    // const handleLogout = () => {
    //     dispatch(userSignOut());
    // }

    return (
        <Navbar
            color="#fff"
            style={{ backgroundColor: "#fff", height: "60px", borderBlockColor: "#1FC46C", borderColor: "#1FC46C" }}
            light
            className="navbar"
            expand="md"
            fixed="top"
        >
            <Button style={{ color: "#fff", background: "#1FC46C" }} onClick={toggleSidebar}>
                <b>F_S</b>
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={topbarIsOpen} navbar>

                <Nav>
                    <NavLink style={{ color: "#1FC46C" }} href="/products"><h1>Farmers_Solution</h1></NavLink>
                </Nav>
                {userInfo ? (
                    <Nav className="ml-auto" navbar>

                        {/* <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 0,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                            <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 0,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 10,
                                width: "100px",
                                textAlign: "center"
                            }} onClick={handleLogout}><h5>Logout </h5></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{
                                color: "#1FC46C",
                                backgroundColor: "#fff",
                                borderRadius: 0,
                                width: "10px",
                                textAlign: "center"
                            }}></NavLink>
                        </NavItem>
                    </Nav>

                ) : (
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "200px",
                                    textAlign: "center"
                                }} href="/wholesellersignup"><h5><i>WholeSeller_SignUp</i></h5></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "200px",
                                    textAlign: "center"
                                }} href="/farmersignup"><h5><i>Farmer_SignUp</i></h5></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "10px",
                                    textAlign: "center"
                                }}></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "100px",
                                    textAlign: "center"
                                }} href="/SignIn"><h5><i>SignIn</i></h5></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{
                                    color: "#1FC46C",
                                    backgroundColor: "#fff",
                                    borderRadius: 0,
                                    width: "10px",
                                    textAlign: "center"
                                }}></NavLink>
                            </NavItem>
                        </Nav>
                    )}
            </Collapse>
        </Navbar >
    );

};

export default NavigationComponent;



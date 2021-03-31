import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { adminRegister } from '../../actions/user/accountActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';



function AdminRegistrationScreen(props) {

    const [firstname, setFirstName] = useState('');

    const [mobilenumber, setMobilenumber] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const Register = useSelector(state => state.adminRegistrationReducer);
    const { userinfo } = Register;



    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userinfo) {
            props.history.push(redirect);
        }

        return () => {
            //
        };
    }, [userinfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(adminRegister(
            firstname,
            mobilenumber,
            email,
            password,
            confirmPassword
        ));
        props.history.push("/");
    }

    return (
        <div className="container" >
            {1 && (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>SignUp Admin</h1>
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="firstname"
                                        style={{ color: 'white' }}>First Name</Label>
                                    <Input type="text"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter Name"
                                        size="lg"
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="countInStock" style={{ color: 'white' }}>Phone Number</Label>
                                    <Input
                                        type="text"
                                        name="mobile_no"
                                        id="mobile_no"
                                        placeholder="Enter Mobile No"
                                        size="lg"
                                        value={mobilenumber}
                                        onChange={(e) => setMobilenumber(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="email" style={{ color: 'white' }}>Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email"
                                        size="lg"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="firstname" style={{ color: 'white' }}>Password</Label>
                                    <Input type="password"
                                        name="firstname"
                                        id="firstname"
                                        placeholder="Enter Password"
                                        size="lg"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="lastname" style={{ color: 'white' }}>Confirm Password</Label>
                                    <Input type="password"
                                        name="price"
                                        id="price"
                                        placeholder="Enter Confirm Password"
                                        size="lg"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                            <div className="col col-lg-12">
                                <Button
                                    style={{
                                        color: "#1FC46C",
                                        backgroundColor: "#fff"
                                    }}
                                    outline color="success" size="lg" block type="submit">
                                    Sign Up
                                </Button>
                            </div>

                        </div>
                    </Form>
                </div>
            )
            }
        </div >
    );
}
export default AdminRegistrationScreen;





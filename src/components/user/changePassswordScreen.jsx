import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userPasswordUpdate } from '../../actions/user/accountActions';
import { Card } from 'react-bootstrap'
import { Button, CustomInput, Form, FormGroup, Input, Label } from 'reactstrap';

function ChangePasswordScreen(props) {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const adminUpdatePassword = useSelector((state) => state.userPasswordUpdate);
    const { adminUpdatePasswordInfo } = adminUpdatePassword;

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        const currentuserId = userInfo.item1.id;

        dispatch(userPasswordUpdate(
            currentuserId,
            currentPassword,
            newPassword,
            confirmPassword
        ));
    }

    return (

        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <div className="row">
                    <div className="col-3">

                    </div>
                    <div className="col-6">
                        <Card style={{ padding: "10px", borderColor: "#000" }}>
                            <div className="row">
                                <div className="col-2">

                                </div>
                                <div className="col-8">
                                    <Card style={{ height: "40px", justifyContent: "center", alignItems: "center", color: "#fff", backgroundColor: "#000" }}>
                                        Change Password
                                    </Card>
                                    <br />
                                    <br />

                                    <Form
                                        onSubmit={submitHandler}
                                    >
                                        <div
                                            style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                                        >
                                            <FormGroup >
                                                <Label
                                                    for="name"
                                                    style={{ color: "#000" }}
                                                >
                                                    Current Password
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="password"
                                                    name="password"
                                                    color="06E2FF"
                                                    placeholder="Enter Current Password"
                                                    size="lg"
                                                    value={currentPassword}
                                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#000" }}
                                                >
                                                    New Password
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="password"
                                                    name="newPassword"
                                                    color="06E2FF"
                                                    placeholder="Enter New Password"
                                                    size="lg"
                                                    value={newPassword}
                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                />
                                            </FormGroup>
                                            <FormGroup >
                                                <Label
                                                    for="password"
                                                    style={{ color: "#000" }}
                                                >
                                                    Confirm Password
                                                </Label>
                                                <Input
                                                    style={{ color: "#000", backgroundColor: "#fff" }}
                                                    type="password"
                                                    name="confirmPassword"
                                                    color="06E2FF"
                                                    placeholder="Confirm Password"
                                                    size="lg"
                                                    value={confirmPassword}
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
                                            </FormGroup>
                                        </div>

                                        <Button
                                            style={{
                                                color: "#000",
                                            }}
                                            outline color="success" size="lg" block type="submit">
                                            Change
                                        </Button>

                                    </Form>
                                </div>
                                <div className="col-2">

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-3">
                    </div>
                </div>
            </div>
        </>

    );
}
export default ChangePasswordScreen;


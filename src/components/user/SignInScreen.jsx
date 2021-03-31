import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../actions/user/accountActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function SigninScreen(props) {


    const [mobilenumber, setMobilenumber] = useState('');
    const [password, setPassword] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);

    const dispatch = useDispatch();

    //const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {

        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(signIn(mobilenumber, password));

        props.history.push("/");


    }

    return (
        <div className="content" style={{ backgroundColor: "#fff" }}>
            <br />
            <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                <br />
                <br />
                <br />
                <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Sign In</h1>
                <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                <Form

                    onSubmit={submitHandler}
                >
                    <div

                        style={{ alignItems: "center", justifyContent: "center", textAlign: "center" }}
                    >
                        <FormGroup >
                            <Label
                                for="name"
                                style={{ color: "#1FC46C" }}
                            >
                                Phone Number
                                    </Label>
                            <Input
                                
                                type="text"
                                name="name"
                               
                                placeholder="Enter Your Phone Number"
                                size="lg"
                                value={mobilenumber}
                                onChange={(e) => setMobilenumber(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup >
                            <Label
                                for="password"
                                style={{ color: "#1FC46C" }}
                            >
                                Password
                                    </Label>
                            <Input
                              
                                type="password"
                                name="name"

                                placeholder="Enter Password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <Button
                        style={{
                            color: "#1FC46C",
                            backgroundColor: "#fff"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        SignIn
                    </Button>
                    <Button
                        style={{
                            color: "#1FC46C",
                            backgroundColor: "#fff"
                        }}
                        outline color="primary" size="lg" block type="submit">
                        <a href="/signup">Create New Account?</a>
                    </Button>
                </Form>
            </div>
        </div >
    )
}
export default SigninScreen;
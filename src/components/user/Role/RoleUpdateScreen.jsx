import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    updateRole,
    detailsRole
} from '../../../actions/user/roleActions';


import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function RoleUpdateScreen(props) {

    const roleId = props.match.params.id;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');


    const roleDetails = useSelector((state) => state.roleDetails);

    const { role } = roleDetails;



    const {
        success: successUpdate
    } = role;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsRole(roleId));
        setName(role.name)
        setDescription(role.description)
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateRole({
                name,
                description
            }, roleId)
        );
        props.history.push("/roles");
    };

    return (
        <div className="container">
            {role ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"

                                    size="lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="district">Description</Label>
                                <Input type="text"
                                    name="district"
                                    id="district"
                                    placeholder={role.unionCode}
                                    size="lg"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            ) :
                <h1>Error</h1>
            }
        </div>
    );
}
export default RoleUpdateScreen;

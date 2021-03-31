import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveUnion,
    listUnions
} from '../../../actions/Area/unionOrWardActions';

import {
    listUpozilas
} from '../../../actions/Area/upozilaActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function UnionCreateScreen(props) {

    const [name, setName] = useState('');
    const [unionOrWardCode, setUnionCode] = useState('');
    const [upozilaId, setUpozila] = useState('');



    const unionSave = useSelector((state) => state.unionSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = unionSave;

    const unionDelete = useSelector((state) => state.unionDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = unionDelete;

    const upozilaList = useSelector((state) => state.upozilaList);
    const { upozilas } = upozilaList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUnions());
        dispatch(listUpozilas());

        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveUnion({
                name,
                unionOrWardCode,
                upozilaId
            })
        );
        props.history.push("/unions");
    };
    const setUpozilaHandler = (e) => {
        setUpozila(e.target.value);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            {upozilas ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Create Union</h1>
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter division Name"
                                        size="lg"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="union">Union Code</Label>
                                    <Input type="text"
                                        name="union"
                                        id="union"
                                        placeholder="Enter Union Code"
                                        size="lg"
                                        value={unionOrWardCode}
                                        onChange={(e) => setUnionCode(e.target.value)}
                                    />
                                </FormGroup>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="upozila">Upozila</Label>
                                    <Input
                                        type="select"
                                        name="upozila"
                                        id="upozila"
                                        size="lg"
                                        onChange={setUpozilaHandler}
                                    >
                                        <option>Select Upozila</option>
                                        {upozilas.map((upozila) => (
                                            <option value={upozila.id}>
                                                {upozila.name}
                                            </option>
                                        ))}
                                    </Input>
                                </FormGroup>
                            </div>
                        </div>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                </div>
            ) :
                <h1>Error</h1>
            }
        </div>
    );
}
export default UnionCreateScreen;

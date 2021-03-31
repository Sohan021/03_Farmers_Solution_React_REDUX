import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveUpozila,
    listUpozilas
} from '../../../actions/Area/upozilaActions';

import {
    listDistricts
} from '../../../actions/Area/districtActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function UpozilaCreateScreen(props) {

    const [name, setName] = useState('');
    const [upozilaCode, setUpozilaCode] = useState('');
    const [districtId, setDivision] = useState('');



    const upozilaSave = useSelector((state) => state.upozilaSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = upozilaSave;

    const upozilaDelete = useSelector((state) => state.upozilaDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = upozilaDelete;

    const districtList = useSelector((state) => state.districtList);
    const { districts } = districtList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUpozilas());
        dispatch(listDistricts());
        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveUpozila({
                name,
                upozilaCode,
                districtId
            })
        );
        props.history.push("/upozilas");
    };
    const setDivisionHandler = (e) => {
        setDivision(e.target.value);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            {districts ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Create Upozila</h1>
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
                                    <Label for="upozila">Upozila Code</Label>
                                    <Input type="text"
                                        name="upozila"
                                        id="upozila"
                                        placeholder="Enter division Code"
                                        size="lg"
                                        value={upozilaCode}
                                        onChange={(e) => setUpozilaCode(e.target.value)}
                                    />
                                </FormGroup>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="division">Division</Label>
                                    <Input
                                        type="select"
                                        name="division"
                                        id="division"
                                        size="lg"
                                        onChange={setDivisionHandler}
                                    >
                                        <option>Select division</option>
                                        {districts.map((division) => (
                                            <option value={division.id}>
                                                {division.name}
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
export default UpozilaCreateScreen;

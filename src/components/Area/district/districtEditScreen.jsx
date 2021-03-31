import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    updateDistrict,
    detailsDistrict
} from '../../../actions/Area/districtActions';

import {
    listDivisions
} from '../../../actions/Area/divisionActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function DistrictEditScreen(props) {
    const districtId = props.match.params.id;
    const [name, setName] = useState('');
    const [districtCode, setDistrictCode] = useState('');
    const [divisionId, setDivision] = useState('');


    const districtDetails = useSelector((state) => state.districtDetails);

    const { district } = districtDetails;



    const divisionList = useSelector((state) => state.divisionList);
    const { divisions } = divisionList;

    const {
        success: successUpdate
    } = district;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsDistrict(districtId));
        dispatch(listDivisions());
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateDistrict({
                name,
                districtCode,
                divisionId
            }, districtId)
        );
        props.history.push("/districts");
    };
    const setDivisionHandler = (e) => {
        setDivision(e.target.value);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            {divisions ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Update District</h1>
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="name">Name</Label>
                                    <Input type="text"
                                        name="name"
                                        id="name"
                                        placeholder={district.name}
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
                                    <Label for="district">District Code</Label>
                                    <Input type="text"
                                        name="district"
                                        id="district"
                                        placeholder={district.districtCode}
                                        size="lg"
                                        value={districtCode}
                                        onChange={(e) => setDistrictCode(e.target.value)}
                                    />
                                </FormGroup>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-6">
                                <FormGroup>
                                    <Label for="division">Division</Label>
                                    <Input
                                        type="select"
                                        name="division"
                                        id="division"
                                        size="lg"
                                        onChange={setDivisionHandler}
                                    >
                                        <option>Select Division</option>
                                        {divisions.map((division) => (
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
export default DistrictEditScreen;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    updateDivision,
    detailsDivision
} from '../../../actions/Area/divisionActions';

import {
    listCountries
} from '../../../actions/Area/countryActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function DivisionEditScreen(props) {

    const divisionId = props.match.params.id;
    const [name, setName] = useState('');
    const [divisionCode, setDivisionCode] = useState('');


    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    // const countryList = useSelector((state) => state.countryList);
    // const { countries } = countryList;



    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(detailsDivision(divisionId));
        dispatch(listCountries());
        console.log("divisionss", division)

        if (typeof division != 'undefined') {
            console.log("name", division.name)
            setName(division.name)
            setDivisionCode(division.divisionCode)

        }
        return () => {

            //
        };
    }, [divisionId]);

    function submitHandler() {

        dispatch(
            updateDivision({
                name,
                divisionCode,

            }, divisionId)
        );
        props.history.push("/divisions");
    };

    // const setCountryHandler = (e) => {
    //     setCountry(e.target.value);
    // }

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {1 ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Update Role</h1>
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>

                    <Form onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col col-lg-12">
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
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="divisionCode">Division Code</Label>
                                    <Input type="text"
                                        name="divisionCode"
                                        id="divisionCode"
                                        size="lg"
                                        value={divisionCode}
                                        onChange={(e) => setDivisionCode(e.target.value)}
                                    />
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
export default DivisionEditScreen;

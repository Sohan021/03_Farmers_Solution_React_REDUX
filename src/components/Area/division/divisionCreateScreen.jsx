import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';



import {
    listDivisions, saveDivision
} from '../../../actions/Area/divisionActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


function DivisionCreateScreen(props) {

    const [name, setName] = useState('');
    const [divisionCode, setDivisionCode] = useState('');

    const divisionSave = useSelector((state) => state.divisionSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = divisionSave;

    const divisionDelete = useSelector((state) => state.divisionDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = divisionDelete;

    const countryList = useSelector((state) => state.countryList);
    const { countries } = countryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDivisions());

        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveDivision({
                name,
                divisionCode,
            })
        );
        props.history.push("/divisions");
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {countries ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Create Division</h1>
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
                                    <Label for="divisionCode">Division Code</Label>
                                    <Input type="text"
                                        name="divisionCode"
                                        id="divisionCode"
                                        placeholder="Enter division Code"
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
export default DivisionCreateScreen;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    saveMarket,
    listMarkets
} from '../../../actions/Area/marketActions';
import {
    listUnions
} from '../../../actions/Area/unionOrWardActions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function MarketCreateScreen(props) {

    const [name, setName] = useState('');
    const [marketCode, setMarketCode] = useState('');
    const [unionOrWardId, setUnion] = useState('');

    const marketSave = useSelector((state) => state.marketSave);

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = marketSave;

    const unionDelete = useSelector((state) => state.unionDelete);

    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = unionDelete;

    const unionList = useSelector((state) => state.unionList);
    const { unions } = unionList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listMarkets());
        dispatch(listUnions());

        return () => {

            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveMarket({
                name,
                marketCode,
                unionOrWardId
            })
        );
        props.history.push("/markets");
    };
    const setUnionHandler = (e) => {
        setUnion(e.target.value);
    }
    return (
        <div className="container">
            <br />
            <br />
            <br />
            {unions ? (
                <div className="container" style={{ width: 475, height: 800, marginTop: 60, backgroundColor: "#fff" }}>
                    <br />
                    <br />
                    <br />
                    <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                    <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Create Market</h1>
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
                                    <Label for="union">Market Code</Label>
                                    <Input type="text"
                                        name="union"
                                        id="union"
                                        placeholder="Enter Union Code"
                                        size="lg"
                                        value={marketCode}
                                        onChange={(e) => setMarketCode(e.target.value)}
                                    />
                                </FormGroup>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <FormGroup>
                                    <Label for="upozila">Market</Label>
                                    <Input
                                        type="select"
                                        name="upozila"
                                        id="upozila"
                                        size="lg"
                                        onChange={setUnionHandler}
                                    >
                                        <option>Select Union</option>
                                        {unions.map((union) => (
                                            <option value={union.id}>
                                                {union.name}
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
export default MarketCreateScreen;

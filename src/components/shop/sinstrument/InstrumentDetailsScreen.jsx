import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { detailsinstrument } from '../../../actions/shop/sinstrumentAction';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { Input } from 'reactstrap';
import base from '../../../service/config';

function InstrumentDetailsScreen(props) {
    const [qty, setQty] = useState(1);

    const productDetails = useSelector((state) => state.sinstrumentDetailsReducer);
    const { instrument } = productDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsinstrument(props.match.params.id));
        return () => {
            //
        };
    }, [props.match.params.id]);


    const handleAddToCart = () => {

        props.history.push('/scart/' + props.match.params.id + '?qty=' + qty);
    };

    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { instrument ? (
            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000" }} >
                <div className="row">
                    <div className="col-6">
                        <Card.Body>
                            <Card.Img variant="top" src={base + instrument.imageUrl1} height="380px" width="380px" />
                        </Card.Body>
                    </div>
                    <div className="col-6">
                        <Card.Body>
                            <p style={{ color: "#06E2FF" }}>______________________________________________</p>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}><h4> {instrument.name}</h4></ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>Price: {instrument.price}</ListGroupItem>
                            
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>Category: {instrument.instrumentCategory.name}</ListGroupItem>

                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>CountInStock: {instrument.quantity}</ListGroupItem>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff", textAlign: "center" }}>
                                    <Input
                                        style={{ color: "#000", backgroundColor: "#fff" }}
                                        type="select"
                                        name="select"
                                        id="exampleSelect"
                                        placeholder="Select Quantity"
                                        size="lg"
                                        onChange={(e) => { setQty(e.target.value) }}
                                    >
                                        <option>Select Quantity</option>
                                        {[...Array(instrument.quantity).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                    </Input>
                                </ListGroupItem>
                            </ListGroup>
                            {instrument.quantity > 0 && (
                                <Button
                                    style={{ color: "#06E2FF", }}
                                    outline color="primary" size="lg" block type="submit"
                                    onClick={handleAddToCart}
                                >
                                    Add To Cart
                                </Button>)}
                        </Card.Body>
                    </div>
                </div>
            </Card>
        ) : (
                <h1></h1>
            )}
    </div >
    );

}
export default InstrumentDetailsScreen;
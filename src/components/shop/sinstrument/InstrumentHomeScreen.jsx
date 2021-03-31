import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listinstruments } from '../../../actions/shop/sinstrumentAction';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import base from '../../../service/config';
import { Link } from 'react-router-dom';


function InstrumentHomeScreen(props) {

    const category = props.match.params.id ? props.match.params.id : '';

    const productList = useSelector((state) => state.sinstrumentListReducer);
    const { instruments } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listinstruments(category));

        return () => {
            //
        };
    }, [category]);
    console.log(instruments);


    return (
        <>
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {instruments ? (
                    <div className="row">
                        {instruments.map((product) => (
                            <div className="col-3">
                                <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                    <div className="row">
                                        <Link to={'/instrumentsdetails/' + product.id}>
                                            <Card.Img variant="top" height="200px" src={base + product.imageUrl1} />
                                        </Link>
                                    </div>
                                    <div className="row">
                                        <Card.Body>
                                            <p style={{ color: "#06E2FF" }}>_________________________________</p>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                            </ListGroup>
                                        </Card.Body>
                                    </div>

                                </Card>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                ) : (
                        <h1>Empty</h1>
                    )}
            </div>
        </>
    );
}
export default InstrumentHomeScreen;

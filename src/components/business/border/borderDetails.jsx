import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listinstruments } from '../../../actions/shop/sinstrumentAction';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { detailsOrder } from '../../../actions/business/borderAction';
import base from '../../../service/config'

function BOrderDetails(props) {

    const orderId = props.match.params.id;

    const [searchKeyword, setSearchKeyword] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    //const category = props.match.params.id ? props.match.params.id : '';

    const BorderDetails = useSelector((state) => state.borderDetailsReducer);
    const { order } = BorderDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsOrder(orderId));

        return () => {
            //
        };
    }, []);


    return (
        <>
            <div className="container" style={{ width: "900px" }}>
                <br />
                <br />
                <br />
                <br />
                {order ? (
                    <Card>
                        <div className="row">
                            {order.map((product) => (
                                <div className="col-3">
                                    <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                        <div className="row">
                                            <Card.Img variant="top" height="150px" src={base + product.imageUrl1} />
                                        </div>
                                        <div className="row">
                                            <Card.Body>
                                                <p style={{ color: "#000" }}>_________________________________</p>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Category: {product.category.name}</ListGroupItem>
                                                </ListGroup>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                    </Card>

                ) : (
                        <h1></h1>
                    )}
            </div>
        </>
    );
}
export default BOrderDetails;

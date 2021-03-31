import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import { Link } from 'react-router-dom';
import { listMarkets } from '../../../actions/Area/marketActions';
import { listproducts, listproductsByMarket } from '../../../actions/business/bproductAction'

import base from '../../../service/config'

function WholeSellerFindFarmer(props) {

    const [marketCode, setMarketCode] = useState('');

    const marketList = useSelector((state) => state.marketList);
    const { markets } = marketList;

    const marketDetails = useSelector((state) => state.marketDetails);
    const { market } = marketDetails;

    const productList = useSelector((state) => state.sproductListByCategoryReducer);
    const { products } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(listMarkets());
        // dispatch(listproducts());
        return () => {
            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(listproductsByMarket(marketCode));
    };


    return (

        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <Form onSubmit={submitHandler}>
                <div className="row">
                    <div className="col-6">

                    </div>
                    <div className="col-3">
                        <FormGroup>
                            <Input
                                style={{
                                    color: "#000",
                                    backgroundColor: "#fff"
                                }}
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter Agnet Code"
                                size="lg"
                                value={marketCode}
                                onChange={(e) => setMarketCode(e.target.value)}
                            />
                        </FormGroup>
                    </div>
                    <div className="col-3">

                        <Button style={{
                            color: "#fff",
                            backgroundColor: "#000"
                        }} outline color="primary" size="lg" block type="submit">
                            Search
                       </Button>
                    </div>

                </div>
            </Form>

            {/* <br />
            <br />
            <div className="container">
                <br />
                <br />
                <br />
                <br />
                {products ? (
                    <div className="row">
                        {products.map((product) => (
                            <div className="col-3">
                                <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                    <div className="row">
                                        <Link to={'/productsdetails/' + product.id}>
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
            </div> */}

            {products &&
                <div className="container">
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-2">

                        </div>
                        <div className="col-10">
                            {products.map((product) => (
                                <div className="col-12">
                                    <Card style={{ color: "#000", backgroundColor: "#fff" }} >
                                        <div className="row" style={{ textAlign: "center", justifyContent: "center" }}>
                                            <Link to={'/productsdetails/' + product.id} >
                                                <Card.Img  variant="top" height="200px"   width="600px" src={base + product.imageUrl1} />
                                            </Link>
                                        </div>
                                        <div className="row">
                                            <Card.Body>
                                                <p style={{ color: "#06E2FF" }}>_________________________________</p>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem style={{ backgroundColor: "#fff", textAlign: "center" }}><h4> {product.name}</h4></ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Price: {product.price}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Farmer Name: {product.farmer.firstName}</ListGroupItem>
                                                    <ListGroupItem style={{ backgroundColor: "#fff" }}>Farmer Contact No: {product.farmer.phoneNumber}</ListGroupItem>
                                                </ListGroup>
                                            </Card.Body>
                                        </div>

                                    </Card>
                                    <br />
                                    <br />
                                </div>
                            ))}
                        </div>
                        <div className="col-2">

                        </div>

                    </div>
                </div>
            }


        </div>
    );
}
export default WholeSellerFindFarmer;

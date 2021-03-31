import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listproducts } from '../../../actions/business/bproductAction';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import base from '../../../service/config';
import { Link } from 'react-router-dom';


function MyProductList(props) {

    const category = props.match.params.id ? props.match.params.id : '';


    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const productList = useSelector((state) => state.sproductListReducer);
    const { products } = productList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listproducts(userInfo.item1.id));

        return () => {
            //
        };
    }, [category]);
    console.log(products);


    return (
        <>
            <div className="container" style={{ width: "800px" }}>
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
            </div>
        </>
    );
}
export default MyProductList;

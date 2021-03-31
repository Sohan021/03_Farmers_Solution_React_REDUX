import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap'
import { Button } from 'reactstrap';
import { listOrders } from '../../../actions/business/borderAction'

const BOrderListForAdmin = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const myOrderList = useSelector((state) => state.borderListReducer)
    const { orders } = myOrderList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listOrders())
        return () => {
            //
        };
    }, []);

    const handleOrderDetails = (id) => {
        props.history.push("/bOrderDeatils/" + id);
    }

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            {orders ? (
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        {orders.map((order) => (
                            <div>
                                <Card key={order.id} style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000" }} >
                                    <Card.Body >
                                        <div className="row">
                                            <div className="col-6">

                                                <h5 style={{ color: "#000" }}>OrderNo:- {order.orderNo}</h5>
                                                <h5 style={{ color: "#000" }}>WholeSeller:- {order.holeseller.firstName}</h5>

                                                <h3 style={{ color: "#000" }}>Shipping Address:</h3>
                                                <h5 style={{ color: "#000" }}>{order.holeseller.marketName}, {order.holeseller.unionOrWardName}, {order.holeseller.upozilaName}, {order.holeseller.districtName}.</h5>

                                            </div>
                                            <div className="col-6">

                                                <h5 style={{ color: "#000" }}>Total Amount:-{order.totalAmount}</h5>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="row">
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <h5 style={{ color: "#000" }}>Order Time:-{order.orderDate}</h5>
                                                </Card>
                                            </div>
                                            <div className="col-6">
                                                <Card style={{ padding: "10px" }}>
                                                    <Button
                                                        style={{
                                                            color: "#fff",
                                                        }}
                                                        color="success" size="lg" block type="submit"
                                                        onClick={() => handleOrderDetails(order.id)}
                                                    >
                                                        Details
                                                </Button>
                                                </Card>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                    <div className="col-2">
                    </div>
                </div>
            ) : (
                    <h1></h1>
                )}
        </div>
    );
};

export default BOrderListForAdmin;

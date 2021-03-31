import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//import { detailsProduct } from '../../../../actions/Regular/productActions';
import { userProfileDetail } from '../../actions/user/accountActions';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Button } from 'reactstrap';



import { detailsDivision } from '../../actions/Area/divisionActions';
import { detailsDistrict } from '../../actions/Area/districtActions';
import { detailsUpozila } from '../../actions/Area/upozilaActions';
import { detailsUnion } from '../../actions/Area/unionOrWardActions';
import base from '../../service/config';



function UserProfileDetailsScreen(props) {

    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;

    const profileDetails = useSelector((state) => state.userProfileDetailsReducer);
    const { sharer } = profileDetails;


    console.log("Outside", sharer)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userProfileDetail(userInfo.item1.id));


        dispatch(detailsDivision(userInfo.divisionId))
        dispatch(detailsDistrict(userInfo.districtId))
        dispatch(detailsUpozila(userInfo.upozilaId))
        dispatch(detailsUnion(userInfo.unionOrWardId))


        console.log("Inside", sharer)
        return () => {
            //
        };
    }, []);

    const handlePassWordChange = () => {
        props.history.push('/changepassword');
    }


    return (<div className="container" style={{ width: "876px", justifyContent: "center", alignItems: "center", textAlign: "center", marginTop: "60px" }}
    >
        { userInfo ? (
            <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#1FC46C" }} >
                <div className="row">
                    <div className="col-8">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#1FC46C", }}>
                            <Card.Body>
                                <br />
                                <br />
                                <br />
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h3>{userInfo.item1.firstName} {userInfo.item1.lastName}</h3></Card.Title>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Phone Number: {userInfo.item1.phoneNumber}</h4></Card.Title>
                                <Card.Title style={{ color: "#000", backgroundColor: "#fff" }}><h4>Nid Number: {userInfo.item1.nid_Number} 0980349</h4></Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#000", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Img
                                variant="top"
                                src={base + userInfo.item1.profilePhoto}
                                height="186px"
                                width="186px"
                            />
                        </Card>
                    </div>
                </div>
                <div className="row">
                    {/* <div className="col-6">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <p style={{ color: "#000" }}>________________________________________________</p>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}><h4>Total Team Member: {sharer.downlineCount}</h4></ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}><h5>First Level: {sharer.firstLevelDownlineCount}</h5></ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Second Level: {sharer.secondLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Third Level: {sharer.thirdLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Fourth Level: {sharer.fourthLevelDownlineCount}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Fifth Level: {sharer.fifthLevelDownlineCount}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </div> */}
                    <div className="col-12">
                        {/* <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <p style={{ color: "#000" }}>________________________________________________</p>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Nominee Name: {userInfo.item1.nominee_Name}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Nominee Phone Number: {userInfo.item1.nominee_PhonNumber}</ListGroupItem>
                                    <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>Nominee Relation: {userInfo.item1.nominee_Relation}</ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card> */}
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", height: "136px" }}>
                            <Card.Body>
                                <ListGroupItem style={{ color: "#000", backgroundColor: "#fff" }}>
                                    <h5>Union/Ward- {userInfo.item1.unionOrWardName}, Upozila- {userInfo.item1.upozilaName}, District- {userInfo.item1.districtName}, Division- {userInfo.item1.divisionName}</h5>
                                </ListGroupItem>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Password?
                            </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Phone Number?
                            </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card style={{ color: "#fff", backgroundColor: "#fff", borderColor: "#000", }}>
                            <Card.Body>
                                <Button
                                    color="success"
                                    size="lg"
                                    block
                                    type="submit"
                                    width="30px"
                                    onClick={handlePassWordChange}
                                >
                                    Change Email?
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Card>

        ) : (
                <h1></h1>
            )
        }
    </div >
    );

}
export default UserProfileDetailsScreen;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap'
import { farmerRegister } from '../../actions/user/accountActions'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { listDivisions } from '../../actions/Area/divisionActions';
import { listDistricts } from '../../actions/Area/districtActions';
import { listUpozilas } from '../../actions/Area/upozilaActions';
import { listUnions } from '../../actions/Area/unionOrWardActions';
import { listMarkets } from '../../actions/Area/marketActions';
import base from '../../service/config'

function FarmerSignUpScreen(props) {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [postalcode, setPostalCode] = useState('');
    const [profilePhoto, setProfilePhoto] = useState('');
    const [divisionId, setDivision] = useState('');
    const [districtId, setDistrict] = useState('');
    const [upozilaId, setUpozila] = useState('');
    const [unionOrWardId, setUnion] = useState('');
    const [marketId, setMarket] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [uploading, setUploading] = useState(false);

    // const [setUploading] = useState(false);


    const Register = useSelector(state => state.farmerRegistrationReducer);
    const { userInfo } = Register;

    const divisionList = useSelector(state => state.divisionList)
    const { divisions } = divisionList

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const districtList = useSelector(state => state.districtList)
    const { districts } = districtList

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const upozilaList = useSelector(state => state.upozilaList)
    const { upozilas } = upozilaList

    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const unionList = useSelector(state => state.unionList)
    const { unions } = unionList

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;

    const marketList = useSelector(state => state.marketList)
    const { markets } = marketList

    const marketDetails = useSelector((state) => state.marketDetails);
    const { market } = marketDetails;

    const dispatch = useDispatch();

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';

    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }

        dispatch(listDivisions())
        dispatch(listDistricts())
        dispatch(listUpozilas())
        dispatch(listUnions())
        dispatch(listMarkets())
        return () => {
            //
        };
    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();


        dispatch(farmerRegister(

            firstname,
            lastname,
            profilePhoto,
            mobilenumber,
            divisionId,
            districtId,
            upozilaId,
            unionOrWardId,
            marketId,
            password,
            confirmPassword
        ));

        props.history.push("/");
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('profilePhoto', file);
        setUploading(true);
        axios
            .post(base + '/api/Authentication/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setProfilePhoto(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };


    const saveDivisionHandler = (e) => {
        setDivision(e.target.value);
    }
    const saveDistrictHandler = (e) => {
        setDistrict(e.target.value);
    }
    const saveUpozilaHandler = (e) => {
        setUpozila(e.target.value);
    }
    const saveUnionHandler = (e) => {
        setUnion(e.target.value)
    }
    const saveMarketHandler = (e) => {
        setMarket(e.target.value)
    }
    return (
        <div className="container">
            <br />
            {divisions && districts && upozilas && unions && markets && (
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <Card style={{ color: "#1FC46C", backgroundColor: "#fff", borderColor: "#1FC46C", padding: "20px" }}>
                            <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                            <h1 style={{ color: "#1FC46C", textAlign: "center" }}>Farmer Sign_Up</h1>
                            <p style={{ color: "#1FC46C", textAlign: "center" }}>___________________________________________________________</p>
                            <Form onSubmit={submitHandler}>
                                <div className="row">
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="firstname">First Name</Label>
                                            <Input type="text"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Enter Firstname"
                                                size="lg"
                                                value={firstname}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="lastname">Last Name</Label>
                                            <Input type="text"
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Enter LastName"
                                                size="lg"
                                                value={lastname}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="countInStock">Phone Number</Label>
                                            <Input
                                                type="text"
                                                name="phonenumber"
                                                id="phonenumber"
                                                placeholder="Enter Phone Number"
                                                size="lg"
                                                value={mobilenumber}
                                                onChange={(e) => setMobilenumber(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="countInStock">Postal Code</Label>
                                            <Input
                                                type="text"
                                                name="productCode"
                                                id="productCode"
                                                placeholder="Enter Product Code"
                                                size="lg"
                                                value={postalcode}
                                                onChange={(e) => setPostalCode(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col col-lg-12">
                                        <FormGroup>
                                            <Label for="image">Phofile Photo Name</Label>
                                            <Input type="text"
                                                name="image"
                                                id="image"
                                                placeholder="Image Name"
                                                size="lg"
                                                value={profilePhoto}
                                                onChange={(e) => setProfilePhoto(e.target.value)}
                                            />
                                            <Input
                                                type="file"
                                                onChange={uploadFileHandler}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="exampleSelect">Select Division</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                size="lg"
                                                defaultValue={division.name}
                                                onChange={saveDivisionHandler}
                                            >
                                                <option>Select Division</option>
                                                {divisions.map((division) => (
                                                    <option value={division.id}>
                                                        {division.name}
                                                    </option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="exampleSelect">Select District</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                size="lg"
                                                defaultValue={district.name}
                                                onChange={saveDistrictHandler}
                                            >
                                                <option>Select District</option>
                                                {districts.map((district) => (

                                                    <option value={district.id}>
                                                        {district.name}
                                                    </option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </div>
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="exampleSelect">Select Upozila</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                size="lg"
                                                defaultValue={upozila.name}
                                                onChange={saveUpozilaHandler}
                                            >
                                                <option>Select Upozila</option>
                                                {upozilas.map((upozila) => (
                                                    <option value={upozila.id}>
                                                        {upozila.name}
                                                    </option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="exampleSelect">Select Union</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                size="lg"
                                                defaultValue={union.name}
                                                onChange={saveUnionHandler}
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
                                    <div className="col col-lg-6">
                                        <FormGroup>
                                            <Label for="exampleSelect">Select Union</Label>
                                            <Input
                                                type="select"
                                                name="select"
                                                id="exampleSelect"
                                                size="lg"
                                                defaultValue={market.name}
                                                onChange={saveMarketHandler}
                                            >
                                                <option>Select Market</option>
                                                {markets.map((union) => (

                                                    <option value={union.id}>
                                                        {union.name}
                                                    </option>
                                                ))}
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col col-lg-6">
                                        <FormGroup >
                                            <Label
                                                for="password"
                                                style={{ color: "#000" }}
                                            >
                                                New Password
                                                </Label>
                                            <Input
                                                style={{ color: "#000", backgroundColor: "#fff" }}
                                                type="password"
                                                name="newPassword"
                                                color="06E2FF"
                                                placeholder="Enter Password"
                                                size="lg"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>

                                    <div className="col col-lg-6">
                                        <FormGroup >
                                            <Label
                                                for="password"
                                                style={{ color: "#000" }}
                                            >
                                                Confirm Password
                                                </Label>
                                            <Input
                                                style={{ color: "#000", backgroundColor: "#fff" }}
                                                type="password"
                                                name="confirmPassword"
                                                color="06E2FF"
                                                placeholder="Re-EnterPassword"
                                                size="lg"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                        </FormGroup>
                                    </div>
                                </div>

                                <Button variant="primary" type="submit">
                                    Submit
                       </Button>

                            </Form>
                        </Card>
                    </div>

                    <div className="col-2">

                    </div>
                </div>

            )
            }
        </div >
    );
}
export default FarmerSignUpScreen;


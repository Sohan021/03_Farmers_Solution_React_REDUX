import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    saveproduct,
    listproducts,
} from '../../../actions/business/bproductAction';
import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import { blistCategories } from '../../../actions/business/bcategoryAction';
import base from '../../../service/config';

function CreateProductScreen(props) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imageUrl1, setImageUrl1] = useState('');
    const [categoryId, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const productSave = useSelector((state) => state.sinstrumentSaveReducer);
    const {

        success: successSave,

    } = productSave;

    const productDelete = useSelector((state) => state.sinstrumentDeleteReducer);
    const {

        success: successDelete,

    } = productDelete;

    const categoryList = useSelector((state) => state.bcategoryListReducer);
    const { categories } = categoryList;

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const currentuser = userInfo.item1.id;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch((listproducts));
        dispatch(blistCategories());

        return () => {
            //
        };
    }, [successSave, successDelete]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveproduct({
                currentuser,
                name,
                price,
                imageUrl1,
                categoryId,
                quantity,
                description,
            })
        );
        // props.history.push('/productsadmin') 
    };
    const saveCatHandler = (e) => {
        setCategory(e.target.value);
    }


    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('imageUrl', file);

        axios
            .post(base + '/api/instruments/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImageUrl1(response.data);

            })
            .catch((err) => {
                console.log(err);

            });
    };
    return (
        <div className="container" style={{ justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <br />

            {categories && (

                <div className="container" style={{ width: 850, backgroundColor: "#fff" }}>
                    <Card style={{ borderColor: "#000" }}>
                        <p style={{ color: "#000", textAlign: "center" }}>___________________________________________________________</p>
                        <h1 style={{ color: "#000", textAlign: "center" }}>Crops Upload</h1>
                        <p style={{ color: "#000", textAlign: "center" }}>___________________________________________________________</p>
                        <Form onSubmit={submitHandler}>
                            <div className="row">
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="name"
                                            style={{ color: "#000" }}
                                        >
                                            Name
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="name"
                                            color="06E2FF"
                                            placeholder="Enter Product Name"
                                            size="lg"
                                            value={name}
                                            required
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="price"
                                            style={{ color: "#000" }}
                                        >
                                            Price
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="price"
                                            id="price"
                                            placeholder="Enter Product Price"
                                            size="lg"
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="row">



                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="countInStock"
                                            style={{ color: "#000" }}
                                        >
                                            In Stock
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="countInStock"
                                            id="countInStock"
                                            placeholder="Enter Count in Stock"
                                            size="lg"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-6">
                                    <FormGroup>
                                        <Label
                                            for="exampleSelect"
                                            style={{ color: "#000" }}
                                        >
                                            Category
                                    </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="select"
                                            name="select"
                                            id="exampleSelect"
                                            size="lg"
                                            onChange={saveCatHandler}
                                        >
                                            <option>Select Category</option>
                                            {categories.map((category) => (
                                                <option value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))}
                                        </Input>
                                    </FormGroup>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col col-lg-12">
                                    <FormGroup>
                                        <Label
                                            for="image"
                                            style={{ color: "#000" }}
                                        >
                                            Image Name
                                    </Label>

                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="text"
                                            name="image"
                                            id="image"
                                            placeholder="Image Name"
                                            size="lg"
                                            value={imageUrl1}
                                            onChange={(e) => setImageUrl1(e.target.value)}
                                        />
                                        <Input
                                            style={{ color: "#06E2FF", backgroundColor: "#fff" }}
                                            type="file"
                                            label="Yo, pick a file!"
                                            onChange={uploadFileHandler}
                                        />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-12">
                                    <FormGroup>
                                        <Label
                                            for="exampleText"
                                            style={{ color: "#000" }}
                                        >
                                            Description
                                        </Label>
                                        <Input
                                            style={{ color: "#000", backgroundColor: "#fff" }}
                                            type="textarea"
                                            name="text"
                                            id="exampleText"
                                            placeholder="Enter Product Discription"
                                            size="lg"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                            </div>

                            <Button style={{
                                color: "#06E2FF"
                            }} outline color="primary" size="lg" block type="submit">
                                Submit
                       </Button>

                        </Form>
                    </Card>
                </div>
            )
            }
            <br />
            <br />
        </div >
    );
}
export default CreateProductScreen;

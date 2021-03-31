import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import {
    updateinstrument,
    detailsinstrument
} from '../../../actions/shop/sinstrumentAction';
import { listCategories } from '../../../actions/shop/scategoryAction';


import { Button, Form, FormGroup, Input, Label, Card } from 'reactstrap';
import base from '../../../service/config';

function InstrumentUpdateScreen(props) {

    const productId = props.match.params.id;
    //const [modalVisible, setModalVisible] = useState(false);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [imageUrl, setImageUrl] = useState('');
    const [categoryId, setCategory] = useState('');
    const [subCategoryId, setSubCategory] = useState('');

    const [countInStock, setCountInStock] = useState('');
    const [description, setDescription] = useState('');
    const [uploading, setUploading] = useState(false);


    const productSave = useSelector((state) => state.productUpdate);
    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
    } = productSave;

    const productDelete = useSelector((state) => state.productDelete);
    const {
        loading: loadingDelete,
        success: successDelete,
        error: errorDelete,
    } = productDelete;

    const categoryList = useSelector((state) => state.scategoryList);
    const { categories } = categoryList;


    const dispatch = useDispatch();

    useEffect(() => {
        // if (successSave) {
        //     setModalVisible(false);
        // }
        dispatch(detailsinstrument(productId));
        dispatch(listCategories());

        return () => {
            //
        };
    }, [successSave, productId]);

    // const openModal = (product) => {
    //     setModalVisible(true);
    //     setId(product.id);
    //     setName(product.name);
    //     setPrice(product.price);
    //     setProductCode(product.productCode);
    //     setDescription(product.description);
    //     setImageUrl(product.imageUrl);
    //     setCategory(product.category);
    //     setProductType(product.productType);
    //     setCountInStock(product.countInStock);
    // };
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateinstrument({
                name,
                price,
                imageUrl,
                categoryId,
                subCategoryId,
                countInStock,
                description,
            }, productId)
        );

    };
    const saveCatHandler = (e) => {
        setCategory(e.target.value);
    }
    const saveSubCatHandler = (e) => {
        setSubCategory(e.target.value);
    }

    const uploadFileHandler = (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append('imageUrl', file);
        setUploading(true);
        axios
            .post(base + '/api/products/savephoto', bodyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                setImageUrl(response.data);
                setUploading(false);
            })
            .catch((err) => {
                console.log(err);
                setUploading(false);
            });
    };
    return (
        <div className="content content-margined">

            {productId && categories  && (


                <div className="container" style={{ width: 850, backgroundColor: "#fff" }}>
                    <Card style={{ borderColor: "#000" }}>
                        <p style={{ color: "#000", textAlign: "center" }}>___________________________________________________________</p>
                        <h1 style={{ color: "#000", textAlign: "center" }}>Product Update</h1>
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
                                <div className="col col-lg-3">

                                </div>
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
                                            value={countInStock}
                                            onChange={(e) => setCountInStock(e.target.value)}
                                        />
                                    </FormGroup>
                                </div>
                                <div className="col col-lg-3">

                                </div>
                            </div>

                            <div className="row">

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
                                            value={imageUrl}
                                            onChange={(e) => setImageUrl(e.target.value)}
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
        </div >
    );
}
export default InstrumentUpdateScreen;

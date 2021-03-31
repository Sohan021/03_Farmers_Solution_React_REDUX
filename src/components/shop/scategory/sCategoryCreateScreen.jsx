import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    saveCategory,
    listCategories
} from '../../../actions/shop/scategoryAction';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function CategoryCreateSScreen(props) {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const CategorySave = useSelector((state) => state.scategorySaveReducer);

    const CategoryList = useSelector((state) => state.scategoryListReducer);
    const { categories } = CategoryList;


    const {

        success: successSave

    } = CategorySave;



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());

        return () => {

            //
        };
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            saveCategory({
                name,
                description
            })
        );
        props.history.push('/scategories/');
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {categories ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-3">

                        </div>
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Category Name"
                                    size="lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>

                            <FormGroup>
                                <Label for="union">Category Description</Label>
                                <Input type="text"
                                    name="union"
                                    id="union"
                                    placeholder="Enter Category Description"
                                    size="lg"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormGroup>

                        </div>
                    </div>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            ) :
                <h1>Error</h1>
            }
        </div>
    );
}
export default CategoryCreateSScreen;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    detailsCategory,
    updateCategory
} from '../../../actions/shop/scategoryAction';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

function CategorySUpdateScreen(props) {

    const categoryId = props.match.params.id;
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const CategoryDetails = useSelector((state) => state.scategoryDetailsReducer);

    const { category } = CategoryDetails;



    const {
        success: successUpdate
    } = category;


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsCategory(categoryId));
        setName(category.name)
        setDescription(category.description)
        return () => {

            //
        };
    }, [successUpdate]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            updateCategory({
                name,
                description
            }, categoryId)
        );
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            {category ? (
                <Form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text"
                                    name="name"
                                    id="name"

                                    size="lg"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </FormGroup>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-lg-6">
                            <FormGroup>
                                <Label for="district">Description</Label>
                                <Input type="text"
                                    name="district"
                                    id="district"
                                    placeholder={category.description}
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
export default CategorySUpdateScreen;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { bdetailsCategory } from '../../../actions/business/bcategoryAction';

const CategoryBDetails = (props) => {

    const categoryId = props.match.params.id;

    const CategoryDetails = useSelector((state) => state.bcategoryDetailsReducer);
    const { category } = CategoryDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(bdetailsCategory(categoryId));

        return () => {
            //
        };
    }, [categoryId]);

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col col-lg-3">

                </div>
                <div className="col col-lg-6">
                    <h2>Category</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{category.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Description</td>
                                <td width="10">:</td>
                                <td>{category.description}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
                <div className="col col-lg-3">

                </div>
            </div>

        </div>
    );
};

export default CategoryBDetails;

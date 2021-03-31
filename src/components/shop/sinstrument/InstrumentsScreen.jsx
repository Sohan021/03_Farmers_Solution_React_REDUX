import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { deleteinstrument, listinstruments } from "../../../actions/shop/sinstrumentAction";
import { listCategories } from "../../../actions/shop/scategoryAction";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
const { SearchBar } = Search;

const handleClick = (dispatch, id) => {

    dispatch(deleteinstrument(id))

}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const InstrumentssScreen = (props) => {

    const productList = useSelector((state) => state.sinstrumentListReducer);
    const { instruments } = productList;

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(listinstruments())
        dispatch(listCategories());


        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "name",
            text: "Name",
            sort: true,
        },
        {
            dataField: "price",
            text: "price",
            sort: true,
        },
        {
            dataField: "countInStock",
            text: "Quantity",
            sort: true,
        },
        {
            dataField: "createdAt",
            text: "Create Time",
            sort: true,
        },
        {
            dataField: "imageUrl",
            text: "Photo name",
            sort: true,
        },
        {
            dataField: "category.name",
            text: "Category",
            sort: true,
        },
        {
            dataField: "subCategory.name",
            text: "SubCategory",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"productdetailsadmin/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Detail
                            </Button>
                        </Link>
                        <Link to={"productedit/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Edit
                            </Button>
                        </Link>
                        <Button color="dark" className="mr-2" onClick={() => handleClick(dispatch, row.id)}>
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];

    return (

        <div className="container">
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col col-lg-2">

                </div>
                {instruments && (
                    <div className="col col-lg-8">
                        <h2>instruments List</h2>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Create Time</th>
                                    <th>Category</th>
                                    <th>Sub Category</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {instruments.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>{product.countInStock}</td>
                                        <td>{product.createdAt}</td>
                                        <td>{product.category.name}</td>
                                        <td>{product.subCategory.name}</td>
                                        <td> <Link to={"productedit/" + product.id}>
                                            <Button color="dark" className="mr-2">
                                                Edit
                                            </Button>
                                        </Link></td>
                                        <td>
                                            <Button color="dark" className="mr-2" onClick={() => handleClick(dispatch, product.id)}>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
                <div className="col col-lg-2">

                </div>
            </div>

        </div>

        // <Container>
        //     {products ? (
        //         <ToolkitProvider
        //             bootstrap4
        //             keyField="id"
        //             data={products}
        //             columns={columns}
        //             defaultSorted={defaultSorted}
        //             search
        //         >
        //             {(props) => (
        //                 <div>
        //                     <Row>
        //                         <Col>
        //                             <Link to="/productcreate">
        //                                 <Button color="dark" className="mr-2">
        //                                     Create Product
        //                                 </Button>
        //                             </Link>
        //                         </Col>
        //                         <Col>
        //                             <div className="float-right">
        //                                 <SearchBar {...props.searchProps} placeholder="Search .." />
        //                             </div>
        //                         </Col>
        //                     </Row>

        //                     <BootstrapTable
        //                         {...props.baseProps}
        //                         pagination={paginationFactory()}
        //                     />
        //                 </div>
        //             )}
        //         </ToolkitProvider>
        //     ) : (
        //             <div className="text-center">
        //                 {props.errorCategoriesList ? (
        //                     <h4>{props.errorCategoriesList}</h4>
        //                 ) : (
        //                         <Spinner color="dark" />
        //                     )}
        //             </div>
        //         )}
        // </Container>
    );
};

export default InstrumentssScreen;

import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { deleteUpozila, listUpozilas } from "../../../actions/Area/upozilaActions";
import { listDistricts } from "../../../actions/Area/districtActions";
import { useSelector, useDispatch } from 'react-redux';

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {

    swal({
        title: "Do you want to delete?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUpozila(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not deted category an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const UpozilaScreen = (props) => {

    const upozilaList = useSelector((state) => state.upozilaList);
    const { upozilas } = upozilaList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listUpozilas());
        dispatch(listDistricts());

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
            dataField: "upozilaCode",
            text: "Upozila Code",
            sort: true,
        },
        {
            dataField: "district.name",
            text: "District",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        {/* <Link to={"upoziladetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                 Detail
                            </Button>
                        </Link> */}
                        <Link to={"upozilaupdate/" + row.id}>
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

        <Container>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8">
                    {upozilas ? (
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={upozilas}
                            columns={columns}
                            defaultSorted={defaultSorted}
                            search
                        >
                            {(props) => (
                                <div>
                                    <Row>
                                        <Col>
                                            <Link to="/upozilacreate">
                                                <Button color="dark" className="mr-2">
                                                    Create District
                                        </Button>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <div className="float-right">
                                                <SearchBar {...props.searchProps} placeholder="Search .." />
                                            </div>
                                        </Col>
                                    </Row>

                                    <BootstrapTable
                                        {...props.baseProps}
                                        pagination={paginationFactory()}
                                    />
                                </div>
                            )}
                        </ToolkitProvider>
                    ) : (
                            <div className="text-center">
                                {props.errorCategoriesList ? (
                                    <h4>{props.errorCategoriesList}</h4>
                                ) : (
                                        <Spinner color="dark" />
                                    )}
                            </div>
                        )}
                </div>
                <div className="col-2">

                </div>
            </div>
            
        </Container>
    );
};

export default UpozilaScreen;

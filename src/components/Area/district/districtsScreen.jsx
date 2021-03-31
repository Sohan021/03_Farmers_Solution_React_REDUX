import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";


import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { deleteDistrict, listDistricts } from "../../../actions/Area/districtActions";
import { listDivisions } from "../../../actions/Area/divisionActions";
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
                dispatch(deleteDistrict(id))
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

const DistrictScreen = (props) => {

    const districtList = useSelector((state) => state.districtList);
    const { districts } = districtList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listDistricts());
        dispatch(listDivisions());

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
            dataField: "districtCode",
            text: "District Code",
            sort: true,
        },
        {
            dataField: "division.name",
            text: "Division",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        {/* <Link to={"districtdetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Detail
                            </Button>
                        </Link> */}
                        <Link to={"districtupdate/" + row.id}>
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
                    {districts ? (
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={districts}
                            columns={columns}
                            defaultSorted={defaultSorted}
                            search
                        >
                            {(props) => (
                                <div>
                                    <Row>
                                        <Col>
                                            <Link to="/districtcreate">
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

export default DistrictScreen;

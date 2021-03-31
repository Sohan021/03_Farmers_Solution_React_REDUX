import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import {
    listRoles,
    deleteRole
} from '../../../actions/user/roleActions';

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
                dispatch(deleteRole(id))
                swal("SuccessFully Deleted", {
                    icon: "success",
                });
            } else {
                swal("Can Not deleted Role an Error occured");
            }
        });
}

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const RolesScreen = (props) => {

    const roleList = useSelector((state) => state.roleList);
    const { roles } = roleList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listRoles());

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
            dataField: "description",
            text: "Description",
            sort: true,
        },
        {
            dataField: "link",
            text: "Action",
            formatter: (rowContent, row) => {
                return (
                    <div>
                        <Link to={"roledetails/" + row.id}>
                            <Button color="dark" className="mr-2">
                                Detail
                            </Button>
                        </Link>
                        <Link to={"roleupdate/" + row.id}>
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
            {roles ? (
                <ToolkitProvider
                    bootstrap4
                    keyField="id"
                    data={roles}
                    columns={columns}
                    defaultSorted={defaultSorted}
                    search
                >
                    {(props) => (
                        <div>
                            <Row>
                                <Col>
                                    <Link to="/rolecreate">
                                        <Button color="dark" className="mr-2">
                                            Create Role
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
        </Container>
    );
};

export default RolesScreen;

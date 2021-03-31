import React, { useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner, Card } from "reactstrap";

import { holeSellerList  } from '../../actions/user/accountActions'
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useSelector, useDispatch } from 'react-redux';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];


const WoleSellerListForAdmin = (props) => {

    const userSignIn = useSelector((state) => state.userSignIn)
    const { userInfo } = userSignIn;

    const agentLists = useSelector((state) => state.holesellerListReducer)
    const { holesellers } = agentLists;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(holeSellerList())
        return () => {
            //
        };
    }, []);



    const columns = [
        {
            dataField: "firstName",
            text: "Name",
            sort: true,
        },
        {
            dataField: "phoneNumber",
            text: "Phone Number",
            sort: true,
        },
    ];

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-8">
                    <Card style={{ width: "876px", padding: "20px", borderColor: "#000" }}>
                        <Container>
                            {holesellers ? (
                                <ToolkitProvider
                                    bootstrap4
                                    keyField="id"
                                    data={holesellers}
                                    columns={columns}
                                    defaultSorted={defaultSorted}
                                    search
                                >
                                    {(props) => (
                                        <div>
                                            <Row>

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
                    </Card>
                </div>
                <div className="col-2">

                </div>
            </div>


        </div>

    );
};

export default WoleSellerListForAdmin;

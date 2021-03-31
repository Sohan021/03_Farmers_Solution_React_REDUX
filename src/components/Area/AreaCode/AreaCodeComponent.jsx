import React, { useState, useEffect } from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Row, Col, Spinner } from "reactstrap";

import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";

import { useSelector, useDispatch } from 'react-redux';

import { listAreaCode } from '../../../actions/Area/addressActions';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "id",
        order: "asc",
    },
];

const AreaCodeScreen = (props) => {

    const areaCodeList = useSelector((state) => state.areaCodeList);
    const { codes } = areaCodeList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listAreaCode());
        return () => {
            //
        };
    }, []);


    const columns = [
        {
            dataField: "unionOrWard.upozila.district.division.name",
            text: "Division",
            sort: true,
        },
        // {
        //     dataField: "unionOrWard.upozila.district.division.divisionCode",
        //     text: "Division Code",
        //     sort: true,
        // },
        {
            dataField: "unionOrWard.upozila.district.name",
            text: "District",
            sort: true,
        },
        // {
        //     dataField: "unionOrWard.upozila.district.districtCode",
        //     text: "District Code",
        //     sort: true,
        // },
        {
            dataField: "unionOrWard.upozila.name",
            text: "Upozila",
            sort: true,
        },
        // {
        //     dataField: "unionOrWard.upozila.upozilaCode",
        //     text: "Upozila Code",
        //     sort: true,
        // },
        {
            dataField: "unionOrWard.name",
            text: "Union Or Ward",
            sort: true,
        },
        // {
        //     dataField: "unionOrWard.unionOrWardCode",
        //     text: "Union Or Ward Code",
        //     sort: true,
        // },
        {
            dataField: "market.name",
            text: "Market",
            sort: true,
        },
        {
            dataField: "market.marketCode",
            text: "Market Code",
            sort: true,
        },

    ];

    return (

        <Container>
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-1">

                </div>
                <div className="col-10">
                    {codes ? (
                        <ToolkitProvider
                            bootstrap4
                            keyField="id"
                            data={codes}
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
                </div>
                <div className="col-1">

                </div>

            </div>


        </Container>
    );
};

export default AreaCodeScreen;

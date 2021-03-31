import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsUpozila } from "../../../actions/Area/upozilaActions";
import { detailsUnion } from "../../../actions/Area/unionOrWardActions";

const UnionDetails = (props) => {

    const unionId = props.match.params.id;

    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;


    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUnion(unionId));
        dispatch(detailsUpozila(union.upozilaId));
        return () => {
            //
        };
    }, [unionId, union.upozilaId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-3">

                </div>
                <div className="col col-lg-6">
                    <h2>Upozila</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{union.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Union Code</td>
                                <td width="10">:</td>
                                <td>{union.unionOrWardCode}</td>
                            </tr>
                            <tr>
                                <td width="200">District</td>
                                <td width="10">:</td>
                                <td>{upozila.name}</td>
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

export default UnionDetails;

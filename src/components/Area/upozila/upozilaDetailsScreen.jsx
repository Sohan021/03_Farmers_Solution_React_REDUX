import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsUpozila } from "../../../actions/Area/upozilaActions";
import { detailsDistrict } from "../../../actions/Area/districtActions";

const UpozilaDetails = (props) => {

    const upozilaId = props.match.params.id;

    const upozilaDetails = useSelector((state) => state.upozilaDetails);
    const { upozila } = upozilaDetails;


    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsUpozila(upozilaId));
        dispatch(detailsDistrict(upozila.districtId));
        return () => {
            //
        };
    }, [upozilaId, upozila.districtId]);

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
                                <td>{upozila.name}</td>
                            </tr>
                            <tr>
                                <td width="200">District Code</td>
                                <td width="10">:</td>
                                <td>{upozila.upozilaCode}</td>
                            </tr>
                            <tr>
                                <td width="200">District</td>
                                <td width="10">:</td>
                                <td>{district.name}</td>
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

export default UpozilaDetails;

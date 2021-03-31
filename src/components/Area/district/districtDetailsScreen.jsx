import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsDivision } from "../../../actions/Area/divisionActions";
import { detailsDistrict } from "../../../actions/Area/districtActions";

const DistrictDetails = (props) => {

    const districtId = props.match.params.id;

    const districtDetails = useSelector((state) => state.districtDetails);
    const { district } = districtDetails;


    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsDistrict(districtId));
        dispatch(detailsDivision(district.divisionId));
        return () => {
            //
        };
    }, [districtId, district.divisionId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-3">

                </div>
                <div className="col col-lg-6">
                    <h2>Division</h2>
                    <Table striped>
                        <tbody>
                            <tr>
                                <td width="200">Name</td>
                                <td width="10">:</td>
                                <td>{district.name}</td>
                            </tr>
                            <tr>
                                <td width="200">District Code</td>
                                <td width="10">:</td>
                                <td>{district.districtCode}</td>
                            </tr>
                            <tr>
                                <td width="200">Division</td>
                                <td width="10">:</td>
                                <td>{division.name}</td>
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

export default DistrictDetails;

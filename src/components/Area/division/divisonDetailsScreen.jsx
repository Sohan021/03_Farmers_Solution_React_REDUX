import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsCountry } from "../../../actions/Area/countryActions";
import { detailsDivision } from "../../../actions/Area/divisionActions";

const DivisionDetails = (props) => {

    const divisionId = props.match.params.id;

    const divisionDetails = useSelector((state) => state.divisionDetails);
    const { division } = divisionDetails;


    const countryDetails = useSelector((state) => state.countryDetails);
    const { country } = countryDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsDivision(divisionId));
        dispatch(detailsCountry(division.countryId));
        return () => {
            //
        };
    }, [divisionId, division.countryId]);

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
                                <td>{division.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Division Code</td>
                                <td width="10">:</td>
                                <td>{division.divisionCode}</td>
                            </tr>
                            <tr>
                                <td width="200">Country</td>
                                <td width="10">:</td>
                                <td>{country.name}</td>
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

export default DivisionDetails;

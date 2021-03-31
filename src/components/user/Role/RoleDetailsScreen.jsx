import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsRole } from '../../../actions/user/roleActions';

const RoleDetails = (props) => {

    const roleId = props.match.params.id;

    const roleDetails = useSelector((state) => state.roleDetails);
    const { role } = roleDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsRole(roleId));

        return () => {
            //
        };
    }, [roleId]);

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
                                <td>{role.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Description</td>
                                <td width="10">:</td>
                                <td>{role.description}</td>
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

export default RoleDetails;

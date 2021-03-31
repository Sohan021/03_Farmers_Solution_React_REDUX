import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table } from "reactstrap";
import { detailsMarket } from "../../../actions/Area/marketActions";
import { detailsUnion } from "../../../actions/Area/unionOrWardActions";

const MarketDetails = (props) => {

    const marketId = props.match.params.id;

    const marketDetails = useSelector((state) => state.marketDetails);
    const { market } = marketDetails;


    const unionDetails = useSelector((state) => state.unionDetails);
    const { union } = unionDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsMarket(marketId));
        dispatch(detailsUnion(union.unionId));
        return () => {
            //
        };
    }, [marketId, union.unionId]);

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
                                <td>{market.name}</td>
                            </tr>
                            <tr>
                                <td width="200">Market Code</td>
                                <td width="10">:</td>
                                <td>{market.marketCode}</td>
                            </tr>
                            <tr>
                                <td width="200">Union</td>
                                <td width="10">:</td>
                                <td>{union.name}</td>
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

export default MarketDetails;

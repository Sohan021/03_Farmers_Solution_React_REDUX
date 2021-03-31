import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listCategories } from '../../../actions/shop/scategoryAction';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function InstrumentCaregory() {


    const categoryList = useSelector((state) => state.scategoryList);
    const { categories, loading, error } = categoryList;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listCategories());
        return () => {
            //
        };
    }, []);

    return (
        <>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                        <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="row">
                                <div className="col-2">
                                </div>
                                <div className="col-8">
                                    <div className="row">
                                        {categories.map((category) => (
                                            <div className="col-4">
                                                <Card key={category.id} style={{ color: "#fff", backgroundColor: "#1FC46C" }} >
                                                    <Card.Body>
                                                        <p style={{ color: "#fff" }}>___________________________</p>
                                                        <Card.Title style={{
                                                            textAlign: 'center'
                                                        }}>
                                                            <Link to={`/productcategory/` + category.id}>
                                                                <p style={{
                                                                    color: "#fff"
                                                                }}>{category.name}</p>
                                                            </Link>
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                                <br />
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-2">
                                </div>
                            </div>
                        </div>
                    )}
        </>
    );
}
export default InstrumentCaregory;

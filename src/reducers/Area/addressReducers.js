import {
    AREA_CODE_LIST_FAIL,
    AREA_CODE_LIST_REQUEST,
    AREA_CODE_LIST_SUCCESS,
    COUNTRY_LIST_FAIL,
    COUNTRY_LIST_REQUEST,
    COUNTRY_LIST_SUCCESS,

    DISTRICT_LIST_FAIL,
    DISTRICT_LIST_REQUEST,
    DISTRICT_LIST_SUCCESS,

    DIVISION_LIST_FAIL,
    DIVISION_LIST_REQUEST,
    DIVISION_LIST_SUCCESS,

    MARKET_LIST_FAIL,
    MARKET_LIST_REQUEST,
    MARKET_LIST_SUCCESS,

    UNION_LIST_FAIL,
    UNION_LIST_REQUEST,
    UNION_LIST_SUCCESS,

    UPOZILA_LIST_FAIL,
    UPOZILA_LIST_REQUEST,
    UPOZILA_LIST_SUCCESS
} from "../../constants/Area/addressConstants";


function countryListReducerad(state = { countries: [] }, action) {
    switch (action.type) {
        case COUNTRY_LIST_REQUEST:
            return { loading: true };
        case COUNTRY_LIST_SUCCESS:
            return { loading: false, countries: action.payload };
        case COUNTRY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function divisionListReducerad(state = { divisions: [] }, action) {

    switch (action.type) {
        case DIVISION_LIST_REQUEST:
            return { loading: true };
        case DIVISION_LIST_SUCCESS:
            return { loading: false, divisions: action.payload };
        case DIVISION_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function districtListReducerad(state = { districts: [] }, action) {

    switch (action.type) {
        case DISTRICT_LIST_REQUEST:
            return { loading: true };
        case DISTRICT_LIST_SUCCESS:
            return { loading: false, districts: action.payload };
        case DISTRICT_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function upozilaListReducerad(state = { upozilas: [] }, action) {

    switch (action.type) {
        case UPOZILA_LIST_REQUEST:
            return { loading: true };
        case UPOZILA_LIST_SUCCESS:
            return { loading: false, upozilas: action.payload };
        case UPOZILA_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function unionListReducerad(state = { unions: [] }, action) {

    switch (action.type) {
        case UNION_LIST_REQUEST:
            return { loading: true };
        case UNION_LIST_SUCCESS:
            return { loading: false, unions: action.payload };
        case UNION_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function marketListReducerad(state = { markets: [] }, action) {

    switch (action.type) {
        case MARKET_LIST_REQUEST:
            return { loading: true };
        case MARKET_LIST_SUCCESS:
            return { loading: false, markets: action.payload };
        case MARKET_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}

function areaCodeListReducerad(state = { codes: [] }, action) {
    switch (action.type) {
        case AREA_CODE_LIST_REQUEST:
            return { loading: true };
        case AREA_CODE_LIST_SUCCESS:
            return { loading: false, codes: action.payload };
        case AREA_CODE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export {
    countryListReducerad,
    divisionListReducerad,
    districtListReducerad,
    upozilaListReducerad,
    unionListReducerad,
    marketListReducerad,
    areaCodeListReducerad
}
import axios from "../../../utils/axios";

export const getCountry = async (currentPage = 1) => {


    const response = await axios.get(`/countries?page=${currentPage}`);

    return response.data;
};

export const getCountryDetail = async (cid) => {


    const response = await axios.get(`/get-a-country-details?cid=${cid}`);

    return response.data;
};



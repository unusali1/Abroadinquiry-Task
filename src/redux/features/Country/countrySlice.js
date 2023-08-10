import { getCountry, getCountryDetail } from "./countryAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    countries: [],
    countryData: [],
    search: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    error: "",

};

// async thunk
export const fetchCountries = createAsyncThunk(
    "country/fetchCountries",
    async (currentPage) => {
        const countries = await getCountry(currentPage);
        return countries;
    }
);

export const fetchCountryDetail = createAsyncThunk(
    "country/fetchCountryDetail",
    async (cid) => {
        const countryData = await getCountryDetail(cid);
        return countryData;
    }
);




const countrySlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.isLoading = false;
                state.countries = action.payload.data;
                state.isSuccess = true;
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.isLoading = false;
                state.countries = [];
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(fetchCountryDetail.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchCountryDetail.fulfilled, (state, action) => {
                state.isLoading = false;
                state.countryData = action.payload;
                state.isSuccess = true;
            })
            .addCase(fetchCountryDetail.rejected, (state, action) => {
                state.isLoading = false;
                state.countryData = [];
                state.isError = true;
                state.error = action.error?.message;
            })

    },
});

export const { setSearch } = countrySlice.actions;
export default countrySlice.reducer;
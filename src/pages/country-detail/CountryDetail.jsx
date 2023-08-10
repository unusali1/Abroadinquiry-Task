import { useDispatch, useSelector } from "react-redux";
import "./country-detail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchCountryDetail } from "../../redux/features/Country/countrySlice";

const CountryDetail = () => {
  const { isLoading, isSuccess, countryData, error } = useSelector((state) => state.country)

  const dispatch = useDispatch();
  const { cid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (cid) {
      dispatch(fetchCountryDetail(cid));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, cid, error])

  const handleClick = () => {
    navigate("/")
  }


  return (
    <section className="country-detail-container">
      <div className="back-button" onClick={handleClick} >
        <i className="fa-solid fa-arrow-left"></i> Back
      </div>

      <div className="country-detail-content">
        {

          <>
            <img src={countryData.flagimage} alt="name" className="country-detail-image" />

            <div className="country-detail-right">
              <h1>{countryData.name}</h1>
              <div className="details">
                <div className="detail-left">

                  <p>
                    Population: <span>{countryData.population}</span>
                  </p>
                  <p>
                    Capital: <span>{countryData.capital}</span>
                  </p>

                  <p>
                    Currency: <span>{countryData.currency}</span>
                  </p>
                  <p>
                    isocode: <span>{countryData.isocode}</span>
                  </p>
                  <p>
                    Description <span>{countryData.description}</span>
                  </p>
                </div>


              </div>

            </div>
          </>

        }
      </div>
    </section>
  );
};

export default CountryDetail;
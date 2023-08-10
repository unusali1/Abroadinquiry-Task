import { useDispatch, useSelector } from "react-redux";
import "./country.css";
import { useEffect, useState } from "react";
import { fetchCountries } from "../../redux/features/Country/countrySlice";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

const Country = () => {
  const dispatch = useDispatch();
  const { countries, resultPerPage, search } = useSelector(
    (state) => state.country
  );

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(fetchCountries(currentPage));
  }, [dispatch, currentPage]);

  const data = countries.filter((item) => {
    return search.toLowerCase() === " "
      ? item
      : item.name.toLowerCase().includes(search);
  });

  console.log(data);

  return (
    <>
      <section className="country-container">
        {data.map((item, index) => {
          return (
            <Link
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className="country-card"
              key={index}
              to={`/countryDetail/${item.id}`}
            >
              {/* <img src={item.flags.png} alt={item.flags.alt} className="country-image" /> */}
              <div className="country-content">
                <h3>{item.name} </h3>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })}
      </section>

      <div className="pagination__box" style={{}}>
        <Pagination
          activePage={currentPage}
          itemsCountPerPage={5}
          totalItemsCount={25}
          onChange={setCurrentPageNo}
          nextPageText="Next"
          prevPageText="Prev"
          firstPageText="First"
          lastPageText="Last"
          itemClass="page-item"
          linkClass="page-link"
          activeClass="pageItemActive"
          activeLinkClass="pageLinkActive"
        />
      </div>
    </>
  );
};

export default Country;

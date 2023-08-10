
import Country from "../../Components/country/Country";
import Search from "../../Components/input/search/Search";
import "./home.css";

const Home = () => {
  return (
    <section className="home-page-container">
      <div className="input-container">
        <Search />

      </div>
      <Country />
    </section>
  );
};

export default Home;

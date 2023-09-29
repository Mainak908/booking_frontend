import { Featured } from "../../components/Featured/Featured";
import { FeaturedPoperties } from "../../components/FeaturedPoperties/FeaturedPoperties";
import { Footer } from "../../components/Footer/Footer";
import { Mail } from "../../components/Mail/Mail";
import { Header } from "../../components/header/Header";
import { Navbar } from "../../components/navbar/Navbar";
import { PropertyList } from "../../components/propertyList/PropertyList";
import "./home.css";

export const Home = () => {
  return (
    <div className=" flex flex-col">
      <Navbar />
      <Header />
      <div className=" mt-64 flex flex-col items-center justify-center gap-7">
        <Featured />
        <h1 className=" text-lg">Browse by property type</h1>
        <PropertyList />
        <h1 className=" text-lg">Homes guests love</h1>
        <FeaturedPoperties />
        <Mail />
        <Footer />
      </div>
    </div>
  );
};

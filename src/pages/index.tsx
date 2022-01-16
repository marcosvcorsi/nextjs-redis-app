import type { NextPage } from "next";
import { CarForm } from "../components/CarForm";
import { SearchForm } from "../components/SearchForm";

const Home: NextPage = () => {
  return (
    <>
      <SearchForm />
      <CarForm />
    </>
  );
};

export default Home;

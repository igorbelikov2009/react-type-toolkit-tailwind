import React, { FC } from "react";
import { useSearchUserQuery } from "../store/github/github.api";

const HomePage: FC = () => {
  const { data, isLoading, isError } = useSearchUserQuery("vladilen");

  return <div>HomePage</div>;
};

export default HomePage;

import React from "react";
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  console.log(user);

  return <div>hello i'm main page</div>;
};

export default Home;

import React from "react";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Business from "./components/business";
import Team from "./components/team";
import Price from "./components/price";
import Customers from "./components/customers";
import Finances from "./components/finances";
import Footer from "./components/footer";
import Company from "./components/company";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Company />
      <Business />
      <Team />
      <Price />
      <Customers />
      <Finances />
      <Footer />
    </div>
  );
};

export default App;

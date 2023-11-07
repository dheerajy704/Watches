import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to this Company Your Trusted Online Shopping Destination At
            this Company, we're more than just an e-commerce store. We're a team
            of passionate individuals dedicated to bringing you the finest
            products and an exceptional shopping experience. Our journey began
            in 2010, and since then, we've grown to become a trusted name in the
            industry.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

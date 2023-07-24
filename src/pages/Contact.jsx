import React from "react";

import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import Layout from "../components/layout/Layout";
const Contact = () => {
  return (
    <Layout title={'Contact us'} >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
            <BiMailSend /> : sahiltiwari1222@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +91 8670558757
          </p>
          <p className="mt-3">
            <BiSupport /> : +91 8670558757 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
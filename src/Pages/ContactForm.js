import React from "react";
import Header from "../Components/common/Header";
import SideMenu from "../Components/common/SideMenu";
import ContactFormBox from "../Components/contactform/ContactFormBox";
import Footer from "../Components/common/Footer";

function ContactForm() {
  return (
    <>
      <Header />
      <SideMenu />
      <ContactFormBox />
      <Footer />
    </>
  );
}

export default ContactForm;

import React from "react";
import Header from "../Components/common/Header";
import SideMenu from "../Components/common/SideMenu";
import DashboardBox from "../Components/dashboard/DashboardBox";
import Footer from "../Components/common/Footer";

function Dashboard() {
  return (
    <>
      <SideMenu />
      <Header />
      <DashboardBox />
      <Footer />
    </>
  );
}

export default Dashboard;

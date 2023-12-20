import React from "react";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import JustArrived from "../parts/Homepage/JustArrived";
import BrowseRoom from "../parts/Homepage/BrowseRoom";
import Clients from "../parts/Clients";
import SiteMap from "../parts/Homepage/SiteMap";
import Footer from "../parts/Footer";
export default function Homepage() {
    return (
        <>
            <Header />
            <Hero />
            <BrowseRoom />
            <JustArrived />
            <Clients />
            <SiteMap />
            <Footer />
        </>
    );
}

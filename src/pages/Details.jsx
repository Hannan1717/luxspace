import React from "react";
import Header from "../parts/Header";
import Clients from "../parts/Clients";
import SiteMap from "../parts/Homepage/SiteMap";
import Footer from "../parts/Footer";
import BreadCrumb from "../components/BreadCrumb";
import ProductDetails from "../parts/Detail/ProductDetails";
import Suggestion from "../parts/Detail/Suggestion";

export default function Details() {
    return (
        <>
            <Header theme={"black"} />
            <BreadCrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/categories/92123", name: "Office Room" },
                    {
                        url: "/categories/92123/products/72312",
                        name: "Details",
                    },
                ]}
            />
            <ProductDetails />
            <Suggestion />
            <Clients />
            <SiteMap />
            <Footer />
        </>
    );
}

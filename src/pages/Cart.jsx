import React from "react";
import Header from "../parts/Header";
import SiteMap from "../parts/Homepage/SiteMap";
import Footer from "../parts/Footer";
import BreadCrumb from "../components/BreadCrumb";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetail from "../parts/Cart/ShippingDetail";

export default function Cart() {
    return (
        <>
            <Header theme={"black"} />
            <BreadCrumb
                list={[
                    { url: "/", name: "Home" },
                    { url: "/cart", name: "Shopping Cart" },
                ]}
            />

            <section className="md:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex -mx-4 flex-wrap">
                        <ShoppingCart />
                        <ShippingDetail />
                    </div>
                </div>
            </section>
            <SiteMap />
            <Footer />
        </>
    );
}

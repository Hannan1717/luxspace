import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function BreadCrumb({ list }) {
    return (
        <section className="bg-gray-100 py-8 px-4">
            <div className="container mx-auto">
                <ul className="breadcrumb">
                    {list?.map?.(({ url, name }, index) => {
                        const ariaLabel =
                            index === list?.length - 1
                                ? { "aria-label": "current-page" }
                                : {};
                        return (
                            <li key={url}>
                                <Link to={url} {...ariaLabel}>
                                    {name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

BreadCrumb.propTypes = {
    list: PropTypes.array.isRequired,
};

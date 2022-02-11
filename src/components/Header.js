import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
    return (
        <header className="container flex justify-between shadow-md md:shadow-none h-20 ">
            {/* <div className=" md:hidden lg:inline-flex  ">
                <img className=" bg-logo-img " width="178" alt="" />
            </div>
            <div className=" hidden md:inline-block lg:hidden bg-logo-bg  ">
                <img className=" bg-logo-bg " width="45" alt="" />
            </div> */}
            <img
                // className="md:hidden lg:inline-flex bg-logo-img h-9 mt-4 "
                className="md:hidden lg:inline-flex"
                src="./images/logo-full.svg"
                alt=""
                width="177"
            />
            <img
                // className="hidden md:inline-block lg:hidden bg-logo-bg"
                className="hidden md:inline-block lg:hidden"
                src="./images/logo.svg"
                alt=""
                width="45"
            />
            <div className="flex items-center">
                <MenuIcon className="h-10 md:hidden" />
                <div className="hidden md:flex items-center space-x-3 lg:space-x-8">
                    {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
                    <p className="nav-item">Product</p>
                    <p className="nav-item">Customers</p>
                    <p className="nav-item">Pricing</p>
                    <p className="nav-item">Resouces</p>
                    {/* </div> */}

                    <button className="secondary-button">Sign in</button>
                    <button className="primary-button">Sign up</button>
                </div>
            </div>
        </header>
    );
}

export default Header;

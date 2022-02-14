import React from "react";
import Links from "./Links";
import { Link } from "react-scroll";

function Footer() {
    return (
        <div className="mt-24 pt-12 pb-8">
            <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
                <div className="mx-auto sm:ml-0">
                    <Link
                        to="hero"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                    >
                        <img
                            className="cursor-pointer"
                            src="./images/logo-full.svg"
                            alt="logo"
                        />
                    </Link>

                    <div className="mt-4 flex justify-around">
                        <img
                            className="icon-button"
                            src="./images/insta-icon.svg"
                            alt=""
                        />
                        <img
                            className="icon-button"
                            src="./images/fb-icon.svg"
                            alt=""
                        />
                        <img
                            className="icon-button"
                            src="./images/twitter-icon.svg"
                            alt=""
                        />
                    </div>
                </div>

                <div>
                    <h6 className="font-medium text-xl mb-4">Resources</h6>
                    <Links text="About Us" />
                    <Links text="Blog" />
                    <Links text="Contact" />
                    <Links text="FAQ" />
                </div>

                <div>
                    <h6 className="font-medium text-xl mb-4">Legal Stuff</h6>
                    <Links text="Disclaimer" />
                    <Links text="Financing" />
                    <Links text="Privacy Policy" />
                    <Links text="Terms of Service" />
                </div>

                <div className="lg:col-span-2">
                    <h6 className="font-medium text-xl">
                        knowing you're always on the best energy deal.
                    </h6>
                    <div className="mt-9 border border-[#BCD0E5] rounded-md text-left">
                        <input
                            className="w-full p-2 bg-transparent outline-none"
                            type="tel"
                            placeholder="Enter your phone Number"
                        />
                    </div>
                    <button className="primary-button mt-6">Sign up Now</button>
                </div>
            </div>

            <p className="text-center mt-12">
                Made With Love By Product All Right Reserved
            </p>
        </div>
    );
}

export default Footer;

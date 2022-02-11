import React from "react";

function Banner() {
    return (
        <div className=" mt-28">
            <div className=" m-auto p-5 bg-[#02897A] flex items-center flex-col md:flex-row justify-between">
                <div className="text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10">
                    <h3 className="text-[32px] font-semibold leading-[150%] text-white text-left">
                        Trusted By Leading <h3>Brands And start up</h3>
                    </h3>
                </div>
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./images/product-screens-2.png"
                    alt=""
                />
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./images/product-screens-2.png"
                    alt=""
                />
                <img
                    className="mt-6 md:mt-0 sm:w-[60%] md:w-[20%] drop-shadow-2xl"
                    src="./images/product-screens-2.png"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Banner;

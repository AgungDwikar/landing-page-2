import React from "react";
import Audio from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
    return (
        <div className=" absolute w-1/4 top-[50px] left-[50px] mt-[50px] border border-gray-400 items-center justify-center flex flex-col ">
            <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />
        </div>
    );
}

export default Loading;

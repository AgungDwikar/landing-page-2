import React from "react";

function InstructorItem({ imgSrc, text }) {
    return (
        <div className="max-w-md flex items-center even:flex-row-reverse md:flex-row-reverse md:first:flex-row md:last:flex-row">
            <img src={imgSrc} alt="" width="98px" />

            <div className="shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5">
                <p className="font-medium">{text}</p>
            </div>
        </div>
    );
}

export default InstructorItem;

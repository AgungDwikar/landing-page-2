import React from "react";
import InstructorItem from "./InstructorItem";

function OurInstructor() {
    return (
        <div>
            <section className="container mt-28 text-center">
                <h2 className="text-[32px] font-bold " id="triners">
                    Our Instructor
                </h2>
                <p className="mt-2 max-w-xl m-auto">
                    Do you require some help for your project: Conception
                    workshop, prototyping, marketing strategy, landing page,
                    Ux/UI?
                </p>

                <div
                    className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2"
                    data-aos="zoom-out-up"
                    data-aos-duration="3000"
                >
                    <InstructorItem
                        imgSrc="./images/Avator.png"
                        text="I can take care of your pitch"
                    />

                    <InstructorItem
                        imgSrc="./images/Avator-1.png"
                        text="I can design you website"
                    />

                    <InstructorItem
                        imgSrc="./images/Avator-2.png"
                        text="I can help marketing strategy"
                    />

                    <InstructorItem
                        imgSrc="./images/Avator-3.png"
                        text="I can prototype your app"
                    />
                </div>

                <button className="primary-button mt-20">
                    Contact our Expert
                </button>
            </section>
        </div>
    );
}

export default OurInstructor;

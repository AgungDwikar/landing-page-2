import React from "react";
import {
    ClockIcon,
    CursorClickIcon,
    HeartIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import Feature from "./FeatureItem";

function Features() {
    return (
        <section className="container mt-24 flex flex-col items-center">
            <h2 className="text-[32px] font-bold text-center sm:text-left">
                Product was Built Specifically for You
            </h2>

            <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-16">
                <div>
                    <Feature
                        Icon={CursorClickIcon}
                        title="Need Talent ?"
                        iconBgColor="#02897A"
                        description="While most people enjoy casino gambling,"
                    />
                    <button className="primary-button mt-14">
                        Get Started
                    </button>
                </div>
                <div>
                    <Feature
                        Icon={UsersIcon}
                        iconBgColor="#4D8DFF"
                        title="we Are Hiring"
                        description="While most people enjoy casino gambling,"
                    />
                    <button className="primary-button mt-14">
                        Get Started
                    </button>
                </div>
                <div>
                    <Feature
                        Icon={HeartIcon}
                        iconBgColor="#740A76"
                        title="Join Bootcamp"
                        description="While most people enjoy casino gambling,"
                    />
                    <button className="primary-button mt-14">
                        Get Started
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Features;

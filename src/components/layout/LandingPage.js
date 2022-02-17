import React, { Fragment, useState } from "react";
import { Navigate, Outlet, Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";

import {
    AnnotationIcon,
    ChatAlt2Icon,
    ChatAltIcon,
    DocumentReportIcon,
    HeartIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    QuestionMarkCircleIcon,
    ReplyIcon,
    SparklesIcon,
    TrashIcon,
    TrendingUpIcon,
    UserGroupIcon,
    UsersIcon,
    XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
    {
        name: "Company Training",
        description: "Upgrade your employees skill with latest technology.",
        href: "#",
        icon: TrendingUpIcon,
    },
    {
        name: "Partner With Us",
        description: ".",
        href: "#",
        icon: UserGroupIcon,
    },
    {
        name: "Live Chat",
        description: "Need information, contact live chat with us",
        href: "#",
        icon: ChatAlt2Icon,
    },
    {
        name: "Knowledge Base",
        description:
            "Connect with third-party tools that you're already using.",
        href: "#",
        icon: QuestionMarkCircleIcon,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function LandingPage() {
    return (
        <div className="bg-white sticky top-0 z-50 ">
            <header>
                <Popover className="relative bg-white">
                    {({ open }) => (
                        <>
                            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                                <div className="flex justify-start lg:w-0 lg:flex-1">
                                    <Link to="#">
                                        <span className="sr-only">codeid</span>
                                        <img
                                            className="h-8 w-auto sm:h-10"
                                            src="./images/codeid.png"
                                            alt="codeid"
                                        />
                                    </Link>
                                </div>

                                <div className="-mr-2 -my-2 md:hidden">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                        <span className="sr-only">
                                            Open menu
                                        </span>
                                        <MenuIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                                <Popover.Group
                                    as="nav"
                                    className="hidden md:flex space-x-10"
                                >
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button
                                                    className={classNames(
                                                        open
                                                            ? "text-gray-900"
                                                            : "text-gray-500",
                                                        "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    )}
                                                >
                                                    <span>Solutions</span>
                                                    <ChevronDownIcon
                                                        className={classNames(
                                                            open
                                                                ? "text-gray-600"
                                                                : "text-gray-400",
                                                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                </Popover.Button>

                                                <Transition
                                                    show={open}
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0 translate-y-1"
                                                    enterTo="opacity-100 translate-y-0"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100 translate-y-0"
                                                    leaveTo="opacity-0 translate-y-1"
                                                >
                                                    <Popover.Panel
                                                        static
                                                        className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                                                    >
                                                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                                                {solutions.map(
                                                                    (item) => (
                                                                        <Link
                                                                            key={
                                                                                item.name
                                                                            }
                                                                            to={
                                                                                item.href
                                                                            }
                                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                                        >
                                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-orange-600 to-red-600 text-white sm:h-12 sm:w-12">
                                                                                <item.icon
                                                                                    className="h-6 w-6"
                                                                                    aria-hidden="true"
                                                                                />
                                                                            </div>
                                                                            <div className="ml-4">
                                                                                <p className="text-base font-medium text-gray-900">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="mt-1 text-sm text-gray-500">
                                                                                    {
                                                                                        item.description
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>

                                    <Link
                                        to="talent"
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Talents
                                    </Link>
                                    <Link
                                        to="bootcamp"
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Bootcamp
                                    </Link>
                                    <Link
                                        to="hiring"
                                        className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Hiring
                                    </Link>
                                </Popover.Group>
                                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                    <Link
                                        to="signin"
                                        className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to="signup"
                                        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>

                            <Transition
                                show={open}
                                as={Fragment}
                                enter="duration-200 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    static
                                    className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                                >
                                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                        <div className="pt-5 pb-6 px-5">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <img
                                                        className="h-8 w-auto"
                                                        src="./assets/images/codeid.png"
                                                        alt="Workflow"
                                                    />
                                                </div>
                                                <div className="-mr-2">
                                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                        <span className="sr-only">
                                                            Close menu
                                                        </span>
                                                        <XIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    </Popover.Button>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <nav className="grid grid-cols-1 gap-7">
                                                    {solutions.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                                        >
                                                            <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                                                <item.icon
                                                                    className="h-6 w-6"
                                                                    aria-hidden="true"
                                                                />
                                                            </div>
                                                            <div className="ml-4 text-base font-medium text-gray-900">
                                                                {item.name}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="py-6 px-5">
                                            <div className="grid grid-cols-2 gap-4">
                                                <a
                                                    href="# "
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    Pricing
                                                </a>
                                                <a
                                                    href="# "
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    Partners
                                                </a>
                                                <a
                                                    href="# "
                                                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                                                >
                                                    Company
                                                </a>
                                            </div>
                                            <div className="mt-6">
                                                <Link
                                                    to="#"
                                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                                                >
                                                    Sign up
                                                </Link>
                                                <p className="mt-6 text-center text-base font-medium text-gray-500">
                                                    Existing customer?
                                                    <Link
                                                        to="signin"
                                                        className="text-gray-900"
                                                    >
                                                        Sign in
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </header>
        </div>
    );
}

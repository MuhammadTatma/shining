import React from "react";

export default function SearchComponent() {
    return (
        <form className="lg:w-1/2 w-full sm:w-full px-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-2xl outline-none bg-gray-50 focus:bg-white focus:border-primary"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 right-12 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                
            </div>
        </form>
    );
}
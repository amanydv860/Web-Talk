import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const router = useNavigate();

    return (
        <nav className="flex items-center justify-between p-4  shadow-sm bg-transparent">
            <div className="text-4xl font-serif text-gray-800">WEB TALK</div>

            <div className="hidden text-center md:flex justify-end space-x-6">
                <a
                    href="#"
                    className="text-lg   transition duration-200"
                    onClick={() => {
                        router("/aljk23")
                    }}
                >
                    Join as Guest
                </a>
                <a
                    href="#"
                    className="text-lg transition duration-200"
                    onClick={() => {
                        router("/auth")

                    }}
                >
                    Register
                </a>
                <button
                    onClick={() => {
                        router("/auth")

                    }}
                    className="bg-orange-500 text-white text-sm font-semibold rounded-md px-4 py-2 hover:bg-orange-600 transition duration-200">
                    Login
                </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-600 focus:outline-none"
                >
                    {isOpen ? (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 right-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col space-y-2 p-4">
                        <a
                            href="#"
                            className="text-lg text-gray-600 hover:text-gray-800 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Join as Guest
                        </a>
                        <a
                            href="#"
                            className="text-lg text-gray-600 hover:text-gray-800 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Register
                        </a>
                        <button
                            className="bg-orange-400 text-white text-lg font-semibold rounded-sm px-4 py-2 hover:bg-orange-500 transition duration-200"
                            onClick={toggleMenu}
                        >
                            Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

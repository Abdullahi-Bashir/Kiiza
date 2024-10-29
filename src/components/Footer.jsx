import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your subscription logic here
    };

    return (
        <footer className="bg-black text-gray-400 py-8 px-8 md:px-16 lg:px-24">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    {/* Left Side */}
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-white text-2xl font-bold mb-3">Kiiza</h2>
                        <p className="max-w-md">
                            Full-Stack Developer based in Kenya, specializing in web and software development.
                        </p>
                    </div>

                    {/* Right Side - Subscribe Form */}
                    <div className="w-full md:w-auto">
                        <form onSubmit={handleSubmit} className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow md:w-64 px-4 py-2 bg-[#1f2937] rounded-l-lg focus:outline-none text-white"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#4ade80] to-[#3b82f6] text-white px-6 py-2 rounded-r-lg hover:opacity-90 transition-opacity"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Copyright */}
                    <div className="mb-4 md:mb-0">
                        © 2024 Kiiza. All rights reserved.
                    </div>

                    {/* Legal Links */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

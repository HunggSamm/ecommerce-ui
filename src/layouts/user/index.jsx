import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const UserLayout = () => {
    return (
        <div className="flex min-h-screen flex-col font-sans text-gray-900 antialiased min-w-[1200px]">
            <Header />

            <main className="flex-grow">
                <div className="relative flex h-[350px] w-full flex-col items-center justify-center bg-[#f2f2f2]">
                    <h1 className="text-6xl font-extralight tracking-tight text-gray-300 uppercase">
                        Banner
                    </h1>
                </div>

                <div className="container mx-auto px-4 py-16">
                    <div className="min-h-[400px] border-2 border-dashed border-gray-100 flex items-center justify-center">
                        <Outlet />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default UserLayout;
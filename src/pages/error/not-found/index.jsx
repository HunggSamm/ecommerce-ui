
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ImageNotFound from "@/assets/images/not-found.webp";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-full flex flex-col md:flex-row items-center justify-center bg-[#f2f4f3] p-8 md:p-24 overflow-hidden relative">
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
                <h2 className="text-gray-400 font-bold text-lg md:text-xl mb-4 tracking-[0.2em] uppercase">
                    Error 404
                </h2>
                <h1 className="text-[#5c735a] text-6xl md:text-8xl font-extrabold mb-6 leading-tight">
                    Oops!
                    <br />
                    Page not found.
                </h1>
                <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-md leading-relaxed">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>

                <Button
                    onClick={() => navigate("/")}
                    className="bg-[#94a684] hover:bg-[#7a8c6a] text-white px-12 py-8 rounded-full text-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-[#94a684]/20"
                >
                    Go Back Home
                </Button>
            </div>

            <div className="flex-1 w-full flex justify-center items-center mt-12 md:mt-0 z-10">
                <img
                    src={ImageNotFound}
                    alt="404 Illustration"
                    className="w-full max-w-[500px] md:max-w-[700px] h-auto object-contain "
                />
            </div>

            <div className="absolute inset-0 z-0 bg-white">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#f9faf9] -skew-x-6 transform -translate-x-10 origin-top border-right border-gray-100"></div>
            </div>
        </div>
    );
};

export default NotFound;

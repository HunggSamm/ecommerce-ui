import React from "react";

const Footer = () => {
    return (
        <footer className="border-t bg-white pt-16 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-5 gap-10">
                    <div className="font-bold text-xl uppercase">Footer Logo</div>
                    <div className="space-y-4 text-sm text-gray-400">FOOTER COL 1</div>
                    <div className="space-y-4 text-sm text-gray-400">FOOTER COL 2</div>
                    <div className="space-y-4 text-sm text-gray-400">FOOTER COL 3</div>
                    <div className="space-y-4 text-sm text-gray-400">FOOTER COL 4</div>
                </div>

                <div className="mt-16 flex items-center justify-between border-t pt-8">
                    <p className="text-xs text-gray-400 uppercase tracking-widest">
                        © 2026 FURNISY BASE LAYOUT
                    </p>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">
                        Payment Methods Placeholder
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
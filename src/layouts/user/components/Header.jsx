import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto flex h-20 items-center justify-between px-4">
                <div className="flex gap-8 text-[15px] font-medium text-gray-400">
                    <span onClick={() => navigate("/page1")} className="cursor-pointer">
                        NAV ITEM 1
                    </span>
                    <span onClick={() => navigate("/page2")} className="cursor-pointer">
                        NAV ITEM 2
                    </span>
                    <span onClick={() => navigate("/page3")} className="cursor-pointer">
                        NAV ITEM 3
                    </span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 font-bold text-2xl tracking-tighter uppercase">
                    HEADER LOGO
                </div>

                <div className="flex items-center gap-6 text-[13px] font-semibold text-gray-400 uppercase">
                    <span>Search</span>
                    <span>Currency</span>
                    <span>Account</span>
                    <span>Cart</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
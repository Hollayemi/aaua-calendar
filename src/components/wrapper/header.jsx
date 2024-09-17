import { Link } from "react-router-dom";
import IconifyIcon from "../icon";

const Header = ({ pageName, back }) => {
    const windowback = () => window.history.back();
    return (
        <div className="flex justify-between h-14 bg-white px-3 flex-grow-0">
            <div className="flex items-center p-1">
                {pageName === "Event" ? (
                    <img
                        src="/calendar.png"
                        alt="img"
                        width={30}
                        class="mr-4"
                    />
                ) : (
                    <IconifyIcon
                        icon="tabler:chevron-left"
                        className="text-[25px] mr-3"
                        onClick={back || windowback}
                    />
                )}
                <h5 className="text-[20px] font-bold">{pageName}</h5>
            </div>
            <div className="flex items-center p-1">
                <IconifyIcon icon="tabler:search" className="mx-2" />
                <Link to="/list">
                    <IconifyIcon icon="tabler:list" className="mx-2" />
                </Link>
            </div>
        </div>
    );
};

export default Header;

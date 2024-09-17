import IconifyIcon from "../../components/icon";

export const ItemsTab = ({ name, category, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`w-fit px-4 mx-1 h-9  flex items-center justify-center rounded-md hover:bg-black hover:text-white cursor-pointer ${
                category === name
                    ? "bg-black text-white"
                    : "bg-slate-200"
            } transition-all duration-300`}
        >
            <h5 className="text-[13px]">{name}</h5>
        </div>
    );
};

const months = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
};

export const Event = ({ onClick, data }) => {
    return (
        <div
            onClick={onClick}
            className="w-full relative cursor-pointer flex items-center h-20 mb-3 bg-slate-200 border-l-[10px] border-l-orange-400 rounded-lg"
        >
            <div className="w-20 h-full flex flex-col items-center justify-center ">
                <h5 className="text-2xl !font-black">
                    {new Date(data.start).getDate()}
                </h5>
                <h5>{months[new Date(data.start).getUTCMonth()]}</h5>
            </div>
            <div>
                <h5 className="font-bold  text-slate-700  text-[20px]">
                    {data?.title}
                </h5>
                <h5 className="text-[12px] mt-1">
                    Free - {new Date(data.start).getHours() % 12} :{" "}
                    {new Date(data.start).getMinutes()}
                    {new Date(data.start).getHours() <= 11 ? " am" : " pm"}
                </h5>
            </div>
            <IconifyIcon
                icon={"tabler:chevron-right"}
                className="absolute right-4 top-8 mt-3 "
            />
        </div>
    );
};

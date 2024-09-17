import { useDispatch, useSelector } from "react-redux";
import { eventToggleList } from "../../actions/event";

const EventInfo = ({ info }) => {
    const dispatch = useDispatch();
    const {
        auth: { list },
    } = useSelector((state) => state);
    console.log(info);
    const isIn = list.includes(info.id);
    return (
        <div className="p-2">
            <div>
                <h5 className="font-bold  text-slate-700  text-[20px] py-2">
                    {info.title}
                </h5>
                <h5 className="text-[12px]">
                    {new Date(info.start).toLocaleString()} -{" "}
                    {new Date(info.end).toLocaleString()}
                </h5>
                {info.location && (
                    <h5 className="text-[12px] pt-2">
                        Location: {info.location}
                    </h5>
                )}
                <h5 className="text-[12px] pt-2">Host: {info.user?.name}</h5>
            </div>
            <h5 className="text-[14px] mt-6 font-bold">Description</h5>
            <h5 className="leading-6 text-[14px] mt-2 text-gray-700">
                {info.notes}
            </h5>

            <button
                onClick={() =>
                    dispatch(
                        eventToggleList({
                            id: info.id,
                            title: info.title,
                            action: isIn ? "remove" : "add",
                        })
                    )
                }
                className="h-10 w-full mt-8 px-4 bg-pink-600 rounded-md text-white text-[13px]"
            >
                {isIn ? "Remove from List" : "Add To List"}
            </button>
        </div>
    );
};

export default EventInfo;

import React, { useEffect, useState } from "react";
import AppWrapper from "../../components/wrapper";
import { Event, ItemsTab } from "./components";
import EventInfo from "./eventInfo";
import { useDispatch, useSelector } from "react-redux";
import { eventStartLoading } from "../../actions/event";
import IconifyIcon from "../../components/icon";
import { Link } from "react-router-dom";

const MyList = () => {
    const dispatch = useDispatch();
    const [cate, setCate] = useState("All");
    const [isback, setBack] = useState(false);
    const {
        calendar: { events },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(eventStartLoading());
    }, [dispatch]);

    const filtered =
        cate !== "All"
            ? events.filter((each) => each.category === cate)
            : events;

    const ava = [
        "All",
        "School",
        "Social",
        "Departmental",
        "Football",
        "Tech",
        "Updates",
    ];
    return (
        <AppWrapper
            pageName="My List"
            back={isback ? () => setBack(false): null}
        >
            <div className="flex">
                <div
                    className={`w-[100%] transition-all duration-300 px-3 ${
                        isback ? "-ml-[100%]" : "ml-0"
                    }`}
                >
                    
                    <br />
                    <div className="overflow-auto">
                        {filtered.map((each, i) => (
                            <Event
                                key={i}
                                data={each}
                                onClick={() => setBack(each)}
                            />
                        ))}
                    </div>
                </div>
                {isback && (
                    <div className="w-[100%] h-60">
                        <EventInfo info={isback} />
                    </div>
                )}
            </div>
            <Link to="/calendar">
                <div className="fixed h-12 w-12 flex justify-center items-center rounded-full shadow-lg bottom-16 right-4 bg-pink-600 text-white">
                    <IconifyIcon icon="tabler:calendar" />
                </div>
            </Link>
        </AppWrapper>
    );
};

export default MyList;

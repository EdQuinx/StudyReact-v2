import React from "react";
import PropTypes from "prop-types";
import IndexDropdown from "components/Dropdowns/IndexDropdown";
import { createPopper } from "@popperjs/core";

export default function CardPointsChoose({
    statSubtitle,
    statDescripiron,
    statIconName,
    statIconColor,
    currentsubject,
    subjects,
    action,
}) {
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
    const btnDropdownRef = React.createRef();
    const popoverDropdownRef = React.createRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };

    return (
        <a>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                                <>
                                    <a
                                        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold "
                                        href="#pablo"
                                        ref={btnDropdownRef}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                                        }}
                                    >
                                        Môn: {currentsubject}
                                    </a>
                                    <div
                                        ref={popoverDropdownRef}
                                        className={
                                            (dropdownPopoverShow ? "block " : "hidden ") +
                                            "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                                        }
                                    >
                                        {
                                            subjects.map((val, index) => (
                                                <a key={`dropdown-sub-${index}`}
                                                    className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 hover:text-blueGray-500"
                                                    onClick={() => {
                                                            action(val)
                                                            closeDropdownPopover()
                                                        }
                                                    }
                                                >
                                                    {val.subject}
                                                </a>
                                            ))
                                        }

                                    </div>
                                </>
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                <i className={statIconName}></i>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                        <span className="whitespace-nowrap">{statDescripiron}</span>
                    </p>
                </div>
            </div>
        </a>
    );
}

CardPointsChoose.defaultProps = {
    statSubtitle: "Traffic",
    statTitle: "350,897",
    statArrow: "up",
    statPercent: "3.48",
    statPercentColor: "text-emerald-500",
    statDescripiron: "Since last month",
    statIconName: "far fa-chart-bar",
    statIconColor: "bg-red-500",
    currentsubject: "Toán",
    subjects: [],
};

CardPointsChoose.propTypes = {
    statSubtitle: PropTypes.string,
    statTitle: PropTypes.string,
    statArrow: PropTypes.oneOf(["up", "down"]),
    statPercent: PropTypes.string,
    statPercentColor: PropTypes.string,
    statDescripiron: PropTypes.string,
    statIconName: PropTypes.string,
    currentsubject: PropTypes.string,
    subjects: PropTypes.array,
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: PropTypes.string,
};
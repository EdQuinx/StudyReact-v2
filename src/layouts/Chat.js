import React from "react";
import { Route, Switch } from "react-router-dom";

// views
import Spin from "components/Spinners/Spin";
import Login from "views/auth/Login";

const ChatLayout = (props) => {

    return (
        props.loading ?
            <Spin />
            :
            props.isAuthenticated ?
                <main className="flex max-h-screen">
                    <section className="flex-col flex-none w-1/3">
                        <div className="header p-4 flex flex-row justify-between items-center flex-none">
                            <p className="text-md font-bold hidden md:block group-hover:block">Trao đổi nhóm</p>
                            <a title="Tạo nhóm" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 hidden md:block group-hover:block">
                                <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
                                    <path
                                        d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
                                </svg>
                            </a>
                        </div>
                        <div className="search-box p-4 flex-none">
                            <form onsubmit="">
                                <div className="relative">
                                    <label>
                                        <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text" value="" placeholder="Tìm nhóm" />
                                        <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="24" height="24"
                                                viewBox="0 0 24 24">
                                                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path></svg>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>

                        <div className="contacts p-2 flex-1 overflow-y-scroll">
                            <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                                <div className="w-16 relative flex-none">
                                    <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/61.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1">
                                    <p>Tên nhóm</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">Tên trưởng nhóm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                                <div className="w-16 relative flex-none">
                                    <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/61.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-1">
                                    <p>Tên nhóm 22222</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">Tên trưởng nhóm 22222222222</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col flex-1 max-h-screen overfolow" style={{ maxHeight: "100vh" }}>
                        <div className="px-6 py-4 flex justify-between items-center shadow overflow-y-scroll">
                            <div className="flex">
                                <div className="w-12 mr-4 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/33.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold">Scarlett Johansson</p>
                                    <p>Active 1h ago</p>
                                </div>
                            </div>

                            <div className="flex">
                                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2">
                                    <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                                        <path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
                                    </svg>
                                </a>
                                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                                    <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                                        <path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
                                    </svg>
                                </a>
                                <a href="#" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2 ml-4">
                                    <svg viewBox="0 0 20 20" className="w-full h-full fill-current text-blue-500">
                                        <path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
                                    </svg>

                                </a>
                            </div>
                        </div>
                        <div className="p-4 flex-1 overflow-auto max-h-1/2">
                            {
                                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((val) => (
                                    <div className="flex justify-start mb-5">
                                        <div className="w-10 relative flex flex-shrink-0">
                                            <img className="shadow-md rounded-full w-full h-full object-cover"
                                                src="https://randomuser.me/api/portraits/women/33.jpg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                                            <div className="flex items-center group">
                                                <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">Hey! How are you?</p>

                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="chat-footer flex-none">
                            <div className="flex flex-row items-center p-4">
                                <div className="relative flex-grow">
                                    <label>
                                        <input className="rounded-full py-2 pl-3 pr-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text" value="" placeholder="Aa" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                :
                <Login />
    );
}

export default ChatLayout
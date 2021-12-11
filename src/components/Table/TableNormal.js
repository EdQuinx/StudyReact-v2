import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js"

export default function TableNormal({ color, title, dataSource, column }) {
    const [columnkey, setColumnkey] = useState([])

    useEffect(() => {
        console.log("keys:", column.map(vl => vl.key))
        setColumnkey(column.map(vl => vl.key))
    }, []);

    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
                    (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                    "font-semibold text-lg " +
                                    (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                {title}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                {
                                    column.map((cl, index) => (
                                        <th key={`colum-index-${index}`}
                                            className={
                                                "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                                (color === "light"
                                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                            }
                                        >
                                            {cl.title}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataSource.map((val, index) => (
                                    <tr key={`table-tr-${index}`}>
                                        {
                                            column.map((cl, index) => (
                                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                    {
                                                        cl.hasOwnProperty("render") ?
                                                            cl.render(val)
                                                            :
                                                            val[cl.key]
                                                    }
                                                </th>
                                            ))
                                            /* Object.keys(val).map((val0, index0) => {
                                                if (column.find(raw => raw.key === val0)) {
                                                    return (
                                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                                                            {
                                                                column.find(raw => raw.key === val0).hasOwnProperty("render") ?
                                                                    column.find(raw => raw.key === val0).render(val)
                                                                    :
                                                                    val[val0]
                                                            }
                                                        </th>
                                                    )
                                                }
                                            }) */
                                        }

                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

TableNormal.defaultProps = {
    color: "light",
    title: "Table Title",
    dataSource: [
        {
            name: "Bao",
            class: 12,
        },
        {
            name: "Quy",
            class: 11
        }
    ],
    column: [
        {
            title: "Họ và tên",
            key: "name",
            render: (value) => <b>{value.name} - {value.class}</b>
        },
        {
            title: "Lớp/khối",
            key: "class"
        }
    ]
};

TableNormal.propTypes = {
    color: PropTypes.oneOf(["light", "dark"]),
    title: PropTypes.string,
    dataSource: PropTypes.array,
    column: PropTypes.array,
};

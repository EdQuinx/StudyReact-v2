import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TOÁN"
                  statTitle="8,6"
                  statArrow="up"
                  statPercent="0,45"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Tăng so với lần cuối"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="HÓA HỌC"
                  statTitle="7"
                  statArrow="down"
                  statPercent="1.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Giảm so với lần cuối"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="VẬT LÝ"
                  statTitle="9,5"
                  statArrow="up"
                  statPercent="2,50"
                  statPercentColor="text-orange-500"
                  statDescripiron="Tăng so với lần cuối"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TIN HỌC"
                  statTitle="10"
                  statArrow="up"
                  statPercent="0"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Không đổi"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

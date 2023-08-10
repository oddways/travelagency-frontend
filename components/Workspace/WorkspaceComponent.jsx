"use client"
import { BsArrowRight } from "react-icons/bs"
const WorkspaceComponent = () => {
  return (
    <div className="w-full flex flex-col  gap-4 py-4 px-4 md:px-10">
      <h1 className="text-lg font-semibold">Your Workspace</h1>
      <p className="text-sm">Welcome, xxx</p>

      {/* Overview */}
      <p className="text-sm font-semibold mt-[15px]">Overview</p>

      {/* Overview List */}
      <section className="w-full grid grid-cols-1 grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-4 ">
        {/*  */}
        {/* Agenda */}
        <div className="w-full h-[200px] border-t-8 border-yellow-600 flex flex-col items-start shadow-md shadow-black rounded-md ">
          {/* Header */}
          <section className="w-full px-2 py-2 h-10 flex items-center justify-between bg-yellow-200">
            <p className="text-sm md:text-lg font-semibold whitespace-nowrap">
              Today&apos;s Agenda
            </p>
          </section>
          {/* Body */}
          <section className="w-full h-full flex flex-col items-center justify-center ">
            <p className="text-xs md:text-sm text-gray-600">
              You don&apos;t have any schedule for today.{" "}
              <span className="cursor-pointer text-yellow-600 text-base font-semibold">
                Add
              </span>
            </p>
          </section>
        </div>

        {/* Activity Report */}
        <div className="w-full h-[200px] border-t-8 border-yellow-600 flex flex-col items-start shadow-md shadow-black rounded-md ">
          {/* Header */}
          <section className="w-full px-2 py-2 h-10 flex items-center justify-between bg-yellow-200">
            <p className="text-sm md:text-lg font-semibold whitespace-nowrap">
              Activity Report
            </p>
            <p className="text-yellow-600 text-xs cursor-pointer hover:opacity-80 flex items-center gap-1 whitespace-nowrap">
              view full activity report
              <BsArrowRight color="#8a8301" size={15} />
            </p>
          </section>

          {/* Body */}
          <section className="w-full h-full flex flex-col px-2">
            <p className="self-end mt-2 text-xs md:text-sm text-gray-600">
              Tuesday(18th Sept 2019)
            </p>
            <div className="mt-2 flex flex-col w-[50%] md:w-[30%]">
              <p className="self-start text-xs md:text-sm text-gray-600 whitespace-nowrap">
                You added a new client
              </p>
              <p className="self-end md:self-start text-xs md:text-sm text-yellow-600 whitespace-nowrap">
                Odusote Mayorkun
              </p>
              <p className="self-end md:self-start px-3 mt-1 py-2 border-l-2 border-yellow-600 bg-yellow-200  text-xs md:text-sm text-gray-600 whitespace-nowrap">
                Status: Pending
              </p>
            </div>
          </section>
        </div>

        {/* Task Schedule */}
        <div className="w-full h-[200px] border-t-8 border-yellow-600 flex flex-col items-start shadow-md shadow-black rounded-md">
          {/* Header */}
          <section className="w-full px-4 py-2 h-10 flex items-center justify-between bg-yellow-200">
            <p className="text-sm md:text-lg font-semibold whitespace-nowrap">
              Tasks that are due
            </p>
            <p className="text-yellow-600 text-xs cursor-pointer hover:opacity-80 flex items-center gap-1">
              Create Tasks
              <BsArrowRight color="#8a8301" size={15} />
            </p>
          </section>

          {/* Body */}
          <section className="w-full h-full px-2 md:px-6">
            <div className="w-full mt-2 h-[70px]  bg-yellow-200 flex flex-col gap-3 items-start px-2 py-2">
              <p className=" text-xs md:text-sm text-gray-600 font-semibold">
                Follow up{" "}
                <span className="font-semibold text-yellow-600 cursor-pointer hover:opacity-90">
                  Odusote
                </span>
              </p>
              <p className=" text-xs lg:text-sm text-gray-600 whitespace-nowrap">
                Due on: 1/21/2021 Created on: 1/15/2021
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default WorkspaceComponent

import React from "react"

const ClientComponent = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-start px-2 py-3 md:px-8 md:py-6 bg-gray-100">
      <p className="font-bold text-lg">Clients</p>
      <p className="">Here&apos;s the clients list</p>

      {/* Section */}
      <section className="w-full rounded-md px-2 py-3 md:px-4 md:py-4 flex flex-col gap-3 bg-white h-[70vh] overflow-y-scroll"></section>
    </div>
  )
}

export default ClientComponent

import React from "react";

const Skeleton = () => {
  return (
    <main className="flex-grow flex justify-center items-center">
      <div className="mx-auto px-4 sm:px-8 py-2 text-center">
        <div className="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
          <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div className="flex justify-center mt-4">
                <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div className="flex justify-center mt-4">
                <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>

          <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
            <div className="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div className="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div className="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div className="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div className="flex justify-center mt-4">
                <div className="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div className="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skeleton;

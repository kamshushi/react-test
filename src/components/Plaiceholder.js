import React from "react";

const Plaiceholder = () => {
  return (
    <main class="flex-grow flex justify-center items-center">
      <div class="mx-auto px-4 sm:px-8 py-2 text-center">
        <div class="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
          <div class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div class="flex justify-center mt-4">
                <div class="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div class="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-2">
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div class="flex justify-center mt-4">
                <div class="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div class="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>

          <div class="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2">
            <div class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4">
              <div class="mx-auto h-40 bg-gray-200 rounded-md"></div>
              <div class="h-4 bg-gray-200 w-40 mt-8 block mx-auto rounded-sm"></div>
              <div class="h-2 bg-gray-200 w-64 mt-2 block mx-auto rounded-sm"></div>
              <div class="flex justify-center mt-4">
                <div class="rounded-sm h-8 w-20 px-4 bg-gray-200 mr-2"></div>
                <div class="rounded-sm h-8 w-20 px-4 bg-green-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Plaiceholder;

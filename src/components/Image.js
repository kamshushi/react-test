import React from "react";

const Image = ({ image }) => {
  const { largeImageURL, tags, pageURL } = image;
  const tagsArray = tags?.split(", ").slice(0, 2) || [];
  return (
    <div class="w-64 mx-3">
      <div class="bg-gray-50 md:bg-white md:shadow-xl rounded-lg mb-6 ">
        <div class="md:flex-shrink-0">
          <img
            src={largeImageURL}
            alt="uploaded cover image"
            class="object-cover h-48 w-full rounded-lg rounded-b-none"
          />
        </div>
        <div class="p-4">
          {tagsArray.length > 0 &&
            tagsArray.map((tag) => (
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
                {tag}
              </span>
            ))}
        </div>
        <div class="py-1">
          <div class="  p-2 md:p-4 md:mx-4">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={pageURL}
              class="bg-green-500 hover:bg-green-600 text-white rounded-full px-8 py-2"
            >
              View Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;

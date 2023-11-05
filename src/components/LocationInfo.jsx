import React from "react";
import { useState } from "react";

function LocationInfo({ data, clearInfo }) {
  return (
    <div>
      {data && data.places && data.places.length > 0 ? (
        <div className="relative overflow-x-auto m-3">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Country
                </th>
                <th scope="col" className="px-6 py-3">
                  State
                </th>
                <th scope="col" className="px-6 py-3">
                  Place Name
                </th>
              </tr>
            </thead>
            <tbody>
              {data.places.map((place, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">{data.country}</td>
                  <td className="px-6 py-4">{place["place name"]}</td>
                  <td className="px-6 py-4">{place.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="text-white m-3 right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={clearInfo}
          >
            Clear
          </button>
        </div>
      ) : data != null ? (
        <p className="text-center text-red-500 text-lg mt-3">
          No location information available.
        </p>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-3">
          Enter Postal code to see information..!
        </p>
      )}
    </div>
  );
}

export default LocationInfo;

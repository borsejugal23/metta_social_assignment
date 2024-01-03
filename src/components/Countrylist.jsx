import React, { useState } from "react";
import { Spinner } from '@chakra-ui/react';
import 'react-toastify/dist/ReactToastify.css';
import useDebounce from "../api/api";
import CountryCard from "./CountryCard";
import { IoSearchOutline } from "react-icons/io5";

const CountryList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { search, error, loading } = useDebounce(searchQuery);

  const handleQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-auto mx-auto ">
      <h1 className="text-center text-3xl pt-3">World By Currency</h1>
      <br />
      <label htmlFor="currencyCode" className="block text-base font-medium text-gray-700 mt-4 w-4/6 mx-auto">
        Enter Currency code
      </label>

      <div className="relative mt-2 w-4/6 mx-auto ">
        <input
          type="text"
          className="pl-3 py-2 bg-white border border-black shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1 text-black"
          placeholder="Search By currency INR, EUR"
          value={searchQuery}
          onChange={handleQuery}
        />
        <IoSearchOutline className="absolute top-3 right-3 text-black" />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen mt-[-10%] ">
          <Spinner
            thickness='3px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </div>
      ) : (
        <>
          {search?.length > 0 ? (
            <div className="w-10/12 mx-auto grid grid-cols-1 gap-x-5 gap-y-2 mt-4 sm:grid-cols-3 sm:gap-x-0 md:gap-x-5">
            {search.map((country, i) => (
              <CountryCard key={i + 1} country={country} />
            ))}
          </div>
          
          ) : (
            <>
              {error && (
                <div className="bg-white w-3/6 md:w-3/12 mx-auto p-8 mt-20 shadow-md text-center">
                <p className="text-6xl font-bold text-red-500 mb-4">404</p>
                <p className="text-lg text-gray-600">Page not found</p>
              </div>
              
              )}
              {!error && (
                <div className="w-9/12 mx-auto mt-2 ">
                  <img
                    className="w-full"
                    src="https://www.worldatlas.com/r/w1300-q80/upload/4c/1e/8e/shutterstock-585541982.jpg"
                    alt="currency"
                  />
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CountryList;

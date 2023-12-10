// CountryList.js
import React, {  useState } from "react";
import { Spinner } from '@chakra-ui/react';

import useDebounce from "../api/api";
import CountryCard from "./CountryCard";
import { IoSearchOutline } from "react-icons/io5";

const CountryList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {search, error,loading} = useDebounce(searchQuery);

  const handleQuery=(e)=>{
      
      setSearchQuery(e.target.value)
   }

  return (
    <div className="w-4/6 mx-auto">
      <h1 className="text-center text-3xl pt-3">World By Currency</h1>
    <br />
  <label htmlFor="currencyCode" className="block text-base font-medium text-gray-700 mt-4">
    Enter Currency code
  </label>

  <div className="relative mt-2">
      <input
        type="text"
        className="pl-3 py-2 bg-white border border-black shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md text-base focus:ring-1 text-black"
        placeholder="Search By currency INR, EUR"
        value={searchQuery}
        onChange={handleQuery}
      />
      <IoSearchOutline className="absolute top-3 right-3 text-black" />
    </div>
    {
       loading?<div className="flex justify-center items-center h-screen mt-[-20%]"><Spinner
       thickness='3px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
     /></div>:

       (<div className="flex flex-wrap mt-6">
    {
     search?.length>0? (search.map((country,i)=>(<CountryCard key={i+1} country={country} />)

   )): 
   error?<h1 className="text-xl text-rose-600">Sorry, no results found.</h1>:
   <img className="w-full"
      src="https://www.worldatlas.com/r/w1300-q80/upload/4c/1e/8e/shutterstock-585541982.jpg"  
      alt="currency"
    />

    }

    </div>)

    }
    </div>
  );
};

export default CountryList;


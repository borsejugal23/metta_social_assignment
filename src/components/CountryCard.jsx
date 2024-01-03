

const CountryCard=({country})=>{
    // console.log(country);
  return  <div className="w-full p-5 shadow md:shadow-lg rounded-s-md my-4 text-center flex flex-col items-center bg-gray-200">

    <img src={country.flags.svg} alt={country.name.common}className="w-2/4 mt-2" />

    <p className="py-2 text-lg"><strong> {country.name.common}</strong></p>

    {country.capital && country.capital.length > 0 ? (
       <p><strong>Capital: </strong>{country.capital[0]}</p>
     ) : (
       <p><strong>Capital: </strong> N/A</p> 
    )}   


{Object.keys(country.currencies).map((currencyCode, index) => (
 <div key={index}>
   <p>
     <strong>{country.currencies[currencyCode].symbol} </strong>
     {country.currencies[currencyCode].name}
     &nbsp;({currencyCode})
   </p>
 </div>
))}
</div>
}
export default CountryCard
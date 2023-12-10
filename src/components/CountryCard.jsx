

const CountryCard=({country})=>{
    // console.log(country);
  return  <div className="w-full md:w-1/3 p-4 shadow-md" >

    <img src={country.flags.svg} alt={country.name.common}className="w-2/4" />

    <p className="py-2"><strong>Name: </strong>{country.name.common}</p>

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
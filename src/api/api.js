import { useState, useEffect } from "react";

export default function useDebounce(query) {
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const url = "https://restcountries.com/v3.1";

  async function fetchData(query) {
    try {
      let res = await fetch(`${url}/currency/${query.toLowerCase()}`);
      if (!res.ok) {
        throw new Error("Page not found"); 
      }
      let data = await res.json();
      return data;
    } catch (error) {
      setError(true);
      return [];
    }
  }

  useEffect(() => {
    let timer = null;
    async function debounceFetch() {
      if (!query) {
        // Reset search if no query
        setSearch([]);
        setLoading(false);
        setError(false);
        return;
      }
      setLoading(true);
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        const result = await fetchData(query);
        setSearch(result);
        setLoading(false); 
      }, 600);
    }
    debounceFetch();
    return () => clearTimeout(timer);
  }, [query]);

  return { search, error, loading };
}

import { useEffect, useState } from 'react';

const apiKey = `at_r7JmkSZLXQOkaiEfP81qtTYf2PGNx`;

interface useSearchType {
  query: string;
}

export default function useMySearch({ query }: useSearchType) {
  const [isLoading, setIsLoading] = useState(false);
  const [locationInfo, setLocationInfo] = useState({});


  useEffect(() => {
    async function getSearchIpLocation(query: string) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`,
        );
        console.log(res);
        if (!res.ok) {
          throw new Error(
            `Could not fetch location of ${query} 😔. Please try again...`,
          );
        }

        const data = await res.json();
        console.log(data);

        setLocationInfo(data);
      } catch (error) {
        alert(error);
      } finally {
        setIsLoading(false);
      }
    }
    getSearchIpLocation(query);
  }, [query]);

  return { isLoading, locationInfo };
}

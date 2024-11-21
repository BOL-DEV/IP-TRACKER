import { useEffect, useState } from 'react';

const apiKey = `at_fZkrwj2AmrNkvwBxj93D4Olka5LS7`;

interface useSearchType {
  query: string;
}

const initialLocation = {
  city: '',
  country: '',
  lat: 40,
  lng: 80,
  timezone: '',
};

export default function useMySearch({ query }: useSearchType) {
  const [isLoading, setIsLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState({
    ip: '',
    location: initialLocation,
    isp: '',
  });

  useEffect(() => {
    async function getSearchIpLocation(query: string) {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`,
        );
        if (!res.ok) {
          throw new Error(
            `Could not fetch location of ${query} 😔. Please try again...`,
          );
        }

        const data = await res.json();

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

import { useEffect, useState } from 'react';

interface useSearchType {
  query: string;
}



export default function useMySearch({ query }: useSearchType) {
  const [isLoading, setIsLoading] = useState(true);
  const [locationInfo, setLocationInfo] = useState({
    ip: '',
    loc: '',
    org: '',
    city: '',
    country: '',
    timezone: '',
  });

  useEffect(() => {
    async function getSearchIpLocation(query: string) {
      setIsLoading(true);
      try {
          const res = await fetch(
          `https://ipinfo.io/${query}/json?token=${
            import.meta.env.VITE_IPINFO_TOKEN
          }`,
        );
        if (!res.ok) {
          throw new Error(
            `Could not fetch location of ${query} 😔. Please make sure you are connected to the internet and disable all vpn services then try again...`,
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

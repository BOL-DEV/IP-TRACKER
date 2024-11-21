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

/*
import { useEffect, useState } from 'react';

// const apiKey = `at_fZkrwj2AmrNkvwBxj93D4Olka5LS7`;

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

//ipinfo.io/[IP address]?token=a2f7a7f631dd1f
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
          `https://ipinfo.io/${query}/json?token=${
            import.meta.env.VITE_IPINFO_TOKEN
          }`,
        );
        console.log(res);

        if (!res.ok) {
          throw new Error(
            `Could not fetch location of ${query} 😔. Please try again...`,
          );
        }

        const data = await res.json();
        console.log(data);

        // setLocationInfo(data);
      } catch (error) {
        alert(error);
      } finally {
        // setIsLoading(false);
      }
    }
    getSearchIpLocation(query);
  }, [query]);

  return { isLoading, locationInfo };
}

//https://ipinfo.io/8.8.8.8/json?token=a2f7a7f631dd1f
*/

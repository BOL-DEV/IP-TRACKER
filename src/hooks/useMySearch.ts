import { useState } from 'react';

const apiKey = `at_r7JmkSZLXQOkaiEfP81qtTYf2PGNx`;

export default function useMySearch() {
  const [isLoading, setIsLoading] = useState(false);
  const [locationInfo, setLocationInfo] = useState({});

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
      const { ip, isp, location } = data;
      console.log(ip, isp, location);

      setLocationInfo({ ip, isp, location });
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, getSearchIpLocation, locationInfo };
}

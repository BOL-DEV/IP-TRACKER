import { useEffect, useState } from "react";

const IPkey = `https://api64.ipify.org/?format=json`;

interface IPprops {
  ip: string;
}

const useGetIP = () => {
  const [userIP, setUserIP] = useState<IPprops>({ ip: '' });


  useEffect(() => {
    const getIP = async () => {
      try {
        const res = await fetch(IPkey);
        if (!res.ok) {
          throw new Error(`Could not get IP`);
        }
        const data = await res.json();

        setUserIP(data ? data : { ip: '8.8.8.0' });
      } catch (error) {
        alert(error);
      }
    };

    getIP();
  }, []);

  return userIP;
};

export default useGetIP

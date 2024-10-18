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
        const data = await res.json();
        setUserIP(data);
      } catch (error) {
        alert(error);
      }
    };

    getIP();
  }, []);

  return { userIP };
};

export default useGetIP

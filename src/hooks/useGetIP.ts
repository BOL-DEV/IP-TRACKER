import { useEffect, useState } from "react";

const IPkey = `https://api64.ipify.org/?format=json`;

interface IPprops {
  ip: string;
}

const useGetIP = () => {
  const [IP, setIP] = useState<IPprops>({ ip: '' });

  useEffect(() => {
    const getIP = async () => {
      try {
        const res = await fetch(IPkey);
        const data = await res.json();
        setIP(data);
        console.log(data);
      } catch (error) {
        alert(error);
      }
    };

    getIP();
  }, []);

  return { IP };
};

export default useGetIP

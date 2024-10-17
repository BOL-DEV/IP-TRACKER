import { useEffect, useState } from "react";

const IPkey = `https://api64.ipify.org/?format=json`;

const useGetIP = () => {
  const [IP, setIP] = useState("");

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

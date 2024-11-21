import { createContext, useState } from "react";
import useMySearch from "../hooks/useMySearch";

type LocationInfoType = {
  ip: string;
  org: string;
  loc: string;
  city: string;
  country: string;
  timezone: string;
};

type IpContextType = {
  IP: string;
  setIP: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  locationInfo: LocationInfoType;
  mapPosition: number[];
  setMapPosition: React.Dispatch<React.SetStateAction<number[]>>;
};

const IpContext = createContext<IpContextType | undefined>(undefined);

function IpProvider({ children }: { children: React.ReactNode }) {
  const [IP, setIP] = useState<string>('');

  const {
    isLoading,
    locationInfo = {
      ip: '',
      org: '',
      loc: '',
      city: '',
      country: '',
      timezone: '',
    },
  } = useMySearch({ query: IP });

  const [mapPosition, setMapPosition] = useState<number[]>([]);

  return (
    <IpContext.Provider
      value={{
        IP,
        setIP,
        isLoading,
        locationInfo,
        mapPosition,
        setMapPosition,
      }}
    >
      {children}
    </IpContext.Provider>
  );
}



export { IpProvider, useIP };

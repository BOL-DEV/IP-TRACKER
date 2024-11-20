import { createContext, useContext, useState } from "react";
import useMySearch from "../hooks/useMySearch";

type LocationInfoType = {
  ip: string;
  isp: string; 
  location: {
    lat: number;
    lng: number;
    city: string;
    country: string; 
    timezone: string; 
  };
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
  const [IP, setIP] = useState<string>("");
  // const { isLoading, locationInfo } = useMySearch({ query: IP });
  const {
    isLoading,
    locationInfo = {
      ip: "",
      isp: "",
      location: {
        lat: 0,
        lng: 0,
        city: "",
        country: "",
        timezone: "",
      },
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

function useIP() {
  const context = useContext(IpContext);
  if (!context) {
    throw new Error("useIP must be used within an IpProvider");
  }
  return context;
}

export { IpProvider, useIP };

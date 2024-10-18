import { createContext, useContext, useState } from 'react';
import useMySearch from '../hooks/useMySearch';

type IpContextType = {
  IP: string;
  setIP: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  locationInfo: object; // Replace with actual location type when available.
  mapPosition: number[];
  setMapPosition: React.Dispatch<React.SetStateAction<number[]>>;
};

const IpContext = createContext<IpContextType | undefined>(undefined);

function IpProvider({ children }: { children: React.ReactNode }) {
  const [IP, setIP] = useState<string>('');
  const { isLoading, locationInfo } = useMySearch({ query: IP });
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
    throw new Error('useIP must be used within an IpProvider');
  }
  return context;
}

export { IpProvider, useIP };

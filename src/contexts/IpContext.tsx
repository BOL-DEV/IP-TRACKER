import { createContext, useContext, useEffect, useState } from 'react';
import useGetIP from '../hooks/useGetIP';
import useMySearch from '../hooks/useMySearch';

type IpContextType = {
  IP: string;
  setIP: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  locationInfo: object; // Replace with actual location type when available.
};

const IpContext = createContext<IpContextType | undefined>(undefined);

function IpProvider({ children }: { children: React.ReactNode }) {
  const [IP, setIP] = useState<string>('');
  const { userIP } = useGetIP();
  const { isLoading, locationInfo } = useMySearch({ query: IP });

  useEffect(() => {
    setIP(userIP.ip);
  }, [userIP]);

  return (
    <IpContext.Provider value={{ IP, setIP, isLoading, locationInfo }}>
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

import "./App.css";
import TopLayout from './Layouts/TopLayout/TopLayout';
import MapLayout from './Layouts/MapLayout/MapLayout';
import { useIP } from './contexts/IpContext';
import useGetIP from './hooks/useGetIP';
import { useEffect } from 'react';

function App() {
  const userIP = useGetIP();
  const { setIP } = useIP();
  
  useEffect(() => {
    setIP(userIP.ip);
  }, [userIP, setIP]);
  return (
    <div className='container'>
      <TopLayout />
      <MapLayout />
    </div>
  );
}

export default App;

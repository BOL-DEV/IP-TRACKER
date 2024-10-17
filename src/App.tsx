import "./App.css";
import TopLayout from './Layouts/TopLayout/TopLayout';
import MapLayout from './Layouts/MapLayout/MapLayout';
import useGetIP from "./hooks/useGetIP";
import { useEffect, useState } from 'react';
import useMySearch from './hooks/useMySearch';

function App() {
  const [submittedIp, setSubmittedIp] = useState();
  const { IP } = useGetIP();
  const { getSearchIpLocation,locationInfo } = useMySearch();


  useEffect(() => {
    getSearchIpLocation(IP.ip);
  }, [IP]);

  return (
    <div className='container'>
      <TopLayout setSubmittedIp={setSubmittedIp} locationInfo={locationInfo}/>
      <MapLayout />
    </div>
  );
}

export default App;

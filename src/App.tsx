import "./App.css";
import TopLayout from './Layouts/TopLayout/TopLayout';
import MapLayout from './Layouts/MapLayout/MapLayout';
import { useEffect, useState } from 'react';
import useMySearch from './hooks/useMySearch';

function App() {
  const [submittedIp, setSubmittedIp] = useState('');
  const { getSearchIpLocation } = useMySearch();

  useEffect(() => {
    getSearchIpLocation(submittedIp);
  }, [submittedIp]);



  return (
    <div className='container'>
      <TopLayout setSubmittedIp={setSubmittedIp} />
      <MapLayout />
    </div>
  );
}

export default App;

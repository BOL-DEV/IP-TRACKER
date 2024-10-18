import { ChangeEvent, useState } from 'react';
import styles from './Search.module.css';
import { useIP } from '../../contexts/IpContext';

const Search = () => {
  const [searchIP, setSearchIP] = useState('');
  const { setIP } = useIP();

  const handleSubmit = function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIP(searchIP);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <h2>IP Address Tracker</h2>
      <label htmlFor='search'>
        <input
          type='search'
          name='search'
          placeholder='e.g 192.80.8.'
          value={searchIP}
          onChange={(e) => {
            setSearchIP(e.target.value);
          }}
        />
      </label>
      <button>{'>'}</button>
    </form>
  );
};

export default Search;

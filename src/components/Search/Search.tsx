import { ChangeEvent, useState } from 'react';
import styles from './Search.module.css';
import useMySearch from '../../hooks/useMySearch';

const Search = ({ setSubmittedIp }) => {
  const [searchIP, setSearchIP] = useState('');
  const { isLoading } = useMySearch();

  const handleSubmit = function (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmittedIp(searchIP);
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
          disabled={isLoading}
        />
      </label>
      <button disabled={isLoading}>{'>'}</button>
    </form>
  );
};

export default Search;

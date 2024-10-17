import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <h2>IP Address Tracker</h2>
      <label htmlFor='search'>
        <input type='search' name='search' placeholder='e.g 192.80.8.'/>
      </label>
      <button>{'>'}</button>
    </div>
  );
};

export default Search;

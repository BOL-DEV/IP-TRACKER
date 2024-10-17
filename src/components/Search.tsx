import styles from './Search.module.css';

const Search = () => {

  return (
    <div className={styles.wrapper}>
      <h2>IP Address Tracker</h2>
      <input type="search" />
      <button>{">"}</button>
    </div>
  );
};

export default Search;


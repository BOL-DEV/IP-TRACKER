import Output from "../components/Output";
import Search from "../components/Search";
import styles from "./TopLayout.module.css";

const TopLayout = () => {
  return (
    <div className={styles.container}>
      <div>
        <Search />
        <Output/>
      </div>
    </div>
  );
};

export default TopLayout;

import Output from '../../components/Output/Output';
import Search from '../../components/Search/Search';
import styles from './TopLayout.module.css';

const TopLayout = ({setSubmittedIp}) => {
  return (
    <div className={styles.container}>
      <div>
        <Search setSubmittedIp={setSubmittedIp} />
        <Output />
      </div>
    </div>
  );
};

export default TopLayout;

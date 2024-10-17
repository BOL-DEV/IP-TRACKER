import Output from '../../components/Output/Output';
import Search from '../../components/Search/Search';
import styles from './TopLayout.module.css';

const TopLayout = ({ setSubmittedIp, locationInfo }) => {
  return (
    <div className={styles.container}>
      <div>
        <Search setSubmittedIp={setSubmittedIp} />
        <Output locationInfo={locationInfo} />
      </div>
    </div>
  );
};

export default TopLayout;

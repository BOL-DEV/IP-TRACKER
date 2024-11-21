import { useIP } from '../../hooks/useIP';
import styles from "./Output.module.css";

const Output = () => {
  const { isLoading, locationInfo } = useIP();

  const { ip, city, org: isp, timezone } = locationInfo || {};

  return (
    <div className={styles.wrapper}>
      <Text title='IP ADDRESS' data={isLoading ? 'loading...' : ip} />
      <hr />
      <Text title='LOCATION' data={isLoading ? 'loading...' : city} />
      <hr />
      <Text title='TIMEZONE' data={isLoading ? 'loading...' : timezone} />
      <hr />
      <Text
        title='ISP'
        data={isLoading ? 'loading...' : `${isp.slice(0, 20)}...`}
      />
    </div>
  );
};

interface TextProps {
  title: string;
  data: string;
}

const Text = ({ title, data }: TextProps) => {
  return (
    <div className={styles.text}>
      <p>{title}</p>
      <h3>{data}</h3>
    </div>
  );
};

export default Output;

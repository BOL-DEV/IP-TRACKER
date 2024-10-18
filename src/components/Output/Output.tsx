import { useIP } from '../../contexts/IpContext';
import styles from './Output.module.css';

const Output = () => {
  const { isLoading, locationInfo } = useIP();

  const { ip, location, isp } = locationInfo;

  return (
    <div className={styles.wrapper}>
      <Text title='IP ADDRESS' data={isLoading ? 'loading...' : ip} />
      <hr />
      <Text title='LOCATION' data={isLoading ? 'loading...' : location.city} />
      <hr />
      <Text
        title='TIMEZONE'
        data={isLoading ? 'loading...' : location.timezone}
      />
      <hr />
      <Text title='ISP' data={isLoading ? 'loading...' : isp} />
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

import styles from './Output.module.css';

const Output = () => {
  return (
    <div className={styles.wrapper}>
      <Text title='IP ADDRESS' data='' />
      <hr />
      <Text title='LOCATION' data='' />
      <hr />
      <Text title='TIMEZONE' data='' />
      <hr />
      <Text title='ISP' data='' />
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

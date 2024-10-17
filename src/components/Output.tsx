import styles from "./Output.module.css";

const Output = () => {
  return (
    <div className={styles.wrapper}>
      <Text title="IP ADDRESS" data="132.212.222.101" />
      <hr />
      <Text title="LOCATION" data="OKOKO" />
      <hr />
      <Text title="TIMEZONE" data="WES 24" />
      <hr />
      <Text title="ISP" data="Space X Starlink" />
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

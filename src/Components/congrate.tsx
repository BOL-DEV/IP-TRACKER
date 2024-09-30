import styles from './congrate.module.css';

const Congrate = () => {
  return (
    <div className={styles.container}>
      <img src="../assets/images/icon-thank-you.svg" alt="thanksU" />
      <h1>Thank you!</h1>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platforms. If you ever need support, please feel free to emailus at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default Congrate;

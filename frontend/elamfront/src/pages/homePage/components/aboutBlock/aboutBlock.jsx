import styles from "./aboutBlock.module.css";
import AboutItem from "./components/AboutItem";

const AboutBlock = ({}) => {
  const useInfo = [
    {
      name: "Awareness-raising",
      content:
        "The site can help potential buyers and property owners make more informed decisions.",
    },
    {
      name: "Risk mitigation",
      content:
        "The site can help reduce the risks associated with buying property in earthquake-prone and/or unfavourable climatic conditions.",
    },
    {
      name: "Increasing market transparency",
      content:
        "The site can increase the transparency of the property market by providing access to information on the reliability of properties.",
    },
  ];

  return (
    <section className={styles.aboutBlock}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.itemWrapper}>
            <h1>Who we are?</h1>
            <p>We are young company for finding homes in save places</p>
          </div>

          <div className={styles.itemWrapper}>
            <h1>Our Mission</h1>
            <p>
              ELAM's mission is to empower individuals with seismic intelligence
              for informed housing decisions. Using advanced technology, we
              provide accessible insights into seismic risks, fostering global
              resilience and peace of mind.
            </p>
          </div>

          <div className={styles.itemWrapper}>
            <h1>Our Usefulness</h1>
            <div className={styles.itemList}>
              {useInfo.map((data) => (
                <AboutItem name={data.name} content={data.content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;

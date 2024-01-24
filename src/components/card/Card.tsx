import styles from "../card/Card.module.css";

const Card = ({ title, price, storage, users, sendUp }) => {
  return (
    <div className={styles.cardsContent}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div className={styles.cardContent}>
          <p>{storage}</p>
          <p>{users}</p>
          <p>{sendUp}</p>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Card;

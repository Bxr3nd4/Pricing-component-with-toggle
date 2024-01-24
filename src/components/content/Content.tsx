import styles from "./Content.module.css";
import Card from "../card/Card";

function Content() {
  return (
    <>
      <div className={styles.cards}>
        <Card
          title="Basic"
          price="$19.99"
          storage="500 GB Storage"
          users="2 Users Allowed"
          sendUp="Send up to 3 GB"
        />
        <Card
          title="Profesional"
          price="$24.99"
          storage="1 TB Storage"
          users="  5 Users Allowed"
          sendUp="Send up to 10 GB"
        />
        <Card
          title="Master"
          price="$39.99"
          storage="2 TB Storage"
          users="10 Users Allowed"
          sendUp="Send up to 20 GB"
        />
      </div>
    </>
  );
}

export default Content;

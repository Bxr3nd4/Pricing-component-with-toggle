import styles from "./Header.module.css"
import Toggle from "../toggle/Toggle"

function Header() {
  return (
    <>
      <h1 className={styles.title}> Our Pricing</h1>
      <Toggle />
    </>
  );
}

export default Header;

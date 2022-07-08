import { h } from "preact";
import Styles from "./styles.module.scss";

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} David Celis
      {/* <small className={Styles.byline}></small> */}
    </footer>
  );
}
export default Footer;

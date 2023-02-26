import styles from "../styles/Footer.module.scss";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineCodeSandbox,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "gray" }}>
      <div className={styles.footerRow}>
        <p>Created and Designed by Daniel Coder</p>
      </div>
      <nav className={styles.footerRow}>
        <a>
          <AiFillGithub />
        </a>
        <a>
          <AiFillLinkedin />
        </a>
        <a>
          <AiOutlineCodeSandbox />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;

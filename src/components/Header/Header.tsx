import { useState } from "react";
import Image from "next/image";
import Nav from "../Nav/Nav";
import styles from "./Header.module.scss";
import logo from "../../assets/shared/logo.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image src={logo} alt="logo" layout="responsive" />
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className={`btn ${styles.navBtn}`}
      >
        <Image
          src={hamburger}
          alt="Navigation toggle button"
          layout="responsive"
        />
      </button>
      <Nav closeMenu={() => setIsOpen(false)} open={isOpen} />
    </header>
  );
};

export default Header;

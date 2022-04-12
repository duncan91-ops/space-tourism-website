import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.scss";
import closeBtn from "../../assets/shared/icon-close.svg";

type NavProps = {
  open: boolean;
  closeMenu: () => void;
};

const Nav = ({ open, closeMenu }: NavProps) => {
  const listRef = useRef<HTMLUListElement>(null!);

  useEffect(() => {
    listRef.current.querySelectorAll(".link").forEach((item) => {
      item.addEventListener("click", closeMenu);
    });
  });

  return (
    <nav className={`${styles.nav} ${open && styles.navOpen}`}>
      <div className={styles.top}>
        <button onClick={closeMenu} className={`btn ${styles.closeBtn}`}>
          <Image src={closeBtn} alt="close menu button" layout="fill" />
        </button>
      </div>
      <ul ref={listRef} className={styles.items}>
        <li className={styles.item}>
          <Link href="/">
            <a className="link">
              <span className={styles.number}>00</span>Home
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/destination/moon">
            <a className="link">
              <span className={styles.number}>01</span>Destination
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/crew/commander">
            <a className="link">
              <span className={styles.number}>02</span>Crew
            </a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/technology/launch-vehicle">
            <a className="link">
              <span className={styles.number}>03</span>Technology
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

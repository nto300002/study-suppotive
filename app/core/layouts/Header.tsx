import { BlitzLayout } from "blitz"
import { Link } from "blitz"
import styles from "./styles/Header.module.scss"

const Header: BlitzLayout = () => {
  return (
    <>
      <nav className={styles.headerNav}>
        <ul className={styles.headerUl}>
          <li className={styles.headerLl}>
            <Link href="/">
              <a className={styles.headerHref}>home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className={styles.headerHref}>home</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header

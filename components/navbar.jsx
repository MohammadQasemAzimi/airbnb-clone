import Link from "next/link"
import styles from "../styles/Navbar.module.css";

export default function Component() {

  return (
    <nav className={styles.navbar}>
      <div className={styles.navlink}>
        <Link href={`/`}>
          <img className={styles.navlogo} src="https://miro.medium.com/max/1400/0*NChTo-XqLOxLabIW"></img>
        </Link>
      </div>
      <h2 className={styles.brand2}>La Mia Torta</h2>
      <div className={styles.search}>

        <div>
          <input type="text" placeholder="Search . . ." required />
        </div>
      </div>

      <div className={styles.navlink}>
        <Link href={`/signIn`}>
          <img className={styles.navsignin} src="https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"></img>
        </Link>
      </div>
    </nav>
  )
}




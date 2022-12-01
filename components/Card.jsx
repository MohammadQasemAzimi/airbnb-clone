import Link from "next/link"
import styles from "../styles/Home.module.css"

export default function Component({flat}) {
 
 console.log(flat.description,flat.locaiton)
  return (
    <Link href={`/${flat.id}`}>
      <div className={styles.card} >
        <h6>{flat.description}</h6>
        <h6>{flat.locaiton}</h6>
      </div>
    </Link>
  )
}
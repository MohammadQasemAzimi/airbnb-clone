import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Component({flat}) {
 console.log('image url is ',flat.imageurl)
  return (
    <Link href={`/flats/${flat.id}`}>
      <div className={styles.card} >
        <h6>{flat.description}</h6>
        <h6>{flat.locaiton}</h6>
        <h6>{`Falt No. ${flat.codeNo}`} {` Price ${flat.price}$ For Night`}</h6>
      </div>
    </Link>
  )
}
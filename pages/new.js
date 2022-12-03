import styles from '../styles/NewFlat.module.css'
import ImageUpload from "../components/imageUpload"
import Link from 'next/link'
import Navbar from '../components/navbar'

export default function NewFlat(props) {
  const flats = props.flat
  return (
  <>
    <Navbar></Navbar>
    <div className={styles.container}>
      <Link href="/">back</Link>
      <div className={styles.row}>
        <h1>Create new Flats</h1>
      </div>
      <form method="POST" action="/api/flat/new">
        <label htmlFor="title">title:</label><br />
        <input type="text" id="title" name="title" /><br />
        <label htmlFor="description">description:</label><br />
        <input type="text" id="description" name="description" /><br /><br />
        <label htmlFor="location">location:</label><br />
        <input type="text" id="location" name="location" /><br /><br />
        <label htmlFor="price">price:</label><br />
        <input type="Number" id="price" name="price" /><br /><br />
        <label htmlFor="codeNo">codeNo:</label><br />
        <input type="number" id="codeNo" name="codeNo" /><br /><br />
        <ImageUpload />
        <input type="submit" value="Submit" /><br />
      </form>
    </div>
  </>
  )
}
import styles from '../styles/NewFlat.module.css'
import ImageUpload from "../components/imageUpload"
import Navbar from '../components/navbar'
import { Input } from 'reactstrap'

export default function NewFlat(props) {
  const flats = props.flat
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>Create <a href="../new">a New Flat</a></h2>
            <div className={styles.cardBody}>
              <form method="POST" action="/api/flat/new">
                <div className={styles.formGroup}>
                  <label htmlFor="title" className={styles.label}>Title:</label><br />
                  <Input type="text" name='title' className={styles.formControl} id="title" placeholder="Title" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="description" className={styles.label}>description:</label><br />
                  <Input type="text" name='description' className={styles.formControl} id="description" placeholder="Description" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="location" className={styles.label}>location:</label><br />
                  <Input type="text" name="location" className={styles.formControl} id="location" placeholder="Location" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="price" className={styles.label}>Price:</label><br />
                  <Input type="number" name="price" className={styles.formControl} id="price" placeholder="Price" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="codeNo" className={styles.label}>Code Number:</label><br />
                  <Input type="number" name="codeNo" className={styles.formControl} id="codeNo" placeholder="Code Number" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="imgUploud" className={styles.label}>Uploud image:</label><br />
                  <ImageUpload type="file" name="imgUploud" className={styles.formControl} id="imgUploud" />
                </div>
                <br />
                <div lassName={styles.formGroup}>
                  <input type="submit" className={styles.btn} value="Submit" /><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
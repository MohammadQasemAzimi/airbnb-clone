import styles from '../../styles/Home.module.css'
import flatsController from '../../controllers/flatsController'
import Navbar from '../../components/navbar'

export default function selectOne(props) {
    const flats = props.flat
    console.log(flats)

  return (
    <>
      <Navbar></Navbar>
    <div className={styles.container1}>
        <div className={styles.box1}>Image 1</div>
        
    </div>

    <div className={styles.container2}>
        <div className={styles.box3}>flat details
          <h5>{flats.title}</h5>
          <h6>{flats.description}</h6>
          <h6>{flats.location}</h6>
          <h6>{flats.codeNo}</h6>
          <h6>{flats.price}</h6>
        </div>

        
        <div className={styles.box4}>
          <h5>$150 per Night</h5>
          <button type="button" class="btn btn-primary">Reserve</button>
        </div>
    </div>

    </>
     
  )
}

export async function getServerSideProps(req, res) {
  const { id } = req.query
  const flat = await flatsController.find(id)
  return {
    props: { flat },
  }
}

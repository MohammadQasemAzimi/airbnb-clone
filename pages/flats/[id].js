import styles from  '../../styles/Home.module.css'
import flatsController from '../../controllers/flatsController'
//import Navbar from '../../components/navbar'

export default function selectOne(props) {
  const flats = props.flat

  return (
    <>      
      <div class={styles.container}>
        <div class="child">Flat Image</div>
        <div class="child">Owner Details</div>
        <div class="child" >Flat details
          <h5>{flats.title}</h5>
          <h6>{flats.description}</h6>
          <h6>{flats.location}</h6>
          <h6>{flats.codeNo}</h6>
          <h6>{flats.price}</h6>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const { id } = req.query
  const flat = await flatsController.find(id)
  try {
    return {
      props: { flat },
    }
  } catch (error) {
    console.log(error)
    /* res.status(400).json('record not found by id') */
  }
  
}

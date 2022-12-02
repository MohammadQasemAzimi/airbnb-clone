import styles from  '../../../styles/Home.module.css'
import flatsController from '../../../controllers/flatsController'
import Card from '../../../components/Card'
//import Navbar from '../../components/navbar'

export default function selectBookedFlats(props) {
  const flats = props.bookedFlat

  return (     
      <div class={styles.container}>
        {flats.map(flat => (<Card flat={flat} key={flat.id} />))}
      </div>
  )
}

export async function getServerSideProps(req, res) {
  const { userId } = req.query
  const bookedFlat = await flatsController.findUserFlats(userId)
  try {
    return {
      props: { bookedFlat },
    }
  } catch (error) {
    console.log(error)
  }
  
}

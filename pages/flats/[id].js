import styles from  '../../styles/Home.module.css'
import flatsController from '../../controllers/flatsController'
import Image from 'next/image'
//import Navbar from '../../components/navbar'

export default function selectOne(props) {
  const flat = props.flat

  return (
    <>      
      <div class={styles.container}>
        <div class="child">
          <Image src={flat.imageurl} width='500' height='500' alt=''/>
        </div>
        <div class="child">Owner Details</div>
        <div class="child" >Flat details
          <h5>{flat.title}</h5>
          <h6>{flat.description}</h6>
          <h6>{flat.location}</h6>
          <h6>{flat.codeNo}</h6>
          <h6>{flat.price}</h6>
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

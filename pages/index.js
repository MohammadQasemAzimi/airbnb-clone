import flatsController from '../controllers/flatsController'
import Card from '../components/Card'
export default function Home(props) {

  //console.log('result of props is ', props);
  const flats = props.flats;
  return (
    <>
      <h1>Empty Next App</h1>
      {
      flats.map(flat => (
      <Card flat={flat} key={flat.id}/>
      ))
      }      
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flats = await flatsController.all();
  return {
    props: { flats },
  }
 }
 
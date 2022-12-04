import bookingController from '../../controllers/bookingController'
import styles from '../../styles/Home.module.css'
import Card from '../../components/Card'
import flatsController from '../../controllers/flatsController'
//import Navbar from '../../components/navbar'
export default function selectOne(props) {

    const vistorBookings = props.bookings
    console.log(vistorBookings)
    console.log(props)
    return (
     
        <div>
            {vistorBookings.map(vistorBooking => (
                <h2 key={vistorBooking.id} >userId: {vistorBooking.UserId}, FlatId: {vistorBooking.FlatId}</h2>

            ))}
        </div>
       
        
    )
}
export async function getServerSideProps(req, res) {
    // see all the bookings of one vistors
    // get the vistor Id 
    // get all the booking with the vistor ID 
    const vistorID = 1
    const bookings = await bookingController.findVistorBookings(vistorID)
    //const bookings = await flatsController.findUserFlats(vistorID)
    return {
        props: { bookings },
    }



}

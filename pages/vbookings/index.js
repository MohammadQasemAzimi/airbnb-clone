import BookingController from "../../controllers/bookingController"
import flats from "../../database/models/flats"
export default function Home({flat}){

    return (
        <>
        {flat.map(item => {
           return <h2>Id: {item.id}</h2>
        }
        )}
        </>
    )
}

export async function getServerSideProps(req, res) {
    const flat = await BookingController.allBookings()
    return {
      props: { flat },
    }
  }
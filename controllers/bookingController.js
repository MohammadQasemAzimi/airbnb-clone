import db from '../database'

const BookingController = {
  all: async () => {
    const booking = await db.Bookings.findAll()
    const parsedBook = JSON.parse(JSON.stringify(booking))
    return parsedBook
  },
  findVistorBookings: async (id) => {
    const data= await db.Bookings.findAll({where: {UserId: id}})
    const parsedBook = JSON.parse(JSON.stringify(data))
    return parsedBook
  }
}

export default BookingController

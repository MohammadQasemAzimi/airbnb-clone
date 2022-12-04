import db from '../database'
const BookingController = {
  create: async (data) => {
    console.log(db.models)
    const flat = await db.Bookings.create(data)
    return JSON.parse(JSON.stringify(flat))
  },
  allBookings: async () => {
    const booking = await db.Flats.findAll({
      include: {
        model: db.Bookings
      }
    })
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

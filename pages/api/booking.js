import bookingController from "../../controllers/bookingController"
export default async function handler(req, res) {
    // TODO take the title and description from the request body
    const {checkin, checkout, guest, FlatId } = req.body
/*     console.log(title, description, location, price, codeNo, image) */
    const flat = await bookingController.create({
        checkin, checkout, guest, FlatId
    })
    // the redirect metod sends the user to the specified path
    res.status(200).redirect(`/vbookings`);
  }
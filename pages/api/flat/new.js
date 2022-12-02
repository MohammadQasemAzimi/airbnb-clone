import flatController from "../../../controllers/flatController"
export default async function handler(req, res) {
    // TODO take the title and description from the request body
    const{title, description, location, price, codeNo, image} = req.body
/*     console.log(title, description, location, price, codeNo, image) */
    const flat = await flatController.create({
      title, description, location, price, codeNo, image
    })
    // the redirect metod sends the user to the specified path
    res.status(200).redirect(`/flats/${flat.id}`);
    
  }
  
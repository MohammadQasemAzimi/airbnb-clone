import flatController from "../../controllers/flatsController"
export default async function handler(req, res) {
    // TODO take the title and description from the request body
    const{title, description, location, price, codeNo, imageurl} = req.body
    const UserId = 1
     console.log(title, description, location, price, codeNo, imageurl)
    const flat = await flatController.create({
      title, description, location, price, codeNo, imageurl, UserId
    })
    // the redirect metod sends the user to the specified path
    res.status(200).redirect(`/`);
  }
  
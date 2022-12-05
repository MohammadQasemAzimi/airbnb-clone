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
<<<<<<< HEAD:pages/api/flat/new.js
    res.status(200).redirect(`/flats/${flat.id}`);
=======
    res.status(200).redirect(`/`);
>>>>>>> ddcf1c368b7be48fe89a7ed57abc6ad8368b45e1:pages/api/new.js
  }
  
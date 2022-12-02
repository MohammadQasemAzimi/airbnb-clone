import db from "../database"

 const flatController ={
create: async (data) => {
    console.log(db.models)
    const flat = await db.Flats.create(data)
    return JSON.parse(JSON.stringify(flat))
  }
 }
export default flatController
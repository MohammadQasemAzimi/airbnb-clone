import db from '../database'

const flatsController = {
  all: async () => {
    const flats = await db.Flats.findAll()
    const parsedFlats = JSON.parse(JSON.stringify(flats))
    return parsedFlats
  },
  find: async (id) => {
    const flat = await db.Flats.findByPk(id)
    const parsedFlat = JSON.parse(JSON.stringify(flat))
    return parsedFlat
  },
  findUserFlats: async(userId)=>{
    const userFlats = await db.Flats.findAll({where:{UserId:userId}})
    const parsedUserFlats = JSON.parse(JSON.stringify(userFlats))
    return parsedUserFlats
  }
}

export default flatsController

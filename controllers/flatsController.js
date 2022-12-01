import db from '../database'

const flatsController = {
  all: async () => {
    const flats = await db.Flats.findAll()
    const parsedFlats = JSON.parse(JSON.stringify(flats))
    return parsedFlats
  }
}

export default flatsController

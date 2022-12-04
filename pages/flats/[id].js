import styles from '../../styles/Select.module.css'
import flatsController from '../../controllers/flatsController'
import Navbar from '../../components/navbar'

export default function selectOne(props) {
  const flats = props.flat
  console.log(flats)

  return (
    <>
      <Navbar></Navbar>
      <div class={styles.somepagewrapper}>
        <div class={styles.row}>
          <div class={styles.column}>
            <div class={styles.orangecolumn}>
              <div className={styles.box1}>First orange</div>
            </div>
          </div>
          <div class={styles.column}>
            <div class={styles.bluecolumn}>
              <div className={styles.box2}>First Blue</div>
            </div>
            <div class={styles.bluecolumn2}>
              <div className={styles.box2}>Second Blue</div>
            </div>
          </div>
          <div class={styles.column}>
            <div class={styles.greencolumn}>
              <div className={styles.box3}>First green</div>
            </div>
            <div class={styles.greencolumn2}>
              <div className={styles.box3}>Second Green</div>
            </div>
          </div>
        </div>

        <div class={styles.row}>
          <div class={styles.column}>
            <div className={styles.blackcolumn}>
              <div className={styles.box6}>
                <h3>{flats.title}</h3>
                <h6>{flats.description}</h6>
                <h6>{flats.location}</h6>
                <h6>{flats.codeNo}</h6>
                <h6>{flats.price}</h6>
              </div>
            </div>
            <div className={styles.blackcolumn}>
              <div className={styles.box7}>
                <h3>Owner contact detiails:</h3>
                <h6>{flats.description}</h6>
                <h6>{flats.location}</h6>
                <h6>{flats.codeNo}</h6>
                <h6>{flats.price}</h6>
              </div>
            </div>
          </div>
          <div class={styles.column}>
            <div className={styles.reserveCard}>
              <div className={styles.box8}>
                <h4>You can book it</h4>
                <h6>Check in : 01/12/2022</h6>
                <h6>check out : 10/12/2022</h6>
                <h6>Number of guest: 1</h6>
                <button type="button" class={styles.reserveBtn}>Reserve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const { id } = req.query
  const flat = await flatsController.find(id)
  return {
    props: { flat },
  }
}

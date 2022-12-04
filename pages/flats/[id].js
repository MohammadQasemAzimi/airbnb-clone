import styles from '../../styles/Select.module.css'
import flatsController from '../../controllers/flatsController'
import Navbar from '../../components/navbar'
import { Input } from 'reactstrap'
export default function selectOne(props) {
  const flats = props.flat
  console.log('QaSEM', flats)

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
                <form method="POST" action="/api/booking">
                  <div className={styles.formGroup}>
                    <label htmlFor="checkinDate" className={styles.label}>Checkin Date:</label><br />
                    <Input type="date" name='checkin' className={styles.formControl} id="checkin" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="checkoutDate" className={styles.label}>Checkout Date:</label><br />
                    <Input type="date" name='checkout' className={styles.formControl} id="checkout" />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="guest" className={styles.label}>Guest Number:</label><br />
                    <Input type="number" name="guest" className={styles.formControl} id="guest" placeholder="Code Number" />
                  </div>
                  <input type="hidden" name="FlatId" value={flats.id}/>
                  <div lassName={styles.formGroup}>
                    <input type="submit" className={styles.btn} value="Submit" /><br />
                  </div>
                </form>
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

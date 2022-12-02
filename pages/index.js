import flatsController from '../controllers/flatsController'
import Card from '../components/Card'
import Head from 'next/head';

//import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Home(props) {

  //console.log('result of props is ', props);
  const flats = props.flats;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <Container>
        <Row>
          {flats.map((flat,index) => (<Col key={flat.id}><Card flat={flat} key={flat.id} /></Col>))}
        </Row>
      </Container>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flats = await flatsController.all();
  return {
    props: { flats },
  }
}

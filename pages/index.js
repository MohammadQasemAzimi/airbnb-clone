import flatsController from '../controllers/flatsController'
import Card from '../components/Card'
import Head from 'next/head';
import styles from '../styles/Home.module.css'

//import React from "react";

// reactstrap components

export default function Home(props) {

  //console.log('result of props is ', props);
  const flats = props.flats;
  return (
    <>
        <dev className={styles.cards}>
          {flats.map((flat,index) => (<h1 key={flat.id}><Card flat={flat} key={flat.id} /></h1>))}
        </dev>
    </>
  )
}

export async function getServerSideProps(req, res) {
  const flats = await flatsController.all();
  return {
    props: { flats },
  }
}

import { CONTRACT_ADDRESSES, ConnectWallet, Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import { NextPage } from "next";
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { useState } from "react"; // Import useState hook

import Web3 from 'web3';
import { contract } from "../const/contract";

const Home: NextPage = () => {
const { contract } =useContract("0x349F364FD5532C4649EB3A8aB539073f856286Ea");
// const {
//    data; 

// }=useContractWrite(contract, "donate()");


return (
 
    <div className={styles.container}>
      <Head>
        <title>CryptoPayer App</title>
        <meta
          content="Generated by @CryptoPayer"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectWallet />
       
          <div className={styles.buttoncontainer}>
          
          <Web3Button
          theme= "dark"
          contractAddress="0x349F364FD5532C4649EB3A8aB539073f856286Ea"
          action={(contract) => {
            contract.call("donate", [1])
          }}
        >
            
            Pay
          </Web3Button>

          </div>
       

        <h1 className={styles.title}>
          Welcome to <a href="">CryptoPayer</a>
        </h1>

        <p className={styles.description}>
        Start Accepting Crypto Payments NOW{' '}
         
        </p>

        <div className={styles.grid}>
          <a className={styles.card} href="https://nowpayments.io/supported-coins">
            <h2>300+ cryptocurrencies available &rarr;</h2>
            <p>Accept BTC, ETH and any other cryptocurrency of your choice</p>
          </a>

          <a className={styles.card} href="https://nowpayments.io/pricing">
            <h2>Only 0.5% – the lowest fee on the market &rarr;</h2>
            <p>Pay less our 0.5% fees are the lowest on the market</p>
          </a>

          <a
            className={styles.card}
            href="https://nowpayments.io/instant-payouts"
          >
            <h2>Withdraw euro directly to your bank account &rarr;</h2>
            <p>Receive your funds directly to your wallet - right away</p>
          </a>
          <p></p>
          <p></p>
          <a className={styles.card} href="https://nowpayments.io/premium-account-manager">
            <h2>Personal account manager & 24/7 support &rarr;</h2>
            <p>Your personal manager and 24/7 support will answer all your questions</p>
          </a>

        

      
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="cryptopayer.center" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by NOWPayments – 2024

        </a>
      </footer>
    </div>
  );
};
export default Home;

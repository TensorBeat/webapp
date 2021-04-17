import Head from "next/head";
import React, { Component } from "react";
import pageStyles from "../styles/page.module.css";
import StandardFooter from "./Components/standardFooter";

export default class Keyboard extends Component {
  render() {
    return (
      <div className={pageStyles.container}>
        <Head>
          <title>Keyboard - TensorBeat</title>
          <link rel="icon" href="favicon.io" />
        </Head>

        <StandardFooter />
      </div>
    );
  }
}

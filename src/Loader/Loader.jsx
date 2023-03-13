import React from "react";
import {Circles} from "react-loader-spinner";
import s from "./Loaderr.module.css";

const Loader = (props) => (
  <div className={s.spinner__backdrop}>
    <div className={s.spinner}>
     <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  </div>
);

Loader.metadata = {
  name: "RioF",
  github: "clariokids",
  description: "Three Dots",
  filename: "ThreeDots",
};

export default Loader;

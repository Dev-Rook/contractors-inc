import React from "react";
import Styles from "../Styles/Page-Styles/Landing/Landing.module.css";

import useAxios from "../Hook/useAxios";

const Landing = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  const { data, loading, error } = useAxios(url);

  return (
    <div>
      <div className={Styles.Content_Container}>
        {data &&
          data.map((item) => {
            return <div className={Styles.Card} key={item.id}>
              
            </div>;
          })}
      </div>
    </div>
  );
};

export default Landing;

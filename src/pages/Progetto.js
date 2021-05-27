import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const Progetto = ({ history, match, location }) => {
  /*console.log(history);
    console.log(match);
    console.log(location);*/
  const routerHistory = useHistory();
  const { param1 } = useParams();
  console.log(param1);
  useEffect(() => {
    changePage();
  }, []);
  const changePage = () => {
    if (Number(param1) > 3) {
      routerHistory.push("/");
    }
  };
  return (
    <div>
      <h2> Sono dentro il progetto {param1}</h2>
      {/*<button className='button' onClick={changePage}>
        Redirect to
  </button>*/}
    </div>
  );
};

export default Progetto;

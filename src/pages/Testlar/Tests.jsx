import React from "react";
import { useSelector } from "react-redux";
import { useTestsQuery } from "../../redux/TestApi.js";
import Testlar from "./Testlar.jsx";
import './Tests.css'

function Tests() {
  const { data, isSuccess } = useTestsQuery();
  const getRightAnswers = useSelector((state) => state.tests.rightAnswers);
  const getWrongAnswers = useSelector((state) => state.tests.wrongAnswers);

  return (
    <div className="Ts">
      <h1>Testlar</h1>
      <h1>
        {getRightAnswers} / {getWrongAnswers}
      </h1>
      <div className="Tests">
        {isSuccess &&
          data.map((item, index) => (
            <Testlar key={item.id} index={index} {...item} />
          ))}
      </div>
    </div>
  );
}

export default Tests;

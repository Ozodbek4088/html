import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRightAnswers, getWrongAnswers } from "../../redux/TestsSlice";
import InputTests from "./InputTests";
import { useDeleteTestMutation } from "../../redux/TestApi";

function Testlar({ question, id, variants, rightAnsver, index }) {
  const [chosenAnswer, setChosenAnswer] = useState("");
  const navigate = useNavigate();
  console.log(rightAnsver);
  const [deleteTest] = useDeleteTestMutation();
  const dispatch = useDispatch();
  const deleteTestHandler = () => {
    deleteTest(id);
  };
  const choseAnswerBtn = () => {
    if (!chosenAnswer) {
      alert("javob tanlamadingiz");
      return;
    }
    let result =
      chosenAnswer === rightAnsver ? "to`g`ri javob" : "noto`g`ri javob";
    alert(result);
  };
  return (
    <div className="Testlar">
      <h2>
        {index + 1}.{question}
      </h2>
      <br />
      <div className="variants">
        {variants.map((item, index) => (
          <InputTests
            key={item.id}
            index={index}
            item={item}
            id={id}
            setChosenAnswer={setChosenAnswer}
          />
        ))}
      </div>
      <div className="btns">
        <button onClick={choseAnswerBtn} className="tanlash">
          tanlash
        </button>
        <button onClick={deleteTestHandler} className="delete">
          delete
        </button>
        <button onClick={() => navigate(`/editTests/${id}`)} className="edit">
          edit
        </button>
      </div>
    </div>
  );
}

export default Testlar;

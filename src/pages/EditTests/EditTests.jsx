import React from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useTestItemDetailsQuery, useUpdateTestMutation } from "../../redux/TestApi";

function EditTests() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateTest] = useUpdateTestMutation();
  const { data, isSuccess } = useTestItemDetailsQuery(id);
  const [question, setQuestion] = useState("");
  const [variant1, setVariant1] = useState("");
  const [variant2, setVariant2] = useState("");
  const [variant3, setVariant3] = useState("");
  const [variant4, setVariant4] = useState("");
  const [rightAnswer, setrightAnswer] = useState("");

  const handleEditTask = async (e) => {
    e.preventDefault();
    const updatedTest = {
      question: question || data.question,
      variants: [
        variant1 || data.variants[0],
        variant2 || data.variants[1],
        variant3 || data.variants[2],
        variant4 || data.variants[3],
      ],
      rightAnswer: rightAnswer || data.rightAnswer,
      id,
    };
    await updateTest(updatedTest);
    navigate("/tests");
  };
  return (
    <div className="TestAdmin">
      <br />
      <form onSubmit={handleEditTask}>
        <br />
        <input
          defaultValue={isSuccess ? data.question : ""}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="input1"
          type="text"
          placeholder="test kiritring"
        />
        <h1>Variantlar:</h1>
        <div className="variants">
          <input
            defaultValue={isSuccess ? data.variants[0] : ""}
            onChange={(e) => setVariant1(e.target.value)}
            required
            type="text"
            placeholder="variant1"
          />
          <input
            defaultValue={isSuccess ? data.variants[1] : ""}
            onChange={(e) => setVariant2(e.target.value)}
            required
            type="text"
            placeholder="variant2"
          />
          <input
            defaultValue={isSuccess ? data.variants[2] : ""}
            onChange={(e) => setVariant3(e.target.value)}
            required
            type="text"
            placeholder="variant3"
          />
          <input
            defaultValue={isSuccess ? data.variants[3] : ""}
            onChange={(e) => setVariant4(e.target.value)}
            required
            type="text"
            placeholder="variant4"
          />
        </div>
        <h1>To`g`ri Javob</h1>
        <input
          defaultValue={isSuccess ? data.rightAnswer : ""}
          onChange={(e) => setrightAnswer(e.target.value)}
          required
          className="input1"
          type="text"
          placeholder="to`g`ri javobni kiriting"
        />
        <br />
        <button>Edit Tests</button>
      </form>
    </div>
  );
}

export default EditTests;

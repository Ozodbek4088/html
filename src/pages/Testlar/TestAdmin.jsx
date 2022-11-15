import React from "react";
import { useState } from "react";
import "./Tests.css";
import { useAddTestMutation } from "../../redux/TestApi";

function TestAdmin() {
  const [question, setQuestion] = useState("");
  const [variant1, setVariant1] = useState("");
  const [variant2, setVariant2] = useState("");
  const [variant3, setVariant3] = useState("");
  const [variant4, setVariant4] = useState("");
  const [rightAnswer, setrightAnswer] = useState("");

  const [addTest] = useAddTestMutation();

  const handleAddTask = async (e) => {
    e.preventDefault();
    const test = {
      question: question,
      variants: [variant1, variant2, variant3, variant4],
      rightAnswer: rightAnswer,
    };
    await addTest(test);
    alert("Test kiritildi!")
  };
  return (
    <div className="TestAdmin">
      <h1>Test kiriting</h1>
      <br />
      <form onSubmit={handleAddTask}>
        <br />
        <input
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="input1"
          type="text"
          placeholder="test kiritring"
        />
        <h1>Variantlar:</h1>
        <div className="variants">
          <input
            onChange={(e) => setVariant1(e.target.value)}
            required
            type="text"
            placeholder="variant1"
          />
          <input
            onChange={(e) => setVariant2(e.target.value)}
            required
            type="text"
            placeholder="variant2"
          />
          <input
            onChange={(e) => setVariant3(e.target.value)}
            required
            type="text"
            placeholder="variant3"
          />
          <input
            onChange={(e) => setVariant4(e.target.value)}
            required
            type="text"
            placeholder="variant4"
          />
        </div>
        <h1>To`g`ri Javob</h1>
        <input
          onChange={(e) => setrightAnswer(e.target.value)}
          required
          className="input1"
          type="text"
          placeholder="to`g`ri javobni kiriting"
        />
        <br />
        <button>Testni kiriting</button>
      </form>
    </div>
  );
}

export default TestAdmin;

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Result from "./Result";

const Question = (props) => {
   const [data, setData] = useState([]);
   const [answerColor, setAnswerColor] = useState("");
   const [wrongAnswerColor, setWrongAnswerColor] = useState("");
   const [score, setScore] = useState(0);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [disabled, setDisabled] = useState(false);
   const [answersArray, setAnswersArray] = useState(null);

   useEffect(() => {
      if (data.length > currentQuestion) {
         const ansArry = [
            data[currentQuestion].incorrect_answers[0],
            data[currentQuestion].incorrect_answers[1],
            data[currentQuestion].incorrect_answers[2],
            data[currentQuestion].correct_answer,
         ].sort(() => {
            return Math.random() - 0.5;
         });
         setAnswersArray(ansArry);
      }
   }, [data, currentQuestion]);
   console.log(data[currentQuestion]);

   useEffect(() => {
      fetch(
         `https://opentdb.com/api.php?amount=10&category=${props.category}&difficulty=${props.difficulty}&type=multiple`
      )
         .then((resp) => resp.json())
         .then((jsonResp) => {
            setData(jsonResp.results);
            // console.log(jsonResp.results);
         });
   }, []);

   const handleChange = () => {
      if (answerColor !== "") {
         setCurrentQuestion(currentQuestion + 1);
         setWrongAnswerColor("");
         setDisabled(false);
         setAnswerColor("");
      } else alert("Please Select An Answer");
   };

   const handleClick = (e) => {
      //   setDisabled(true);
      CheckAnswer(e.target.value);
   };

   const CheckAnswer = (answer) => {
      answer === data[currentQuestion].correct_answer && setScore(score + 1);
      setAnswerColor("correct-answer");
      setWrongAnswerColor("wrong-answer");
   };

   return (
      <>
         {data.length === 0 ? (
            <h1
               style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "10rem auto",
               }}
            >
               Loading...
            </h1>
         ) : data.length > currentQuestion ? (
            <DivElement>
               <h2
                  dangerouslySetInnerHTML={{
                     __html: data[currentQuestion].question,
                  }}
               ></h2>
               {answersArray !== null && (
                  <>
                     <button
                        disabled={disabled}
                        className={
                           answersArray[0] ===
                           data[currentQuestion].correct_answer
                              ? answerColor
                              : wrongAnswerColor
                        }
                        onClick={handleClick}
                        value={answersArray[0]}
                        dangerouslySetInnerHTML={{
                           __html: answersArray[0],
                        }}
                     ></button>
                     <button
                        disabled={disabled}
                        className={
                           answersArray[1] ===
                           data[currentQuestion].correct_answer
                              ? answerColor
                              : wrongAnswerColor
                        }
                        onClick={handleClick}
                        value={answersArray[1]}
                        dangerouslySetInnerHTML={{
                           __html: answersArray[1],
                        }}
                     ></button>

                     <button
                        disabled={disabled}
                        onClick={handleClick}
                        className={
                           answersArray[2] ===
                           data[currentQuestion].correct_answer
                              ? answerColor
                              : wrongAnswerColor
                        }
                        value={answersArray[2]}
                        dangerouslySetInnerHTML={{
                           __html: answersArray[2],
                        }}
                     ></button>
                     <button
                        disabled={disabled}
                        onClick={handleClick}
                        value={answersArray[3]}
                        className={
                           answersArray[3] ===
                           data[currentQuestion].correct_answer
                              ? answerColor
                              : wrongAnswerColor
                        }
                        dangerouslySetInnerHTML={{
                           __html: answersArray[3],
                        }}
                     ></button>
                  </>
               )}
               <button onClick={handleChange}>Next Question</button>
            </DivElement>
         ) : (
            <Result
               fullName={props.fullName}
               difficulty={props.difficulty}
               category={props.category}
               score={score}
            />
         )}
      </>
   );
};

export default Question;

const DivElement = styled.div`
   display: flex;
   justify-content: center;
   width: 700px;
   background-color: #c4bacf;
   animation: fadein 1s;
   padding: 1rem;
   text-align: center;
   border-radius: 20px;
   box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
   align-items: center;
   flex-direction: column;
   margin: 3rem auto;
   & h2 {
      font-size: 1.4rem;
      margin: 1rem 0 1.5rem 0;
   }
   .wrong-answer {
      background-color: #ff6767;
      opacity: 0.6;
      transform: scale(0.9);
   }
   .correct-answer {
      background-color: #83c283;
      transform: scale(1.1);
      font-size: 1.1rem;
   }

   & button {
      border: none;
      margin: 0.5rem 0;
      border-radius: 25px;
      width: 50%;
      background-color: #fafafa;
      padding: 1rem;
      transition: 0.1s linear;
      cursor: pointer;
      letter-spacing: 0.6px;
      font-weight: bold;
      &:disabled {
         color: #444;
      }
      &:last-of-type {
         background-color: #f0be62;
         width: 40%;
         font-size: 1.3rem;
         padding: 1rem 0;
      }
   }
   @keyframes fadein {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`;

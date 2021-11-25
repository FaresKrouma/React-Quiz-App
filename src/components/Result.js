import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";
import Form from "./Form";

const Result = (props) => {
   const [isOver, setIsOver] = useState(false);
   const [isContinue, setIsContinue] = useState(false);
   const handleContinue = () => setIsContinue(!isContinue);
   const handleOver = () => setIsOver(!isOver);

   const categoryNames = {
      9: "General Knowledge",
      27: "Animals",
      28: "Vehicles",
      15: "Video Games",
      12: "Music",
      10: "Books",
      14: "TV Shows",
      25: "Art",
      23: "History",
      11: "Movies",
      26: "Celebrities",
      20: "Mythology",
      17: "Science And Nature",
   };

   return (
      <React.Fragment>
         {isOver ? (
            <Form />
         ) : isContinue ? (
            <Question
               category={props.category}
               difficulty={props.difficulty}
               fullName={props.fullName}
            />
         ) : (
            <DivElement>
               <h1>
                  Your Name :<span> {props.fullName}</span>
               </h1>
               <h2>
                  Difficulty: <span>{props.difficulty}</span>
               </h2>
               <h2>
                  category: <span>{categoryNames[props.category]}</span>
               </h2>
               <h1>
                  Score :{" "}
                  <span>
                     {props.score}/10{" "}
                     {props.score > 6 ? "🔥" : props.score < 4 ? "😥" : "😕"}
                  </span>
               </h1>
               <div className="button-container">
                  <button onClick={handleOver}>Play Again</button>
                  <button onClick={handleContinue}>Continue..?</button>
               </div>
            </DivElement>
         )}
      </React.Fragment>
   );
};

export default Result;

const DivElement = styled.div`
   display: flex;
   box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
   border-radius: 15px;
   letter-spacing: 1px;
   animation: fadein 0.5s;
   justify-content: center;
   align-items: center;
   margin: 5rem auto;
   text-transform: capitalize;
   color: #222;
   background-color: #efefee;
   padding: 1rem 3rem;
   width: fit-content;
   flex-direction: column;
   & > * {
      margin: 1rem 0;
   }
   & span {
      color: #666;
   }
   .button-container button {
      border: none;
      margin: 0 1rem;
      background-color: tomato;
      letter-spacing: 1.3px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: bold;
      padding: 1rem 2rem;
      border-radius: 15px;
      &:last-of-type {
         background-color: #51b867;
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

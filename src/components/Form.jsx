import React, { useState } from "react";
import styled from "styled-components";
import Question from "./Question";

function Form() {
   const [isVisible, setIsVisible] = useState(true);
   const [fullName, setFullName] = useState("");
   const [difficulty, setDifficulty] = useState("");
   const [category, setCategory] = useState("");

   const url = {
      fullName: fullName,
      difficulty: difficulty,
      category: category,
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      fullName && difficulty && category
         ? setIsVisible(false)
         : alert("Please Select From Input😊");
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(url);
      if (name === "fullName") return setFullName(value);
      if (name === "difficulty") return setDifficulty(value);
      if (name === "category") return setCategory(value);
   };
   return isVisible ? (
      <>
         <FormElement onSubmit={handleSubmit}>
            <label className="fullName">
               Full Name :
               <input
                  type="text"
                  name="fullName"
                  autoComplete="off"
                  maxLength="15"
                  placeholder="Maximum 15 Characters"
                  value={fullName}
                  onChange={handleChange}
               />
            </label>

            <div className="difficulty">
               Difficulty :
               <div>
                  <label style={{ color: "green" }}>
                     <input
                        type="radio"
                        name="difficulty"
                        value="easy"
                        onChange={handleChange}
                     />
                     Easy
                  </label>
                  <label style={{ color: "orange" }}>
                     <input
                        type="radio"
                        value="medium"
                        name="difficulty"
                        onChange={handleChange}
                     />
                     Medium
                  </label>
                  <label style={{ color: "red" }}>
                     <input
                        type="radio"
                        name="difficulty"
                        value="hard"
                        onChange={handleChange}
                     />
                     Hard
                  </label>
               </div>
            </div>
            <label>
               Category :
               <select name="category" onChange={handleChange} value={category}>
                  <option> Select One Category </option>
                  <option value="9">General Knowledge</option>
                  <option value="11">Movies</option>
                  <option value="26">Celebrities</option>
                  <option value="20">Mythology</option>
                  <option value="17">Science And Nature</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                  <option value="15">Video Games</option>
                  <option value="12">Music</option>
                  <option value="10">Books</option>
                  <option value="14">TV Shows</option>
                  <option value="25">Art</option>
                  <option value="23">History</option>
               </select>
            </label>

            <button onSubmit={handleSubmit}>Start Quiz</button>
         </FormElement>
      </>
   ) : (
      <Question {...url} />
   );
}
export default Form;

const FormElement = styled.form`
   width: 500px;
   letter-spacing: 1px;
   margin: 5rem auto;
   background-color: #fff;
   border-radius: 10px;
   box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.1);
   color: #777;
   padding: 2rem 0 0 0;
   font-size: 1.4rem;
   height: fit-content;
   display: flex;
   flex-direction: column;
   animation: fadein 0.5s;
   justify-content: center;
   align-items: center;
   text-align: center;
   & > * {
      margin-bottom: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      &:last-child {
         margin-bottom: 0;
      }
   }
   & * input,
   * select {
      margin: 0 0.5rem;
      padding: 2.5px 5px;
      font-weight: 500;
      text-transform: capitalize;
      font-size: 1rem;
      &::placeholder {
         font-size: 0.9rem;
         text-align: center;
      }
   }
   .difficulty {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
   }
   & button {
      width: 100%;
      border-radius: 5px;
      cursor: pointer;
      padding: 1rem;
      font-size: 1.8rem;
      border: none;
      letter-spacing: 3px;
      background-color: tomato;
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

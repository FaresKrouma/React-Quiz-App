// import React from "react";
// import Quiz from "./component/Quiz";
// import quizData from "./component/quizData";

// const App = () => {
//   const quizArray = quizData.map((element) => (
//     <Quiz key={element.question} data={element} />
//   ));

//   return [quizArray];
// };

// export default App;

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          loggedIn: true,
//       };
//       this.handleClick = this.handleClick.bind(this);
//    }

//    handleClick = () => {
//       this.setState((prevState) => {
//          return {
//             loggedIn: !prevState.loggedIn,
//          };
//       });
//    };

//    render() {
//       return (
//          <>
//             <div>
//                you are currently logged {this.state.loggedIn ? "in" : "out"}
//             </div>
//             <button onClick={this.handleClick}>
//                {this.state.loggedIn ? "Log Out" : "Log In"}
//             </button>
//          </>
//       );
//    }
// }
// export default App;

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          character: {},
//       };
//    }

//    componentDidMount() {
//       fetch("https://swapi.dev/api/people/1")
//          .then((res) => res.json())
//          .then((data) => {
//             console.log(data);
//             this.setState({ character: data });
//          });
//    }

//    render() {
//       const text = !this.state.character.name
//          ? "Loading.."
//          : "hello " + this.state.character.name;

//       return (
//          <div>
//             <p> {text}</p>
//          </div>
//       );
//    }
// }

// export default App;

// class App extends React.Component {
//    constructor() {
//       super();
//       this.state = {
//          firstName: "",
//          lastName: "",
//          age: "",
//          location: "",
//          gender: "",
//          isVegan: false,
//          isRich: false,
//       };
//       this.handleSubmit = this.handleSubmit.bind(this);
//       this.handleChange = this.handleChange.bind(this);
//    }

//    handleChange = (e) => {
//       const { value, name, checked, type } = e.target;
//       type === "checkbox"
//          ? this.setState({ [name]: checked })
//          : this.setState({ [name]: value });
//    };

//    handleSubmit = (e) => {
//       e.preventDefault();
//       //   const fullName = this.state.firstName + this.state.lastName;
//       this.setState({
//          displayValue: `${this.state.firstName} ${this.state.lastName}`,
//       });
//    };

//    render() {
//       return (
//          <form>
//             <h3>Personal Info :</h3>
//             <label>
//                First Name :
//                <input
//                   autoComplete="off"
//                   name="firstName"
//                   onChange={this.handleChange}
//                   type="text"
//                   placeholder="enter your name"
//                   onKeyDown={(e) => {
//                      if (e.key === "Enter") return this.handleSubmit(e);
//                   }}
//                   value={this.state.firstName}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                />
//             </label>
//             <br />
//             <label>
//                Last Name :
//                <input
//                   autoComplete="off"
//                   onKeyDown={(e) => {
//                      if (e.key === "Enter") return this.handleSubmit(e);
//                   }}
//                   name="lastName"
//                   onChange={this.handleChange}
//                   type="text"
//                   placeholder="enter your name"
//                   value={this.state.lastName}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                />
//             </label>
//             <br />
//             <label>
//                Age :
//                <input
//                   type="number"
//                   placeholder="enter your age"
//                   onChange={this.handleChange}
//                   autoComplete="off"
//                   value={this.state.age}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                   name="age"
//                />
//             </label>
//             <br />
//             <h3>Gender :</h3>
//             <label>
//                <input
//                   type="radio"
//                   autoComplete="off"
//                   value="male"
//                   onChange={this.handleChange}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                   name="gender"
//                   checked={this.state.gender === "male"}
//                />
//                Male
//             </label>
//             <br />
//             <label>
//                <input
//                   type="radio"
//                   autoComplete="off"
//                   onChange={this.handleChange}
//                   value="female"
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                   checked={this.state.gender === "female"}
//                   name="gender"
//                />
//                Female
//             </label>
//             <br />
//             <h3>Location :</h3>
//             <select
//                onChange={this.handleChange}
//                value={this.state.location}
//                name="location"
//             >
//                <option value="germany">Germany</option>
//                <option value="Syria">Syria</option>
//                <option value="Lebanon">Lebanon</option>
//                <option value="Aleppo">Aleppo</option>
//             </select>
//             <br />
//             <h3>Health and Wealth :</h3>
//             <label>
//                <input
//                   type="checkbox"
//                   onChange={this.handleChange}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                   name="isVegan"
//                   checked={this.state.isVegan}
//                />
//                Vegan ?
//             </label>
//             <br />
//             <label>
//                <input
//                   checked={this.state.isRich}
//                   type="checkbox"
//                   onChange={this.handleChange}
//                   style={{ margin: "0.5rem 0.5rem", padding: "2px 5px" }}
//                   name="isRich"
//                />
//                Rich ?
//             </label>
//             <h1>{`Welcome Mr.${
//                this.state.firstName + " " + this.state.lastName
//             }, ${this.state.age} Years Old, From ${this.state.location} , ${
//                this.state.gender
//             } ${this.state.isVegan ? "And Vegan" : ""} ${
//                this.state.isRich ? "And Rich" : ""
//             }`}</h1>
//          </form>
//       );
//    }
// }

// export default App;

import React from "react";
// import styled from "styled-components";
import Header from "./components/Header";
import Form from "./components/Form";
import Question from "./components/Question";

const App = () => {
   return (
      <>
         <Header />
         <Form />
      </>
   );
};

export default App;

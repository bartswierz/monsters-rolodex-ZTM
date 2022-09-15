// import { Component } from "react";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

//Webpack is a MODULAR BUNDLER
// https://jsonplaceholder.typicode.com/users

/* FUNCTIONAL COMPONENT
Functions do NOT use CONSTRUCTORS, constructors only in CLASS COMPONENTS.
The functional component SIMPLY RUNS like a NORMAL JavaScript Function, it RUNS FROM TOP TO BOTTOM, and thats it
*/
const App = () => {
  /*
  const [] = useState(); is similar to:
  const arr = [2, 4]
  const [a, b] = arr;
  Values assigned: a = 2, b = 4
  */
  // Gives back an array of 2 Values
  const [searchField, setSearchField] = useState(""); //returns 2 values [value, setValue]
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState("");
  // console.log({ searchField });

  // This says, you should ONLY call this FUNCTION, is ON MOUNT. We are passing NO DEPENDENCIES
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    // Settings new monsters list that we will then pass as a prop to cardList
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    // LOWERCASES STRING from value we grabbed
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    // LOWERCASES STRING from value we grabbed
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  // Returns the UI
  return (
    <div className="App">
      {/* <h1 className="app-title">Monsters Rolodex</h1> */}
      <h1 className="app-title">{title}</h1>

      <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />

      <br />
      <SearchBox className="title-search-box" onChangeHandler={onTitleChange} placeholder="set title" />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
// CLASS COMPONENT
// App is a component, component is a self-contained piece of reusable code. React is just functions that return html
// function App() {
// class App extends Component {
//   constructor() {
//     super(); //calls the underlying constructor methor we are extending from.

//     // Initalize the state. This says "Hey React, there is going to be a state object for this component and these are initalize values that it is going to have"
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     // console.log("constructor");
//   }

//   // API DATA RETRIEVAL - Code inside here will RUN when the Component MOUNTS. Mounting The Component onto OUR PAGE
// componentDidMount() {
//   // console.log("componentDidMount");
//   // Fetching data from API
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//       this.setState(() => {
//         return { monsters: users };
//       })
//     );
// }

//   // Method for optimization
//   onSearchChange = (event) => {
//     // LOWERCASES STRING from value we grabbed
//     const searchField = event.target.value.toLocaleLowerCase();

//     // Returns back the User Search String back to our state so we can access it EVERYWHERE in our component.
//     this.setState(() => {
//       // updaing searchFiled Value
//       return { searchField };
//     });
//   };

//   // Everytime React needs to update the DOM it runs this render() method
//   render() {
//     /* console.log("Render");

//      Destructuring our this.state object to remove the 'this' keyword in our render
//      ex. onChange={this.onSearchChange} === onChange={onSearchChange} */
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     /* Original state of monsters is copied and the copied array will be FILTERED based on if it includes the user search Field */
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 class="app-title">Monsters Rolodex</h1>

//         <SearchBox className="monsters-search-box" onChangeHandler={onSearchChange} placeholder="search monsters" />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// <button onClick={() => {}} >Change Name</button>
//We want this CALLED whenever we click

// {
/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
  </p>
  <button
    onClick={() => {
      // Updating state to different object
      this.setState(
        (state, props) => {
          return {
            name: { firstName: "Andrei", lastName: "Neaogie" },
          };
        },
        // Callback to see change/not a must if we dont want it here
        () => {
          console.log(this.state);
        }
      );
    }}
  >
    Change Name
  </button>
</header>; */
// }

// Hardcoded values - We replaced this with an API
// monsters: [
//   {
//     name: "Linda",
//     id: "123",
//   },
//   {
//     name: "Frank",
//     id: "456",
//   },
//   {
//     name: "Jackie",
//     id: "789",
//   },
//   {
//     name: "Andrei",
//     id: "999",
//   },
// ],

// OUTPUTS API VALUES RETURNED
// componentDidMount() {
//   // Fetching data from API
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) => console.log(users));
// }

/* {
          // makes a new array and iterates all monster names in this.state
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        } */

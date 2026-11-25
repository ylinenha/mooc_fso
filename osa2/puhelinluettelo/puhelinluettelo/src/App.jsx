import { useState, useEffect } from "react";
import axios from "axios";
import AddInfo from "./components/AddInfo";
import FilterBook from "./components/FilterBook";
import PersonInfo from "./components/PersonInfo";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleInfoChange = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const personObject = { name: newName, number: newNumber };
    setPersons(persons.concat(personObject));

    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    console.log("effect");
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <FilterBook filter={filter} handleFilterChange={handleFilterChange} />
      </div>
      <h2>Add a new person</h2>
      <AddInfo
        handleInfoChange={handleInfoChange}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      {personsToShow.map(
        (person) => (
          console.log(person),
          console.log(person.name),
          (<PersonInfo key={person.name} person={person} />)
        ),
      )}
    </div>
  );
};

export default App;

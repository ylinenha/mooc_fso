import { useState, useEffect } from "react";
import personsService from "./services/persons";
import AddInfo from "./components/AddInfo";
import FilterBook from "./components/FilterBook";
import PersonInfo from "./components/PersonInfo";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleInfoChange = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = { name: newName, number: newNumber };

    personsService.update(id, changedNote).then((response) => {
      console.log(response);
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    });
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

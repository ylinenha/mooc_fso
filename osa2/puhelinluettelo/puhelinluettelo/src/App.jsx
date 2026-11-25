import { useState, useEffect } from "react";
import personsService from "./services/persons";
import AddInfo from "./components/AddInfo";
import FilterBook from "./components/FilterBook";
import PersonInfo from "./components/PersonInfo";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [changeMessage, setChangeMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleInfoChange = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      if (
        confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`,
        )
      ) {
        const person = persons.find((p) => p.name === newName);
        const personObject = {
          id: person.id,
          name: newName,
          number: newNumber,
        };
        console.log(personObject.id);
        personsService
          .update(personObject.id, personObject)
          .then((returnedPerson) => {
            console.log(returnedPerson);
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson)),
            );
            setNewName("");
            setNewNumber("");
            setChangeMessage(
              `The phone number of '${personObject.name}' was changed to the phone book successfully.`,
            );
            setTimeout(() => {
              setChangeMessage(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(
              `Person '${personObject.name}' has already been removed from the phonebook.`,
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((p) => p.id !== person.id));
          });
      }
      return;
    }

    const personObject = { name: newName, number: newNumber };

    personsService.create(personObject).then((returnedPerson) => {
      console.log(returnedPerson);
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
      setChangeMessage(
        `Person '${personObject.name}' was added to the phone book successfully.`,
      );
      setTimeout(() => {
        setChangeMessage(null);
      }, 5000);
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

  const handleDelete = (id, name) => {
    if (!window.confirm(`Delete ${name}?`)) {
      return;
    }

    personsService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id));
      setChangeMessage(
        `Person '${name}' was deleted from the phone book successfully.`,
      );
      setTimeout(() => {
        setChangeMessage(null);
      }, 5000);
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={changeMessage} type="success" />
      <Notification message={errorMessage} type="error" />
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
          (
            <PersonInfo
              key={person.name}
              person={person}
              handleDelete={() => handleDelete(person.id, person.name)}
            />
          )
        ),
      )}
    </div>
  );
};

export default App;

import axios from 'axios'

const url = '/api/persons';

const getPersons = () => {
    return axios.get(url)
        .then(response => response.data);
}

const personByNameExist = (name) => {
    return getPersons().then(
        persons => persons.find(person => person.name === name)
    );
}

const addPerson = (person) => {
  return axios.post(url, person)
    .then(response => response.data);
}

const deletePerson = (personId) => {
    return axios.delete(url + '/' + personId)
        .then(response => response.data);
}

const updatePerson = (personId, person) => {
  return axios.put(url + '/' + personId, person)
    .then(response => response.data);
}

export default {
    getPersons,
    addPerson,
    deletePerson,
    updatePerson,
    personByNameExist
}
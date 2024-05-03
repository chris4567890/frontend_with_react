import './styles/App.css'
import PersonList from './components/PersonList'
import PersonForm from './components/PersonForm'
import { useEffect,useState } from 'react';
import { fetchData } from '../util/persistence';

const blankPerson = {
  "id":"",
  "age":"",
  "name":"",
  "email":"",
  "gender":""
}


function App() {
  const [person, setPerson] = useState([]);
  const [personToEdit, setEditPerson] = useState(blankPerson); 
  
  
      function editPerson(person){
          setEditPerson(person)
      }
      function mutatePerson(person){
        if (person.id != ""){
          updatePerson(person)

          
        }

        else{
          createPerson(person)

          
        }
      }

      function updatePerson(person){
        console.log("update");
        fetchData(`${APIURL}/${person.id}`,
        (person) =>{
          setPersons(
            persons.map((p) => (p.id === person.id ? {...person} : p))    
          );
        },
        'PUT',
        person
        );

      }

      function createPerson(person){
        console.log("submit");
        const {id, ...personWithoutID} = person;    
        fetchData(`${APIURL}`,
        (person) =>setPersons([...persons,Newperson]),
        'POST',
        personWithoutID
        );
      }
    
  const [persons,setPersons] = useState([]);
  const APIURL = "http://localhost:3000/api";

  function getPersons(callback){

    fetchData(APIURL,callback)

  }
  function deletePersonById(personId){

    fetchData('${APIURL}/{personId}',() =>{},"DELETE");
    setPersons([...persons.filter((p)=> p.id != personId)])

  }

  useEffect(()=>{
   // getPersons()
   getPersons((data) => setPersons(data))
  },[]);


  return (
    <div>
      Person DB
      <PersonList persons={persons} deletePersonById={deletePersonById} editPerson={editPerson}/>
      <PersonForm blankPerson = {blankPerson} personToEdit={personToEdit}  mutatePerson={mutatePerson}/>
    </div>
    
  )
}

export default App

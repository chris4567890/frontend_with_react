import { useEffect, useState } from 'react'
import '/styles/App.css'
import YokaiForm from './components/YokaiForm';
import { fetchData } from '../util/persistence';
import YokaiList from './components/YokaiList';

const blankYokai = {
  "id":"",
  "type": "",
  "name":"",
  "habitat":"",
  "favorite_food":""

}

function App() {
  const [yokai,setYokai] = useState([]);
  const[yokaiToEdit,setEditYokai] = useState(blankYokai);
  const [yokais,setYokais] = useState([]);
  const APIURL = "http://localhost:3001/api";

  function editYokai(yokai){
    setEditYokai(yokai);
  }

  function updateYokai(yokai){
    fetchData(`${APIURL}/${yokai.id}`,
    (yokai) =>{
      setYokais(
        yokais.map((y) => (y.id === yokai.id ? {...yokai} : y))
      );
    },
    'PUT',
    yokai);
  }

  function createYokai(yokai){
    const {id, ...yokaiWithoutId} = yokai;
    fetchData(`${APIURL}`,
    (NewYokai) => setYokais([...yokais,NewYokai]),
    'POST',
    yokaiWithoutId);
  }


  function mutateYokai(yokai){
    if(yokai.id !== ""){
      updateYokai(yokai)
    }
    else{
      createYokai(yokai);
    }
  }

  
  

  function getYokais(callback){
    fetchData(APIURL,callback)
  }

  function deleteYokaiById(yokaiId){
    fetchData('${APIURL}/{yokaiId}',() =>{},"DELETE");
    setYokai([...yokais.filter((y) => y.id != yokaiId)])

  }

    return (
    <div>
      <p>hello there</p>
      <YokaiForm yokais = {yokais} deleteYokaiById = {deleteYokaiById} editYokai={editYokai} />
      <YokaiList yokais={yokais} blankYokai = {blankYokai}  yokaiToEdit={yokaiToEdit} mutateYokai={mutateYokai}/>
    </div>
      
  )
}

export default App

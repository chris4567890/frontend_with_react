import React from "react";
import { persons,obj } from "./file2";
function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

function MultiWelcome(){
    return (
        <div>
            <Welcome name="Sara"/>
            <Welcome name="Cahal"/>
            <Welcome name="Edith"/>
            <WelcomePerson person={persons[0]}/>
            {persons.map((person) => <WelcomePerson person={person}/>)}
        </div>
    )
}

function WelcomePerson(obj){
    return (
        <div>
           <h1>
            
            <p>{obj.person.firstname}</p>
            <p>{obj.person.lastname}</p>
            <p>{obj.person.gender}</p>
            <p>{obj.person.email}</p>
            
            </h1> 
            
        </div>
    )

}

export {Welcome,MultiWelcome,WelcomePerson}
import { useEffect,useState } from "react";

function YokaiForm({blankYokai,editYokai,mutateYokai}){
    const [yokai,setYokai] = useState ({...updateYokai});

    useEffect(()=>{
        setYokai(editYokai);
    },[editYokai])

    function handleChange(event){
        const value = event.target.value;
        const name = event.tagert.id;
        setYokai({...yokai,[name]: value});
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('submit',yokai);
        mutateYokai(yokai);
    }

    //TODO: figure out how to make habitat an array to add multiple habitats
    return(
        <div>
            <h1>yokai documentation</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Id</label>
                <input
                id="id"
                type="number"
                readOnly
                placeholder="id"
                value={yokai.id}
                onChange={handleChange}/>
                <label htmlFor="type">type</label>
                <input id="type" type="text"
                placeholder="type"
                value={yokai.type}
                onChange={handleChange}/>
                <label htmlFor="name">name</label>
                <input id="name" type="text"
                placeholder="name"
                value={yokai.name}
                onChange={handleChange}/>
                <label htmlFor="habitat">habitat</label>
                <input id="habitat" type="text"
                placeholder="habitat"
                value={yokai.habitat}
                onChange={handleChange}
                />
                <label htmlFor="favorite_food">favorite food</label>
                <input id="favorite_food" type="text"
                placeholder="favorite food"
                value={yokai.favorite_food}
                onChange={handleChange}/>
                <button onClick={() =>setYokai(yokai)}>update</button><button>add</button>
            </form>
        </div>
    )


}

export default YokaiForm
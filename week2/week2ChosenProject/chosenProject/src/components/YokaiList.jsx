function YokaiList({yokais,deleteYokaiById,editYokai}){

    return(
        <div>
            <h1>simplified list of yokais</h1>
            <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>type</th>
                    <th>name</th>
                    <th>habitat</th>
                    <th>favorite food</th>
                </tr>
            </thead>

            <tbody>
                {yokais.map((yokai) =>(
                    <tr key={(crypto.randomUUID())}>
                        <td>{yokai.id}</td>
                        <td>{yokai.type}</td>
                        <td>{yokai.name}</td>
                        <td>{yokai.habitat}</td>
                        <td>{yokai.favorite_food}</td>
                        <td><button onClick={()=> editYokai(yokai)}>edit</button>
                        <button onClick={()=> deleteYokaiById(yokai.id)}>delete</button></td>
                        
                    </tr>
                ))}
            </tbody>
            </table>      
        </div>
    )

}

export default YokaiList
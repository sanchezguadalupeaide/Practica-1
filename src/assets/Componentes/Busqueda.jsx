export const Busqueda = ({buscarPersonaje, setBuscarPersonaje}) =>{
    
    return<>
        <h1>Busqueda de personajes de Harry Potter</h1>
        <input type="text" 
        placeholder="Ingrese un personaje" 
        value={buscarPersonaje} 
        onChange={(event)=>{setBuscarPersonaje(event.target.value)}}/>
        <button onClick={console.log("Buscando: ", buscarPersonaje)}>Buscar</button>
    </>
}
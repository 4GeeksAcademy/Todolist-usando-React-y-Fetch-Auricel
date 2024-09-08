import React from 'react';

const ListaDeTareas = ({ lista = [], eliminarTarea }) => {
    //const [lista, setLista] = useState([]);

    // setLista([...lista, tarea]);

    /*const eliminarTarea = (index) => {
        const nuevaLista = lista.filter((_, i) => i !== index);
        setLista(nuevaLista);*/

    return (
        <div>
            <ul>
                {lista.map((tarea) => {
                    return (
                        <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
                            {tarea.label}
                            <button className="basura" onClick={() => eliminarTarea(tarea.id)}>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                            {/*<button className="actualizar" onClick={() => editar(tarea.id)}>
                                <i className="fa-regular fa-pen-to-square"></i>
                            </button>*/}
                        </li> 
                    );
                })}
            </ul>
        </div>
    );
};

export default ListaDeTareas;
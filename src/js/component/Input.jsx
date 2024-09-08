import React from 'react';

const Input = ({ tarea, setTarea, subirTarea }) => {
    

    return (
        <div className='container'>
            <input className='form-control'
                type="text"
                style={{ borderRadius: '10px', border: '2px solid blue' }}
                value={tarea}
                placeholder="ESCRIBE TU TAREA AQUI"
                onChange={(e) => setTarea(e.target.value)}
                //onKeyDown={agregarTarea}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        if (tarea.trim() !== '') {
                            subirTarea();
                            //agregarTarea(tarea);
                        }
                    }
                }}
            />
            
        </div>
    );
};

export default Input;
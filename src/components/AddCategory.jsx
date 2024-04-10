import { useState } from 'react';

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue] = useState('One Punch');  

    // Funcion que permite escribir en el input y guardar el valor en el estado
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    // Funcion que permite enviar el formulario y prevenir el comportamiento por defecto
    const handleOnSubmit = (e) => {
        e.preventDefault();
        //funcion para prevenir que se envie un string vacio
        if( inputValue.trim().length <= 1 ) return;
        //console.log(inputValue);
        onAddCategory(inputValue.trim());
        setInputValue('');
    }
  return (

    <form onSubmit={handleOnSubmit}>
        <input
            type="text"
            placeholder="Buscar gifs..."
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

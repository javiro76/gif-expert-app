import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

  const onAddCategory = (newValue) => {
    // const copiaCategoria = [...categories];
    // copiaCategoria.push('newCategoria1');
    // console.log(copiaCategoria);
    // setCategories(copiaCategoria);

    //funcion para prevenir que se dupliquen las categorias
    if (categories.includes(newValue)) return;
    setCategories([newValue, ...categories]);
  };


  console.log(categories);
  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onAddCategory = {onAddCategory}/>

      {/* listado de gif */}

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>
    </>
  );
};

import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

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
        {
          categories.map((categoria) => (
            <GifGrid  key={categoria}
                      category={categoria}
            />
        ))
        
        }
    </>
  );
};

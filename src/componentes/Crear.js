import React, { useEffect } from 'react'

export const Crear = ({setArticulo, Articulos, admin, setAdmin}) => {

    useEffect(()=>{
      localStorage.setItem(`Productos`, JSON.stringify(Articulos))

    }, [Articulos])

    const createArticle = e =>{
        e.preventDefault();

        let target = e.target;

        // Obtenemos el valor de los campos

        let title = target.title.value;
        let description = target.description.value;
        let price = parseFloat(target.price.value);

        // Creamos un archivo json

        let newArticle = {
          title: title,
          description: description,
          price: price,
          id: new Date().getTime()
        }

        // Guardamos en useState

        if(Articulos != null){
          setArticulo(elementos =>{
            return[...elementos, newArticle]
          })
        }else{
          setArticulo([newArticle]);
          localStorage.setItem(`Productos`, JSON.stringify([newArticle]));
        }

        target.title.value = ""
        target.description.value = ""
        target.price.value = ""

    }

    if(admin === true){
      return (



        <div className="agregar">
            <h1>Agregar Producto</h1>
            <form onSubmit={e => createArticle(e)}>
                <input type="text" placeholder="Producto" name="title"/>
                <textarea name="description" cols="30" placeholder="Descripcion" rows="5"></textarea>
                <input type="number" placeholder="$0.0" name="price"/>
                <input type="submit" value="Agregar" className="boton"/>
            </form>
        </div>
    
    
    
      )
    }


}

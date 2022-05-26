import { Config } from "./Config"

export const Productos = ({Articulos, setArticulos, admin, setAdmin}) => {

  
  return (
    <>

      {Articulos != null ?
        (
            Articulos.map(Articulo => {
              return(
                <article key={Articulo.id} className="article">
                    <h1>{Articulo.title}</h1>
                    <p className="descripcion">{Articulo.description}</p>
                    <p className="precio">${Articulo.price}</p>
                    <Config
                    admin={admin}
                    setAdmin={setAdmin}
                    />
                    <div className="space">
                        <button className="boton comprar">Agregar Al carrito</button>
                        <button className="boton comprar">Comprar</button>
                    </div>
                </article>
              )
            })

            ): <h1>No hay</h1>

        }
            
    </>
  )
}

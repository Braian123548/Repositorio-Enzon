import { useEffect, useState } from "react";
import { Crear } from "./componentes/Crear";
import { Productos } from "./componentes/Productos";


function App() {

    const [Articulos, setArticulo] = useState(JSON.parse(localStorage.getItem(`Productos`)));
    const [adminMode, setAdminMode] = useState(false);

    useEffect(()=>{
        console.log(`Productos Actualizados`);
    }, [Articulos])

    const getAdmin = e =>{
        setAdminMode(true);
    }

    const removeAdmin = e =>{
        setAdminMode(false);
    }

  return (
    <div className="layout">
        <div className="header">
            <a href="/"><img src="/img/logo.png" alt="Logo" className="img-chica"/></a>
            <h1>Tienda Online</h1>
            <p>Productos Generales de Limpieza</p>

            <button className="login" onClick={e=> getAdmin(e)}>Login</button>
            <button className="login" onClick={e=> removeAdmin(e)}>Cerrar Sesion</button>
        </div>

        <div className="nav">
            <a href="/" className="boton"><img src="/img/carrito.png" alt="Carrito" className="img-chica"/>Carrito de Compras</a>
            <a href="/" className="boton"><img src="/img/productos.png" alt="Productos" className="img-chica"/>Productos</a>
            <a href="/" className="boton"><img src="/img/contacto.png" alt="Contactos" className="img-chica"/>Contacto</a>
        </div>

        <div className="content">

            <Productos
            Articulos= {Articulos}
            setArticulo= {setArticulo}
            admin={adminMode}
            setAdmin={setAdminMode}
            />
            
        </div>

            <div className="lateral">
                
                <Crear
                Articulos= {Articulos}
                setArticulo={setArticulo}
                admin={adminMode}
                setAdmin={setAdminMode}
                />
                
            </div>


        <div className="footer">
            <p>Pagina desarrollada mediante React por Enzo Rodriguez &copy; all right reserved 2022</p>
        </div>
    </div>
  );
}

export default App;

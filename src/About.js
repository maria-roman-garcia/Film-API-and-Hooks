import React from 'react';
import { Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons';
import './About.css';

const listItem = <FontAwesomeIcon icon={faCheck} style={{ color: "Green" }} />
const more = <FontAwesomeIcon icon={faBell} style={{ color: "Orange" }} />

function About() {
    return (
        <div className="About" style={{ padding: "2rem 2rem 0 2rem" }}>
            {/* Instalamos Ap React */}
            <p>{listItem} Lo primero es crear un nuevo proyecto de React con los siguientes comandos:</p>
            <Alert color="dark">
                <p>npx create-react-app my-app</p>
                <p>cd my-app</p>
                <p>npm start</p>
            </Alert>
            <Alert color="info">
                <p>{more} Más info en : <a rel="noopener noreferrer" href="https://es.reactjs.org/docs/create-a-new-react-app.html#create-react-app" target="_blank">Create React App</a></p>
            </Alert>
            {/* Instalamos Reactstrap */}
            <p>{listItem} Instalamos Reactstrap y Bootstrap con los siguientes comandos:</p>
            <Alert color="dark">
                <p>npm install --save bootstrap</p>
                <p>npm install --save reactstrap react react-dom</p>
            </Alert>
            <Alert color="info">
                <p>{more} Más info en : <a rel="noopener noreferrer" href="https://reactstrap.github.io/" target="_blank">Reactstrap</a></p>
            </Alert>
            {/* Instalamos react router dom */}
            <p>{listItem} Instalamos react-router-dom con los siguientes comandos:</p>
            <Alert color="dark">
                <p>npm install react-router-dom</p>
            </Alert>
            <p>React Router se aprovecha de la separación de la interfaz en componentes que hace React. La lógica básica de cómo funciona es simple: depende de la ruta de la página en la que estemos, se pinta un componente u otro. Por ejemplo, podríamos decirle que si estamos en la ruta / renderice el componente &lt; Home /> en la página, pero si estamos en la ruta /about, que renderice el componente &lt; About /></p>
            <Alert color="info">
                <p>{more} Más info en : <a rel="noopener noreferrer" href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank">react-router-dom</a></p>
            </Alert>
            {/* Instalamos Font awesome para React */}
            <p>{listItem} Instalamos Font-awesome para React:</p>
            <Alert color="dark">
                <p>npm i --save @fortawesome/fontawesome-svg-core</p>
                <p>npm i --save @fortawesome/free-solid-svg-icons</p>
                <p>npm i --save @fortawesome/react-fontawesome</p>
            </Alert>
            <p>Font Awesom es un framework de iconos vectoriales y estilos css. Pero… ¿para qué sirve? Este framework es utilizado para sustituir imágenes de iconos comunes por gráficos vectoriales convertidos en fuentes. Para ello utiliza una librería de mas de 400 iconos transformadas en fuentes.</p>
            <Alert color="info">
                <p>{more} Más info en : <a rel="noopener noreferrer" href="https://github.com/FortAwesome/react-fontawesome" target="_blank">Font-awesome y React</a></p>
            </Alert>
            {/* Hooks */}
            <p>{listItem} Y lo más importante... Hooks:</p>
            <p>Hooks son una nueva característica en React 16.8. Estos te permiten usar el estado y otras características de React sin escribir una clase.</p>
            <p>Con Hooks puedes dividir un componente en pequeñas funciones teniendo en cuenta las partes que están relacionadas y no los métodos de ciclo de vida.</p>
            <p>En resumen...¿Cómo funciona?</p>
            <p>Llamas al useState dentro de tu componente y le añades un estado.  React preserva el estado entre todas las acciones que se están reprocesando y useState retorna el valor del estado actual  y la función que te permite actualizar el valor. Puedes llamar a la función desde cualquier sitio.</p>
             < p > ¿Qué tiene de nuevo ?</p>
            <ul>
                <li>
                    Dejamos de lado los componentes de clase(por el momento son compatibles).Las clases no minifican tan bien como las funciones, esto significa que nuestro código ocupará más.La diferencia con un solo componente puede no ser relevante, pero si pasamos toda nuestra aplicación a funciones, puede marcar la diferencia.
                </li>
                <li>
                    Podremos crear nuestros propios hooks(Custom Hooks) de forma que ganaremos lo mejor de los High Order Components y las Render Props, sin necesidad de complicar nuestro componente y manteniendo la programación declarativa...¡Y son reusables!
                </li>
            </ul>
            < div className = "row justifyCenter" >
                <img src={require('./ejemploHooks.png')} alt="Ejemplo de Hooks" style={{ width: "100%" }}></img>
            </div>
            <Alert color="info">
                <p>{more} Más info en : <a rel="noopener noreferrer" href="https://es.reactjs.org/docs/hooks-intro.html" target="_blank">...más sobre Hooks</a></p>
                <p>{more} Entender useEffect () : <a rel="noopener noreferrer" href="https://es.reactjs.org/docs/hooks-effect.html" target="_blank">useEffect()</a></p>
            </Alert>
        </div>
    );
}

export default About;
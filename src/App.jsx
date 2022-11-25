import "./components/App.css"
import Navbar from './components/Navbar'
import info from './db.json'

function App() {

  return (
    <div >
      <Navbar brand="simulacr." />
      <div className="principal">
        {
          info && info.map(data => {
            return (
              <div className='box' key={data.idVideo}>
                <div className="header">
                  <strong className="cliente"> {data.cliente}</strong> <br />
                  <h2 className="test_tipo">Test: Test de usabilidad en el sitio web</h2>
                  <h2> Testeador </h2>                
                </div>
                <video src={data.linkVideo} width="900" height="480" controls className="video"> </video>
                <h1 className="transcripcion_title">Transcripcion</h1>
                <div className="transcripcion" typeof=""> {data.transcripcion}</div>
                <h1 className="tareas">Tareas</h1>
                
                {data.preguntas && data.preguntas.map(tareas => {
                  return (
                    <div key={tareas.link}>
                        <strong className="tarea"> {tareas.texto} <br /> </ strong> 
                        <p className='tarea_tiempo'>Duracion de la tarea: {tareas.tiempo}</p>
                    </div>                    
                  )
                })}
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

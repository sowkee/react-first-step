import './App.css';
import { Perfil } from './componentes/Perfil';

function App() {
  const users = [
    {
      nombre: "Brais Moure",
      empresa: "Moures Dev",
      pais: "España",
      cargo: "Ing. Software",
      descripcion: "Desarrollador y divulgador.",
      linkedin: "",
      youtube: "",
      twitter: "",
    },
    {
      nombre: "Ada Lovelace",
      empresa: "-",
      pais: "Inglaterra",
      cargo: "Matemática, traductora y escritora",
      descripcion: "Se le considera como la primer programadora informática",
      linkedin: "",
      youtube: "",
      twitter: "",
    },
    {
      nombre: "Linus Torvald",
      empresa: "Linux",
      pais: "Finlandia",
      cargo: "Ing. Software",
      descripcion: "Creador de Linux",
      linkedin: "",
      youtube: "",
      twitter: "",
    }
  ];
  return (

    <>
      <div className="app-container">
        <div className='container-title'>
          <h1 className='title'>Los Favs: </h1>
        </div>

          <div className='profile-container'>
            {users.map((user) => (
              <Perfil
                nombre={user.nombre}
                empresa={user.empresa}
                pais={user.pais}
                cargo={user.cargo}
                descripcion={user.descripcion}
                linkedin={user.linkedin}
                youtube={user.youtube}
                twitter={user.twitter}
              />
            ))}
          </div>
      </div>
    </>

  );
}

export default App;
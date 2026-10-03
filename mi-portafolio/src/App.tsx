import "./App.css";

type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
};

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vite",
];

const proyectos: Proyecto[] = [
  {
    id: 1,
    nombre: "Fila creativa",
    descripcion:
      "Proyecto realizado con React y TypeScript para practicar el modelado de datos y la creación de componentes.",
  },
];

function Presentacion() {
  return (
    <section className="presentacion">
      <p className="saludo">¡Hola! Soy</p>

      <h1>Sara Ayala</h1>

      <p>
        Soy estudiante de Mercadeo y de depuración y procesamiento de datos
        para la IA. Me interesa crear proyectos sencillos, funcionales y
        fáciles de usar.
      </p>
    </section>
  );
}

type ListaTecnologiasProps = {
  tecnologias: string[];
};

function ListaTecnologias({ tecnologias }: ListaTecnologiasProps) {
  return (
    <section>
      <h2>Tecnologías</h2>

      <p>
        Estas son algunas de las tecnologías que estoy aprendiendo y
        utilizando en mis proyectos:
      </p>

      <ul className="tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
    </section>
  );
}

type ListaProyectosProps = {
  proyectos: Proyecto[];
};

function ListaProyectos({ proyectos }: ListaProyectosProps) {
  return (
    <section>
      <h2>Proyectos</h2>

      <div className="proyectos">
        {proyectos.map((proyecto) => (
          <article className="tarjeta" key={proyecto.id}>
            <h3>{proyecto.nombre}</h3>

            <p>{proyecto.descripcion}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main>
      <Presentacion />

      <ListaTecnologias tecnologias={tecnologias} />

      <ListaProyectos proyectos={proyectos} />

      <section>
        <h2>Contacto</h2>

        <p>
          Si quieres conocer más sobre mi trabajo o mis proyectos, puedes
          contactarme por correo electrónico.
        </p>

        <a href="mailto:saraayala88999@gmail.com">
          saraayala88999@gmail.com
        </a>
      </section>
    </main>
  );
}

export default App;
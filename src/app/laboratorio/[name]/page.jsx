"use client";

import BtnIcons from "@/Components/BtnIcons";
import { useEffect, useState } from "react";
import Note from "@/Components/Note";
import Menu from "@/Components/Menu";
import Image from "next/image";

const data = {
  lab101: {
    name: "Laboratorio de Innovación, creatividad y nuevas tecnologías LAB101",
    description:
      "El Laboratorio de Innovación, Creatividad y Nuevas Tecnologías -LAB101- cuenta con experiencia en la construcción de soluciones tecnológicas que permiten transformar de manera positiva la realidad de las personas y las organizaciones públicas o privadas, aprovechando las capacidades propias de las nuevas tecnologías y los enfoques co-creativos. Desarrolla proyectos a partir del uso de metodologías ágiles y marcos de trabajo como Design Thinking, Scrum y Lean UX, las cuales nos brindan la posibilidad de desarrollar proyectos de una forma iterativa e incremental y, así, ofrecer el mayor valor y satisfacción en las soluciones desarrolladas para sus aliados.",
    relevantInfo: {
      headquarter: "Bogotá, Facultad de Ingeniería",
      direction: "Campus Santa Rosa Bloque 5",
      email: "lab101_bog@unal.edu.co",
    },
    link: [
      {
        name: "micrositio",
        href: "https://sites.google.com/view/lab101unal/inicio",
      },
    ],
    publications: [],
    keywords: [
      "Experiencia de Usuario",
      "Tecnologías Emergentes",
      "Procesos de Innovación",
      "Capacitación y formación",
    ],
    img: "",
  },
  neurociencia: {
    name: "Laboratorio de Neurociencia Cognitiva y Comunicación",
    description:
      "Proyectos de investigación, creación artística, extensión e innovación, incluyendo el 'Diseño y estudio piloto para la evaluación de la efectividad de doce cápsulas de conocimiento en salud materna y neonatal a través de una estrategia de neuromarketing', han sido reconocidos con el Premio a la Investigación en el área de Ciencias Clínicas por la Academia Nacional de Medicina de Colombia.",
    relevantInfo: {
      headquarter: "Bogotá, Facultad de Medicina",
      direction:
        "Avenida Carrera 30 # 45, Bogotá, D.C. - Ciudad Universitaria - Edificio 471",
      email: "Labneuroc_fmbog@unal.edu.co",
    },
    link: [],
    publications: [
      "Prieto-Pinto, L., Lara-Díaz, M. F., Garzón-Orjuela, N., Herrera, D., Páez-Canro, C., Reyes, J. H., ... & Eslava-Schmalbach, J. (2019). Effectiveness assessment of maternal and neonatal health video clips in knowledge transfer using neuromarketing tools: A randomized crossover trial. PloS one, 14(5), e0215561.",
      "Galván-Villamarín, J. F., & Díaz, M. F. L. (2022). Diseño e implementación del modelo de humanización integral en salud de la Facultad de Medicina de la Universidad Nacional de Colombia. Revista de la Facultad de Medicina, 70(3), e98649-e98649.",
      "Lara Díaz, M. F., Beltrán Rojas, J. C., Rodríguez Montoya, S. R., Arias Castro, D. M., & Araque Jaramillo, S. M. (2016). Análisis de la percepción de eventos estáticos y dinámicos en personas con enfermedad de Alzheimer. Universitas Psychologica, 15(SPE5), 1-13.",
      "Lara-Díaz, M. F., Mateus-Moreno, A., & Beltrán-Rojas, J. C. (2021). Reading and Oral Language Skills in Children With Developmental Language Disorder: Influence of Socioeconomic, Educational, and Family Variables. Frontiers in Psychology, 4434.",
      "Pabón, G. A., Díaz, M. F. L., Rojas, J. C. B., & Moreno, A. M. (2019). Desempeño en tareas de memoria procedimental en niños con trastorno específico del lenguaje: Una revisión de literatura. Revista Iberoamericana de Psicología, 12(2), 79-92.",
      "Moreno, A. M., Díaz, M. F. L., & Beltrán-Rojas, J. C. (2019). Funcionamiento ejecutivo y desempeño lector en niños con y sin dificultades de lectura: Un estudio de seguimiento ocular. Revista Iberoamericana de Psicología: Ciencia y Tecnología, 12(2), 1-12.",
      "Rojas, J. C. B., Díaz, M. F. L., Díaz, A. C., & Rubiano, K. L. P. (2019). Diferencias de las habilidades auditivas en personas videntes e invidentes. Revista Colombiana de Rehabilitación, 18(1), 18-27.",
    ],
    keywords: ["Neurociencia Cognitiva", "Investigación Interdisciplinaria"],
    img: "",
  },
  fotografia: {
    name: "Laboratorio de Fotografía",
    description:
      "Este grupo de investigación busca reforzar la generación de conocimiento con relación a los problemas teóricos y de creación en fotografía en el país. Su trabajo se divide en varias líneas de investigación que abordan problemas como la historia de la fotografía en Colombia, la historia y teoría de la fotografía y las metodologías de creación en fotografía. El grupo busca contribuir a la investigación-creación académica en el área de Fotografía y Artes visuales, a la generación de proyectos de investigación-creación en el área de Fotografía y a la divulgación hacia la comunidad del conocimiento generado.",
    relevantInfo: {
      headquarter: "Bogotá, Facultad de Artes",
      direction:
        "Avenida Carrera 30 # 45, Bogotá, D.C. - Ciudad Universitaria - Edificio 217",
      email: "labfotofar_bog@unal.edu.co",
    },
    link: [
      {
        name: "Hermes",
        href: "http://www.hermes.unal.edu.co/pages/Consultas/Grupo.xhtml?idGrupo=2410",
      },
      {
        name: "Scienti",
        href: "https://scienti.colciencias.gov.co/gruplac/jsp/visualiza/visualizagr.jsp?nro=00000000014726",
      },
      {
        name: "Proyecto Hermes",
        href: "http://www.hermes.unal.edu.co/pages/Consultas/Proyecto.xhtml?idProyecto=31654",
      },
      {
        name: "Arte Flora Programa",
        href: "http://arteflora.org/programa/escuela-flora/",
      },
      {
        name: "Arte Flora Publicaciones",
        href: "http://arteflora.org/publicaciones/revista-florae-2/",
      },
      {
        name: "Proyecto Hermes",
        href: "http://www.hermes.unal.edu.co/pages/Consultas/Proyecto.xhtml?idProyecto=36336",
      },
      {
        name: "Conferencias Artes",
        href: "http://artes.bogota.unal.edu.co/conferencias-artes/conferencias/c39",
      },
      {
        name: "UNRadio",
        href: "http://unradio.unal.edu.co/nc/detalle/cat/investigarte/article/realidad-aumentada-en-el-museo-de-historia-natural-de-la-un.html",
      },
      {
        name: "Conferencias Artes",
        href: "http://artes.bogota.unal.edu.co/conferencias-artes/conferencias/c54",
      },
    ],
    publications: ["http://arteflora.org/publicaciones/revista-florae-2/"],
    keywords: [
      "Arte y Cultura",
      "Humanidades",
      "Metodologías y procesos de creación en fotografía",
      "Imagen fotográfica en contexto colombiano",
      "Desarrollos tecnológicos en fotografía",
    ],
    img: "",
  },
  imagen_digital: {
    name: "Laboratorio de Imagen Digital",
    description:
      "El Laboratorio de Imagen Digital cuenta con seis (6) áreas de trabajo especializadas en: Imagen Digital, Diseño, Animación y Producción. Cinco (5) de estas áreas contemplan su dedicación a labores de apoyo a la docencia para la Facultad de Artes, pues se programan asignaturas para estudiantes tanto de los pregrados de Diseño Gráfico, Diseño Industrial, Artes Plásticas, y Cine y Televisión, como a los posgrados de la Especialización en Fotografía y Especialización en Animación.",
    relevantInfo: {
      headquarter: "Bogotá, Facultad de Artes",
      direction:
        "Avenida Carrera 30 # 45, Bogotá, D.C. - Ciudad Universitaria - Edificio 217",
      email: "rlmunozm@unal.edu.co",
    },
    link: [
      {
        name: "Hermes",
        href: "Sistema de Información de la Investigación - HERMES (unal.edu.co)",
      },
    ],
    publications: ["Artículos académicos"],
    keywords: [
      "Productos multimedia",
      "Medios digitales",
      "Cursos y especializaciones",
    ],
    img: "",
  },
  fundicion: {
    name: "Laboratorio de Fundición y Pulvimetalurgia",
    description:
      "El Laboratorio de Fundición y Pulvimetalurgia se desempeña en diferentes campos del sector de los materiales metálicos, cerámicos, en el procesamiento y caracterización. Actualmente desarrolla materiales compuestos a ser utilizados en la obtención de piezas ingenieriles metálicas mediante procesos de manufactura aditiva – impresión 3D que impacten en el desarrollo de la cuarta revolución industrial (Industria 4.0).",
    relevantInfo: {
      headquarter: "Bogotá, Facultad de Ingeniería",
      direction:
        "Avenida Carrera 30 # 45, Bogotá, D.C. - Ciudad Universitaria - Edificio 407",
      email: "lkherreraq@unal.edu.co",
    },
    link: [
      { name: "Micrositio", href: "Microstio UNAL (google.com)" },
      {
        name: "Web Ingeniería",
        href: "Web Ingeniería Laboratorios - Ingeniería Mecánica y Mecatrónica (unal.edu.co)",
      },
      {
        name: "Hermes",
        href: "Hermes Sistema de Información de la Investigación - HERMES (unal.edu.co)",
      },
    ],
    publications: [
      '"Comparison between micro-Raman and micro-FTIR spectroscopy techniques for the characterization of pigments from Southern Spain Cultural Heritage" . En: Países Bajos Journal of Molecular Structure ISSN: 0022-2860 ed: Elsevier Science Bv v.924 fasc.N/A p.404 - 412 ,2009,',
      '"Study by grazing incident diffraction and surface spectroscopy of amalgam from Cultural Heritage ancient mirrors" . En: Polonia Central European Journal of Chemistry ISSN: 1895-1066 ed: De Gruyter Open v.7 fasc.1 p.47 - 53 ,2009,',
      'Study of Degradation of metals used in the baroque period in Andalusia, Spain" . En: España Revista de Metalurgia ISSN: 0034-8570 ed: CSIC Consejo Superior de Investigaciones Cientificas. Instituto Arias Montano de Estudios Hebraicos v.45 fasc.4 p.277 - 286 ,2009,',
    ],
    keywords: [
      "Ingeniería de los materiales",
      "Ingeniería mecánica",
      "Ciencias de la educación",
    ],
    img: "",
  },
  fisica_quimica_biologia: {
    name: "Laboratorio de Física, Química y Biología",
    description:
      "El Laboratorio de Física, Química y Biología realiza actividades docentes en áreas como la Física mecánica, Química básica y orgánica, así como Biología molecular y celular. Además, apoya la investigación y extensión en temas relevantes para la región y sus comunidades. También ofrece servicios a entidades e instituciones en pruebas, ensayos y mediante convenios establecidos.",
    relevantInfo: {
      headquarter: "Amazonia",
      direction: "Kilometro 2 Via Leticia - Tarapacá",
      email: "coolabor_let@unal.edu.co",
    },
    link: [],
    publications: ["Artículos académicos"],
    keywords: [
      "Física Mecánica",
      "Química Básica y Orgánica",
      "Biología Molecular y Celular",
    ],
    img: "",
  },
  humedales: {
    name: "Manejo y Gestión de Humedales",
    description:
      "El Laboratorio de Manejo y Gestión de Humedales estudia la estructura, dinámica y distribución espacio-temporal de las comunidades biológicas acuáticas, caracterización física y química de los ambientes acuáticos de la Alta Amazonia, estudios de calidad de agua e implementación de la piscicultura en la Amazonia, estudios de productividad biomasa y biogeografía de organismos acuáticos.",
    relevantInfo: {
      headquarter: "Amazonia",
      direction: "Kilometro 2 Via Leticia - Tarapacá",
      email: "coolabor_let@unal.edu.co",
    },
    link: [],
    publications: ["Artículos académicos"],
    keywords: [
      "Ambientes acuáticos",
      "Piscicultura",
      "Biomasa",
      "Biogeografía",
    ],
    img: "",
  },
  ecologia: {
    name: "Ecología y Conservación de la Flora y Fauna Silvestre",
    description:
      "La investigación en el Laboratorio de Ecología y Conservación de la Flora y Fauna Silvestre se basa en el reconocimiento de especies animales y de plantas que son utilizadas o presentan algún potencial para el sector productivo de la región Amazónica. La investigación que realiza el laboratorio abarca diversas temáticas dentro del campo de la morfología, fisiología y ecología de las semillas u otros materiales propagativos y su desarrollo inicial de plántulas.",
    relevantInfo: {
      headquarter: "Amazonia",
      direction: "Kilometro 2 Via Leticia - Tarapacá",
      email: "coolabor_let@unal.edu.co",
    },
    link: "",
    publications: ["Artículos académicos"],
    keywords: [
      "Morfología",
      "Fisiología",
      "Ecología",
      "Semillas",
      "Materiales propagativos",
    ],
    img: "",
  },
  paz: {
    name: "Laboratorio de Paz Territorial",
    description:
      "El laboratorio se configura como una estrategia de comunicación y socialización sobre la paz por parte de la Universidad Nacional de Colombia. Una vez se convierte en proyecto des banco de proyectos con cuatro objetivos: i) Divulgar los valores sociales que forman tejido social en el Cesar. ii) Seguridad alimentaria en la región del Cesar. iii) Conflictos ambientales y territoriales: identificación de conflictos. iv) Migración venezolana y manejo de la frontera: Revisión del escenario de migración con estudios de caso en La Paz y Manaure.",
    relevantInfo: {
      headquarter: "De La Paz, Cesar, Colombia",
      direction: "Kilómetro 9 Vía Valledupar - La Paz",
      email: "labpazterritorial_paz@unal.edu.co",
    },
    link: [
      {
        name: "Sitio",
        href: "https://www.google.com/url?q=http://labpazterr.delapaz.unal.edu.co/&sa=D&source=docs&ust=1717512320003975&usg=AOvVaw3D7b9gpjZxlgtH0MDUCUxK",
      },
    ],
    publications: ["Artículos académicos"],
    keywords: [
      "Paz Territorial",
      "Seguridad Alimentaria",
      "Conflictos Ambientales y Territoriales",
      "Conflictos Migratorios",
    ],
    img: "",
  },
};

const Layout = ({ params }) => {
  const [Loaded, setLoaded] = useState(false);
  const [selected, setSelected] = useState(undefined);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (params) {
      setSelected(data[params.name]);
    }
  }, [params.name]);

  return (
    <div className="overflow-hidden  w-[100vw] min-h-[100vh] relative bg-lightPurple">
      <div className="w-[100%] h-fit bg-light menu_container shadow-lg">
        <Menu />
      </div>
      <div
        className="relative flex flex-col items-center  w-full  h-fit py-6  text-white
                   "
      >
        <div
          className="z-10 flex flex-col items-center w-full gap-[2rem]   h-fit text-white
                    lg:w-[50%]"
        >
          {selected ? (
            <>
              <h1 className="text-4xl font-bold">{selected.name}</h1>
              <div
                className={`text-xl font-normal h-fit flex flex-row flex-wrap w-full gap-4`}
              >
                <div className="bg-ligthAlt3  rounded-xl p-4 text-lightPurple grow basis-[70%]  min-w-[150px]">
                  <p>{selected.description}</p>
                </div>
                <div className="bg-ligthAlt3  rounded-xl p-4 text-lightPurple grow basis-[20%]  min-w-[150px]">
                  {selected.relevantInfo.headquarter && (
                    <p>{selected.relevantInfo.headquarter}</p>
                  )}
                  {selected.relevantInfo.headquarter && (
                    <p>{selected.relevantInfo.direction}</p>
                  )}
                  {selected.relevantInfo.headquarter && (
                    <p>{selected.relevantInfo.email}</p>
                  )}
                </div>
                {selected.link.length > 0 && (
                  <div className="bg-ligthAlt3 rounded-xl p-4 text-lightPurple grow basis-[40%] flex flex-col  min-w-[150px]">
                    <h2 className="text-3xl font-bold">Enlaces</h2>
                    {selected.link.map((link, i) => (
                      <>
                        <a
                          className="text-1xl font-bold text-lightPurple"
                          href={link.href}
                          target="_blank"
                        >
                          {"- "}
                          {link.name}
                        </a>
                      </>
                    ))}
                  </div>
                )}

                {selected.publications.length > 0 && (
                  <div className="bg-ligthAlt3  rounded-xl p-4 text-lightPurple grow basis-[40%]  min-w-[150px] ">
                    <h2 className="text-3xl font-bold ">
                      Artículos académicos
                    </h2>
                    {selected.publications.map((article, i) => (
                      <p key={i}>{article}</p>
                    ))}
                  </div>
                )}

                {selected.keywords.length > 0 && (
                  <div className="bg-ligthAlt3  rounded-xl p-4 text-lightPurple grow basis-[40%]  min-w-[150px] h-fit">
                    <h2 className="text-3xl font-bold">Palabras clave</h2>
                    {selected.keywords.map((keyword, i) => (
                      <p key={i}>{keyword}</p>
                    ))}
                  </div>
                )}
                {selected.img && (
                  <>
                    <img src={selected.img} alt="imagen de laboratorio" />
                  </>
                )}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        <Image
          alt="decoración izquierda"
          className="absolute left-0 top-0 opacity-20 lg:opacity-100 z-0"
          src={"/svg/leftDecoration.svg"}
          width={500}
          height={100}
        />
        <Image
          alt="decoración derecha"
          className="absolute right-0 top-0 opacity-20 lg:opacity-100 z-0"
          src={"/svg/rightDecoration.svg"}
          width={350}
          height={100}
        />
      </div>
    </div>
  );
};

export default Layout;

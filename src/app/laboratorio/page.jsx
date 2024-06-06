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
    publications: ["Artículos académicos"],
    keywords: [
      "Experiencia de Usuario",
      "Tecnologías Emergentes",
      "Procesos de Innovación",
      "Capacitación y formación",
    ],
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
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
    link: [],
    publications: ["Artículos académicos"],
    keywords: [
      "Morfología",
      "Fisiología",
      "Ecología",
      "Semillas",
      "Materiales propagativos",
    ],
    img: ["Imagen del laboratorio"],
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
    img: ["Imagen del laboratorio"],
  },
};

const Layout = ({ children }) => {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="overflow-hidden flex w-[100vw] h-full flex-col items-center relative">
      <div className="w-[100%] h-fit bg-light menu_container shadow-lg">
        <Menu />
      </div>
      <div
        className="relative flex flex-col items-center justify-center w-full  h-fit  bg-lightPurple text-white
                   "
      >
        <div
          className="z-10 flex flex-col px-[1rem] items-center w-full gap-[2rem] mt-[2rem]  h-fit text-white
                    lg:w-[50%]"
        >
          <h1 className="text-4xl font-bold">
            Alianza por la innovación pedagógica con uso de tecnologías para la
            paz
          </h1>
          <div className={`text-xl font-normal h-fit`}>
            <p>
              La «Alianza por la innovación pedagógica con uso de tecnologías
              para la paz» es beneficiaria de la “Convocatoria para la
              conformación o el fortalecimiento de estrategias de cooperación
              entre laboratorios 2022-2024”, organizada por la Dirección
              Nacional de Investigación y Laboratorios de la Vicerrectoría de
              Investigación de la Universidad Nacional de Colombia. Convocatoria
              que tiene por objetivo apoyar el desarrollo de proyectos que
              busquen potenciar el Sistema Nacional de Laboratorios (SNL) a
              través de la conformación o fortalecimiento de estrategias de
              cooperación entre laboratorios de diferentes sedes, facultades o
              institutos.
            </p>
            <br />
            {!closed && (
              <>
                {" "}
                <p>
                  Esta convocatoria se enmarca en el Plan Global de Desarrollo
                  de la Universidad Nacional de Colombia 2022-2024, en su
                  programa 6 (E3P2) «Armonización de las funciones misionales
                  para la gestión del conocimiento» y del Proyecto Componente
                  607-C4 «Mejoramiento de la infraestructura de los laboratorios
                  para el avance de la Ciencia, la Tecnología y la Innovación»
                  del proyecto de inversión de la Vicerrectoría de Investigación
                  2022-2024 «Armonización, fortalecimiento y visibilidad de las
                  funciones de investigación, extensión e innovación para una
                  gestión del conocimiento colectiva y transformadora».
                </p>
                <br />
                <p>
                  {" "}
                  La «Alianza por la Innovación Pedagógica con Uso de
                  Tecnologías para la Paz» es una estrategia de colaboración
                  diseñada para facilitar el intercambio de experiencias,
                  conocimientos y tecnologías entre diversos laboratorios de la
                  Universidad Nacional de Colombia. Su objetivo principal es dar
                  visibilidad a los servicios que estos laboratorios ofrecen,
                  así como avanzar en la digitalización de sus procesos de
                  investigación e implementación de herramientas tecnológicas.
                  Esta alianza se basa en la amplia experiencia en docencia,
                  investigación y extensión de sus miembros, centrándose en la
                  construcción y desarrollo de la paz territorial en regiones
                  como Cesar, Amazonia y Cundinamarca. Su propósito fundamental
                  es contribuir a la resolución de las necesidades relacionadas
                  con la construcción de la paz en estos territorios. Entre las
                  soluciones que se buscan implementar se incluyen la creación
                  de contenido temático, el desarrollo de soluciones
                  tecnológicas y estrategias de visibilización de los
                  laboratorios participantes.
                </p>
                <br />
                <p>
                  Esta alianza se basa en la amplia experiencia en docencia,
                  investigación y extensión de sus miembros, centrándose en la
                  construcción y desarrollo de la paz territorial en regiones
                  como Cesar, Amazonia y Cundinamarca. Su propósito fundamental
                  es contribuir a la resolución de las necesidades relacionadas
                  con la construcción de la paz en estos territorios. Entre las
                  soluciones que se buscan implementar se incluyen la creación
                  de contenido temático, el desarrollo de soluciones
                  tecnológicas y estrategias de visibilización de los
                  laboratorios participantes.
                </p>
              </>
            )}
          </div>
          <BtnIcons
            onClick={() => setClosed(!closed)}
            classRight={closed && "rotate-180"}
            className={"bg-ligthAlt3 text-lightPurple  font-bold w-fit"}
            rightIcon={"/icons/arrowFilled.svg"}
          >
            {closed ? "Mostrar más" : "Mostrar menos"}
          </BtnIcons>

          <div>
            <div className="flex gap-[2rem] flex-row flex-wrap h-fit mb-[2rem] justify-start">
              <div className="flex gap-[2rem] flex-col w-[100%] md:w-[40%] grow">
                <Note className={""}>
                  <b>Sede Bogotá</b>
                  <ul className="marker:text-lightPurple list-disc">
                    <li>
                      Laboratorio de innovación, creatividad y nuevas
                      tecnologías -LAB101 UNAL- Facultad de Ingeniería
                    </li>
                    <li>
                      Laboratorio de Fundición y Pulvimetalurgia, Facultad de
                      Ingeniería
                    </li>
                    <li>Laboratorio de imagen digital, Facultad de Artes</li>
                    <li>Laboratorio de Fotografía, Facultad de Artes</li>
                    <li>
                      Laboratorio de Neurociencia Cognitiva y Comunicación,
                      Facultad de Medicina
                    </li>
                  </ul>
                </Note>
                <Note className={" "}>
                  <b>Sede de La Paz</b>
                  <ul className="marker:text-lightPurple list-disc">
                    <li>Laboratorio de paz territorial Sede de la Paz</li>
                  </ul>
                </Note>
              </div>
              <div className="flex gap-[2rem] flex-col w-[100%] md:w-[50%] ">
                <Note className={"basis-1/3 "}>
                  <b>Sede Amazonía</b>
                  <ul className="marker:text-lightPurple list-disc">
                    <li>Laboratorio de Física, Química y Biología</li>
                    <li>Manejo y Gestión de Humedales</li>
                    <li>
                      Ecología y Conservación de la Flora y Fauna Silvestre
                    </li>
                  </ul>
                </Note>
                <Note className={"basis-1/3 "}>
                  <b>Aliados</b>
                  <ul className="marker:text-lightPurple list-disc">
                    <li>División Nacional Universidad Laboratorio</li>
                    <li>Laboratorio de Innovación para la paz</li>
                  </ul>
                </Note>
                <Note className={"basis-1/3 "}>
                  <b>Apoya</b>
                  <ul className="marker:text-lightPurple list-disc">
                    <li>Vórtico SAS - Proyecto spin off UNAL</li>
                  </ul>
                </Note>
              </div>
            </div>
          </div>
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

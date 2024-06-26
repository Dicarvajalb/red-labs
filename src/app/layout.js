"use client";
import Script from "next/script";
import localFont from "next/font/local";

import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useEffect, useState } from "react";
import { baseURL } from "@/variables/env";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <html>
      <head>
        {/*    <!-- 
	 =============================================================================
	 === PLANTILLA DESARROLLADA POR LA OFICINA DE MEDIOS DIGITALES - UNIMEDIOS ===
	 =============================================================================
		-->

    <!-- base href="http://subdominio.unal.edu.co/" --> */}
        <link
          rel="shortcut icon"
          href={baseURL + "/images/favicon.ico"}
          type="image/x-icon"
        />

        <meta charSet="utf-8" />
        <meta name="revisit-after" content="1 hour" />
        <meta name="distribution" content="all" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes"
        />
        <meta name="expires" content="1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="all" />

        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/bootstrap.min.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/bootstrap-theme.min.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/accesibilidad.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/reset.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/unal.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/base.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/tablet.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/phone.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/small.css"}
          media="all"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href={baseURL + "/css/printer.css"}
          media="print"
        />

        {/* <script src="js/jquery.js" type="text/javascript"></script>
    
    <script src="js/unal.js" type="text/javascript"></script> */}
        {/*
     <script type="text/javascript" dangerouslySetInnerHTML={{__html: process.env.rawJsFromFile}}></script> 
 */}
        <title>Tecnologías para La Paz</title>
      </head>

      <body>
        {/* <Script onLoad={(e) => console.log("jquery loaded")} src="js/jquery.js" type="text/javascript" strategy='afterInteractive'></Script>
    <Script onLoad={(e) => console.log("unaljs loaded")} src="js/unal.js" type="text/javascript" strategy='afterInteractive'></Script> */}

        {/*     <script type="text/javascript" dangerouslySetInnerHTML={{__html: process.env.rawJsFromFile}}></script>
         */}

        <div id="services">
          <div className="indicator hidden-xs"></div>
          <ul className="dropdown-menu">
            <li>
              <a href="http://correo.unal.edu.co" target="_blank">
                <img
                  src={baseURL + "/images/icnServEmail.png"}
                  width="32"
                  height="32"
                  alt="Correo Electrónico"
                />
                Correo Electrónico
              </a>
            </li>
            <li>
              <a href="https://dninfoa.unal.edu.co" target="_blank">
                <img
                  src={baseURL + "/images/icnServSia.png"}
                  width="32"
                  height="32"
                  alt="Dirección Nacional de Información Académica"
                />
                DNINFOA - SIA
              </a>
            </li>
            <li>
              <a href="http://bibliotecas.unal.edu.co" target="_blank">
                <img
                  src={baseURL + "/images/icnServLibrary.png"}
                  width="32"
                  height="32"
                  alt="Biblioteca"
                />
                Bibliotecas
              </a>
            </li>
            <li>
              <a href="http://personal.unal.edu.co" target="_blank">
                <img
                  src={baseURL + "/images/icnServCall.png"}
                  width="32"
                  height="32"
                  alt="Convocatorias"
                />
                Convocatorias
              </a>
            </li>
            <li>
              <a href="http://identidad.unal.edu.co">
                <img
                  src={baseURL + "/images/icnServIdentidad.png"}
                  width="32"
                  height="32"
                  alt="Identidad U.N."
                />
                Identidad U.N.
              </a>
            </li>
          </ul>
        </div>
        <header id="unalTop">
          <div className="logo">
            <a href="http://unal.edu.co">
              {/*  <!--[if (gte IE 9)|!(IE)]><!-->
                <svg width="93%" height="93%">
					<image xlink:href="images/escudoUnal.svg" width="100%" height="100%" className="hidden-print"/>
					</svg>

                <!--<![endif]-->
                <!--[if lt IE 9]>
			<img src="images/escudoUnal.png" width="93%" height="auto" className="hidden-print"/> 
	  <![endif]--> */}
              <img
                src={baseURL + "/images/escudoUnal.png"}
                width="93%"
                height="auto"
                className="hidden-print"
              />
              <img
                src={baseURL + "/images/escudoUnal_black.png"}
                className="visible-print"
              />
            </a>
          </div>
          <div className="seal">
            <img
              className="hidden-print"
              alt="Escudo de la República de Colombia"
              src={baseURL + "/images/sealColombia.png"}
              width="66"
              height="66"
            />

            <img
              className="visible-print"
              alt="Escudo de la República de Colombia"
              src={baseURL + "/images/sealColombia_black.png"}
              width="66"
              height="66"
            />
          </div>
          <div className="firstMenu">
            <div className="btn-group languageMenu hidden-xs">
              <div
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                es<span className="caret"></span>
              </div>
              <ul className="dropdown-menu">
                <li>
                  <a href="index.html#">EN - English</a>
                </li>
                <li>
                  <a href="index.html#">GUC - Wayuunaiki</a>
                </li>
                <li>
                  <a href="index.html#">PBB - Nasa yuwe</a>
                </li>
              </ul>
            </div>
            <ul className="socialLinks hidden-xs">
              <li>
                <a
                  href="https://www.facebook.com/UNColombia"
                  target="_blank"
                  className="facebook"
                  title="Página oficial en Facebook"
                ></a>
              </li>
              <li>
                <a
                  href="https://twitter.com/UNColombia"
                  target="_blank"
                  className="twitter"
                  title="Cuenta oficial en Twitter"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
                  target="_blank"
                  className="youtube"
                  title="Canal oficial de Youtube"
                ></a>
              </li>
              <li>
                <a
                  href="http://agenciadenoticias.unal.edu.co/nc/sus/type/rss2.html"
                  target="_blank"
                  className="rss"
                  title="Suscripción a canales de información RSS"
                ></a>
              </li>
            </ul>
            <div className="navbar-default">
              <nav id="profiles">
                <ul className="nav navbar-nav dropdown-menu">
                  <li className="item_Aspirantes #>">
                    <a href="https://aspirantes.unal.edu.co/">Aspirantes</a>
                  </li>
                  <li className="item_Estudiantes #>">
                    <a href="https://estudiantes.unal.edu.co/">Estudiantes</a>
                  </li>
                  <li className="item_Egresados #>">
                    <a href="https://egresados.unal.edu.co/">Egresados</a>
                  </li>
                  <li className="item_Docentes #>">
                    <a href="https://docentes.unal.edu.co/">Docentes</a>
                  </li>
                  <li className="item_Administrativos #>">
                    <a href="https://administrativos.unal.edu.co/">
                      Administrativos
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div
            style={{ backgroundColor: "white" }}
            id="bs-navbar"
            className="navbar-collapse navigation"
          >
            <div className="site-url" style={{ paddingBottom: "50px" }}>
              tecnologiasparalapaz.unal.edu.co
            </div>
          </div>
        </header>

        {/* <!-- Panel de accesibilidad --> */}
        <div className="tx-unal-accesibilidad">
          {/* <!-- defaultpanel --> */}
          <div
            id="panel-accesibilidad"
            style={{ display: "none" }}
            className="panel-content container-fluid"
          >
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 ">
                    <h4>Tamaño letra</h4>
                    <button
                      className="boton-panel"
                      id="letra-disminuir"
                      type="submit"
                      name=""
                      value=""
                    >
                      A<sup>-</sup>
                    </button>
                    <button
                      className="boton-panel"
                      id="letra-aumentar"
                      type="submit"
                      name=""
                      value=""
                    >
                      A<sup>+</sup>
                    </button>
                    <input
                      disabled="1"
                      className="letras-porcentaje"
                      id="letter-percent"
                      type="text"
                      name=""
                      value="100%"
                    />
                  </div>
                  <div className="col-md-3 ">
                    <h4>Cambiar Contrastes</h4>
                    <button
                      className="boton-panel"
                      id="contraste-1"
                      type="submit"
                      name=""
                      value=""
                    >
                      1
                    </button>
                    <button
                      className="boton-panel"
                      id="contraste-2"
                      type="submit"
                      name=""
                      value=""
                    >
                      2
                    </button>
                    <button
                      className="boton-panel"
                      id="contrate-3"
                      type="submit"
                      name=""
                      value=""
                    >
                      3
                    </button>
                  </div>
                  <div className="col-md-3 ">
                    <h4>Invertir colores</h4>
                    <button
                      className="boton-panel"
                      id="inversor"
                      onClick={() => (Loaded ? invertirColores() : "")}
                      type="submit"
                      name=""
                      value=""
                    >
                      Aplicar
                    </button>
                  </div>
                  <div className="col-md-3">
                    <h4>Restablecer ajustes</h4>
                    <button
                      className="boton-panel"
                      id="defaul-config"
                      type="submit"
                      name=""
                      value=""
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- /content wrapper for padding --> */}
        </div>

        <main
          style={{ height: "fit-content", overflowX: "hidden" }}
          id="content__container"
        >
          {/* <!-- <iframe src="/http://localhost:3000/unalab" width="100%" style="height: 100%;"></iframe> --> */}
          {children}
        </main>

        <footer className=" clear ">
          <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea ">
            <a href="http://www.legal.unal.edu.co " target="_top ">
              Régimen Legal
            </a>
            <a href="http://personal.unal.edu.co " target="_top ">
              Talento humano
            </a>
            <a href="http://contratacion.unal.edu.co " target="_top ">
              Contratación
            </a>
            <a href="http://personal.unal.edu.co " target="_top ">
              Ofertas de empleo
            </a>
            <a href="http://rendiciondecuentas.unal.edu.co/ " target="_top ">
              Rendición de cuentas
            </a>
            <a
              href="http://docentes.unal.edu.co/concurso-profesoral/ "
              target="_top "
            >
              Concurso docente
            </a>
            <a href="http://www.pagovirtual.unal.edu.co/ " target="_top ">
              Pago Virtual
            </a>
            <a href="http://controlinterno.unal.edu.co/ " target="_top ">
              Control interno
            </a>
            <a href="http://siga.unal.edu.co " target="_top ">
              Calidad
            </a>
            <a
              href="http://unal.edu.co/buzon-de-notificaciones/ "
              target="_self "
            >
              Buzón de notificaciones
            </a>
          </nav>
          <nav className="col-md-3 col-lg-3 col-sm-3 col-xs-4 col-xxs-6 gobiernoLinea ">
            <a href="http://correo.unal.edu.co " target="_top ">
              Correo institucional
            </a>
            <a>Mapa del sitio</a>
            <a href="http://redessociales.unal.edu.co " target="_top ">
              Redes Sociales
            </a>
            <a>FAQ</a>
            <a href="http://unal.edu.co/quejas-y-reclamos/ " target="_self ">
              Quejas y reclamos
            </a>
            <a href="http://unal.edu.co/atencion-en-linea/ " target="_self ">
              Atención en línea
            </a>
            <a href="http://unal.edu.co/encuesta/ " target="_self ">
              Encuesta
            </a>
            <a>Contáctenos</a>
            <a href="http://www.onp.unal.edu.co " target="_top ">
              Estadísticas
            </a>
            <a>Glosario</a>
          </nav>
          <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-xxs-12 footer-info ">
            <p className="col-sm-12 col-md-6 contacto ">
              <b>Contacto página web:</b>
              <br /> Carrera 59 # 43 - 05
              <br /> Campus Santa Rosa (CAN)
              <br /> Bloque 5.
              <br /> Bogotá D.C., Colombia
              <br /> (+57) 300 568-7569
            </p>
            <p className="col-sm-12 col-md-6 derechos ">
              &copy; Copyright 2024
              <br /> Algunos derechos reservados.
              <br />
              <a
                title="Comuníquese con el administrador de este sitio web "
                href="mailto:lab101_bog@unal.edu.co"
              >
                lab101_bog@unal.edu.co
              </a>
              <br />
              <a href="/nosotros">Acerca de este sitio web</a>
              <br /> Actualización: 30/05/2024
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-sm-2 col-xs-12 logos ">
            <div className="col-xs-6 col-sm-12 col-md-6 no-padding ">
              <a
                className="col-xs-6 col-sm-12 "
                href="http://www.orgulloun.unal.edu.co "
              >
                <img
                  className="hidden-print "
                  alt="Orgullo UN "
                  src={baseURL + "/images/log_orgullo.png "}
                  width="78 "
                  height="21 "
                />
                <img
                  className="visible-print "
                  alt="Orgullo UN "
                  src={baseURL + "/images/log_orgullo_black.png "}
                  width="94 "
                  height="37 "
                />
              </a>

              <a
                className="col-xs-6 col-sm-12 imgAgencia "
                href="http://www.agenciadenoticias.unal.edu.co/inicio.html "
              >
                <img
                  className="hidden-print "
                  alt="Agencia de noticias "
                  src={baseURL + "/images/log_agenc.png "}
                  width="94 "
                  height="25 "
                />
                <img
                  className="visible-print "
                  alt="Agencia de noticias "
                  src={baseURL + "/images/log_agenc_black.png "}
                  width="94 "
                  height="37 "
                />
              </a>
            </div>
            <div className="col-xs-6 col-sm-12 col-md-6 no-padding ">
              <a
                className="col-xs-6 col-sm-12 "
                href="https://www.sivirtual.gov.co/memoficha-entidad/-/entidad/T0356 "
              >
                <img
                  alt="Trámites en línea "
                  src={baseURL + "/images/log_gobiern.png "}
                  width="67 "
                  height="51 "
                />
              </a>

              <a
                className="col-xs-6 col-sm-12 "
                href="http://www.contaduria.gov.co/ "
              >
                <img
                  alt="Contaduría general de la republica "
                  src={baseURL + "/images/log_contra.png "}
                  width="67 "
                  height="51 "
                />
              </a>
            </div>
          </div>
        </footer>

        {
          //<script onLoad={(e) => setLoaded(true)}  src="/js/accesibilidad.js" type="text/javascript" ></script>
        }
      </body>
    </html>
  );
};

export default Layout;

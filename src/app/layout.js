"use client";
import { baseURL } from "@/variables/env";

import { Inter } from "next/font/google";
import { useEffect, useState } from "react";


import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <html>

<head>
  <meta charset="utf-8"/>
 
  <link rel="shortcut icon" href={baseURL+"/images/favicon.ico"} type="image/x-icon"/>

  <meta name="revisit-after" content="1 hour"/>
  <meta name="distribution" content="all"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes"/>
  <meta name="expires" content="1"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="robots" content="all"/>

  <link rel="stylesheet" type="text/css" href={baseURL+"/css/frontend.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/accesibilidad.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/bootstrap.min.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/bootstrap-theme.min.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/reset.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/unal.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/base.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/tablet.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/phone.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/small.css"} media="all"/>
  <link rel="stylesheet" type="text/css" href={baseURL+"/css/printer.css"} media="print"/>

  
  <Script strategy="beforeInteractive" src={baseURL+"/js/jquery.js"} type="text/javascript"></Script>
  <Script strategy="afterInteractive" src={baseURL+"/js/unal.js"} type="text/javascript"></Script>
  <Script strategy="beforeInteractive" src={baseURL+"/js/accesibilidad.js"} type="text/javascript"></Script>
  <Script strategy="beforeInteractive" src={baseURL+"/js/bootstrap.bundle.min.js"} type="text/javascript"></Script>

  <title>Inicio: Universidad Nacional de Colombia</title>
</head>

<body>
  <div id="services">
    <div class="indicator d-none d-md-block"></div>
    <ul class="dropdown-menu" id="servicios">
      <li>
        <a href="http://correo.unal.edu.co" target="_blank"><img
        src={baseURL+"/images/icnServEmail.png"}
        width="32"
        height="32"
        alt="Correo Electrónico"/>Correo Electrónico</a>
      </li>
      <li>
        <a href="https://dninfoa.unal.edu.co" target="_blank"><img
        src={baseURL+"/images/icnServSia.png"}
        width="32"
        height="32"
        alt="Dirección Nacional de Información Académica"/>DNINFOA - SIA</a>
      </li>
      <li>
        <a href="http://bibliotecas.unal.edu.co" target="_blank"><img src={baseURL+"/images/icnServLibrary.png"} width="32" height="32" alt="Biblioteca"/>Bibliotecas</a>
      </li>
      <li>
        <a href="http://personal.unal.edu.co" target="_blank"><img src={baseURL+"/images/icnServCall.png"} width="32" height="32" alt="Convocatorias"/>Convocatorias</a>
      </li>
      <li>
        <a href="http://identidad.unal.edu.co"><img src={baseURL+"/images/icnServIdentidad.png"} width="32" height="32" alt="Identidad UNAL"/>Identidad UNAL</a>
      </li>
    </ul>
  </div>
  <header id="unalTop" style={{zIndex: 40}}>
    <div class="logo">
      <a href="https://unal.edu.co">
        <svg width="93%" height="93%">
          <image
          href={baseURL+"/images/escudoUnal.svg"}
          width="100%"
          height="100%"
          class="hidden-print"
          alt="Escudo de la Universidad Nacional de Colombia"/>
        </svg>

        <img src={baseURL+"/images/escudoUnal_black.png"} class="d-none d-print-block" alt="Escudo de la Universidad Nacional de Colombia"/>
      </a>
    </div>
    <div class="seal">
      <img
      class="hidden-print"
      alt="Escudo de la República de Colombia"
      src={baseURL+"/images/sealColombia.png"}
      width="66"
      height="66"/>

      <img
      class="d-none d-print-block"
      alt="Escudo de la República de Colombia"
      src={baseURL+"/images/sealColombia_black.png"}
      width="66"
      height="66"/>
    </div>

    <div class="firstMenu d-none d-md-block">
      <div class="content-fluid">
        <nav class="navbar navbar-expand-md nav navbar-dark">
          <div class=" collapse navbar-collapse navbar-default" id="navbarSupportedContent">
            <nav id="profiles" >
              <ul class="mr-auto nav justify-content-end">
              
                <li class="nav-item item_Aspirantes #>">
                  <a href="http://aspirantes.unal.edu.co">Aspirantes</a>
                </li>
                <li class="nav-item item_Estudiantes #>">
                  <a href="http://estudiantes.unal.edu.co">Estudiantes</a>
                </li>
                <li class="nav-item item_Egresados #>">
                  <a href="http://egresados.unal.edu.co">Egresados</a>
                </li>
                <li class="nav-item item_Docentes #>">
                  <a href="http://docentes.unal.edu.co">Docentes</a>
                </li>
                <li class="nav-item item_Administrativos #>">
                  <a href="http://administrativos.unal.edu.co">Administrativos</a>
                </li>
              </ul>
            </nav>
          </div>
          <ul class="socialLinks d-none d-md-block">
            <li >
            <a
            href="https://www.facebook.com/UNALOficial"
            target="_blank"
            class="facebook"
            title="Página oficial en Facebook"></a>
            </li>
            <li>
            <a
            href="https://twitter.com/UNALOficial"
            target="_blank"
            class="twitter"
            title="Cuenta oficial en Twitter"></a>
            </li>
            <li>
            <a
            href="https://www.youtube.com/channel/UCnE6Zj2llVxcvL5I38B0Ceg"
            target="_blank"
            class="youtube"
            title="Canal oficial de Youtube"></a>
            </li>
          </ul>
          <div class="collapse btn-group languageMenu d-none d-md-block">
            <div class="btn btn-default dropdown-toggle" data-toggle="dropdown">es<span class="caret"></span></div>
            <ul class="dropdown-menu dropdown-menu-right">
              <li><a href="">EN - English</a></li>
              <li><a href="">GUC - Wayuunaiki</a></li>
              <li><a href="">PBB - Nasa yuwe</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>

    <div id="bs-navbar" class="navigation d-none d-md-block">
      <div class="site-url" id="subdominio">
        <a href="http://tecnologiasparalapaz.unal.edu.co/">tecnologiasparalapaz.unal.edu.co</a>
      </div>
      <div class="buscador" id="buscador">
        <div
        class="gcse-searchbox-only"
        data-resultsurl="https://unal.edu.co/resultados-de-la-busqueda/"
        data-newwindow="true"></div>
      </div>
      <div class="navbar-dark mainMenu" id="main_menu_container">
        <div class="btn-group">
          {/*<div class="btn btn-default dropdown-toggle" data-toggle="dropdown">Sitio<span class="caret"></span></div>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Página 1</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Página 2</a>
            </li>
          </ul>
  */}</div>
        <div class="btn-group" style={{height: "2.5rem"}}>
          {/*<a href="index.html#" class="btn btn-default"></a>*/}
        </div>
        <div class="btn-group menu_sedes">
          <div class="btn btn-default dropdown-toggle" data-toggle="dropdown">Sedes<span class="caret"></span></div>
          <ul class="dropdown-menu" id="sedes">
            <li>
              <a class="dropdown-item" href="http://amazonia.unal.edu.co" target="_blank">Amazonia</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://bogota.unal.edu.co" target="_blank">Bogotá</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://caribe.unal.edu.co" target="_blank">Caribe</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://delapaz.unal.edu.co" target="_blank">De La Paz</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://www.manizales.unal.edu.co" target="_blank">Manizales</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://medellin.unal.edu.co" target="_blank">Medellín</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://orinoquia.unal.edu.co" target="_blank">Orinoquia</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://www.palmira.unal.edu.co" target="_blank">Palmira</a>
              <span class="caret-right"></span></li>
            <li>
              <a class="dropdown-item" href="http://tumaco-pacifico.unal.edu.co" target="_blank">Tumaco</a>
              <span class="caret-right"></span></li>
          </ul>
        </div>
      </div>
      <div class="btn-group d-none">
        <div
          class="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          id="navbarSupportedContent"
          data-target="#services">Servicios<span class="caret"></span>
        </div>
      </div>
      <div class="btn-group d-none">
        <div
          class="btn btn-default dropdown-toggle"
          data-toggle="dropdown"
          id="navbarSupportedContent"
          data-target="#profiles">Perfiles<span class="caret"></span>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-light light-blue lighten-4 main_menu">
      <a class="navbar-brand d-block d-md-none" href="#"></a>

      <button
        class="navbar-toggler collapsed d-block d-md-none"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_content"
        aria-controls="navbar_content"
        aria-expanded="false"
        aria-label="Toggle navigation"
        id="btn_hamburguer">
      </button>

      <div class="collapse navbar-collapse" id="navbar_content" >
        <div class="site-url" id="container_subdominio_mobil"></div>
        <div class="buscador" id="container_buscador_mobil"></div>
        <div id="container_mainmenu_mobil"></div>
        <div class="btn-group d-block d-md-none hidden-print">
    			<div class="btn btn-default dropdown-toggle" data-toggle="collapse" data-target="#container_sedes_mobil" aria-controls="container_sedes_mobil">Sedes<span class="caret"> </span>
    			</div>
    		</div>
        <div class="collapse" id="container_sedes_mobil"></div>

        <div class="btn-group d-block d-md-none hidden-print">
    			<div class="btn btn-default dropdown-toggle" data-toggle="collapse" data-target="#container_servicios_mobil" aria-controls="container_servicios_mobil">Servicios<span class="caret"> </span>
    			</div>
    		</div>
        <div class="collapse" id="container_servicios_mobil"></div>


        <div class="btn-group d-block d-md-none hidden-print">
    			<div class="btn btn-default dropdown-toggle" data-toggle="collapse" data-target="#container_profiles_mobil" aria-controls="container_profiles_mobil">Perfiles<span class="caret"> </span>
    			</div>
    		</div>
        <div class="collapse" id="container_profiles_mobil"></div>

      </div>

    </nav>

  </header>


<div class="tx-unal-accesibilidad">
  <div
    id="panel-accesibilidad"
    style={{"display":"none"}}
    class="panel-content container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3 ">
            <h4>Tamaño letra</h4>
            <button
              class="boton-panel"
              id="letra-disminuir"
              onClick={() => null}
              type="normal"
              name=""
              value="">A<sup>-</sup>
            </button>
            <button
              class="boton-panel"
              id="letra-aumentar"
              onClick={() => null}
              type="normal"
              name=""
              value="">
              A<sup>+</sup>
            </button>
            <input
              disabled="1"
              class="letras-porcentaje"
              id="letter-percent"
              type="text"
              name=""
              value="100%"/>
          </div>
          <div class="col-md-3 ">
            <h4>Cambiar Contrastes</h4>
            <button
              class="boton-panel"
              id="contraste-1"
              onClick={() =>cambiarContrastes(1)}
              type="button"
              name=""
              value="">1
            </button>
            <button
              class="boton-panel"
              id="contraste-2"
              onClick={() => cambiarContrastes(2)}
              type="button"
              name=""
              value="">2
            </button>
            <button
              class="boton-panel"
              id="contrate-3"
              onClick={() => cambiarContrastes(3)}
              type="button"
              name=""
              value="">3
            </button>
          </div>
          <div class="col-md-3 ">
            <h4>Invertir colores</h4>
            <button
              class="boton-panel"
              id="inversor"
              onClick={() => invertirColores()}
              type="button"
              name=""
              value="">Aplicar
            </button>
          </div>
          <div class="col-md-3">
            <h4>Restablecer ajustes</h4>
            <button
              class="boton-panel"
              id="defaul-config"
              onClick={() => defaultConfig()}
              type="button"
              name=""
              value="">
              Aplicar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="pestania-accesibilidad" class="">Panel de Accesibilidad</div>
</div>


  <main class="detalle">
{/*    <div class="breadcrumb-class">Está en:<a href="/" target="_self" title="Inicio">Inicio</a>/<span>Item menu ejemplo</span></div>
*/}    {children}
  </main>

  <footer class="clear container-fluid">
    <div class="row">
      <nav class="col-lg-3 col-md-3 col-sm-4 col-6 gobiernoLinea">
          <a href="http://www.legal.unal.edu.co" target="_top">Régimen Legal</a>
          <a href="http://personal.unal.edu.co" target="_top">Talento humano</a>
          <a href="https://portaladquisiciones.unal.edu.co/" target="_top">Contratación</a>
          <a href="http://personal.unal.edu.co" target="_top">Ofertas de empleo</a>
          <a href="http://launalcuenta.unal.edu.co/" target="_top">Rendición de cuentas</a>
          <a href="http://docentes.unal.edu.co/concurso-profesoral/" target="_top">Concurso docente</a>
          <a href="http://www.pagovirtual.unal.edu.co/" target="_top">Pago Virtual</a>
          <a href="http://controlinterno.unal.edu.co/" target="_top">Control interno</a>
          <a href="http://siga.unal.edu.co" target="_top">Calidad</a>
          <a href="http://unal.edu.co/buzon-de-notificaciones/" target="_self">Buzón de notificaciones</a>
      </nav>
      <nav class="col-lg-3 col-md-3 col-sm-4 col-6 gobiernoLinea">
          <a href="http://correo.unal.edu.co" target="_top">Correo institucional</a>
          <a href={baseURL+"/mapa-sitio"}>Mapa del sitio</a>
          <a href="http://redessociales.unal.edu.co" target="_top">Redes Sociales</a>
          <a href="https://unal.edu.co/faq">FAQ</a>
          <a href="https://quejasyreclamos.unal.edu.co/" target="_self">Quejas y reclamos</a>
          <a href="http://unal.edu.co/atencion-en-linea/" target="_self">Atención en línea</a>
          <a href="https://unal.edu.co/egresados" target="_self">Encuesta</a>
          <a href="https://unal.edu.co/contactenos">Contáctenos</a>
          <a href="http://estadisticas.unal.edu.co/" target="_top">Estadísticas</a>
          <a href="https://unal.edu.co/glosario">Glosario</a>
      </nav>
      <div class="col-lg-4 col-md-4 col-sm-4 col-12 footer-info">
        <div class="row footer-info-spacing">
          <p class="col-lg-6 col-md-12 col-sm-12 col-6 contacto">
            <b>Contacto página web:</b><br/>
            59 # 43 - 05<br/>
            Campus Santa Rosa (CAN)<br/>
            Bloque 5<br/>
            Bogotá D.C., Colombia<br/>
            (+57) 300 568-7569
          </p>
          <p class="col-lg-6 col-md-12 col-sm-12 col-6 derechos">
            <a href="https://unal.edu.co/fileadmin/user_upload/docs/legal.pdf" target="_blank">&copy; Copyright 2024</a><br/>
            Algunos derechos reservados.<br/>
            <a
            title="Comuníquese con el administrador de este sitio web"
            href="mailto:lab101_bog@unal.edu.co">lab101_bog@unal.edu.co</a><br/>
            <a href="index.html#">Acerca de este sitio web</a><br/>
            Actualización:17/07/24
          </p>
        </div>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-12 col-12 logos">
        <div class="row px-3">
          <div class="col-lg-6 col-md-12 col-sm-6 col-6 no-padding">
            <div class="row mx-1">
              <a class="col-md-12 col-sm-6 col-6" href="http://orgullo.unal.edu.co">
                <img
                class="hidden-print"
                alt="Orgullo UN"
                src={baseURL+"/images/log_orgullo.png"}
                width="78"
                height="21"/>
                <img
                class="d-none d-print-block"
                alt="Orgullo UN"
                src={baseURL+"/images/log_orgullo_black.png"}
                width="94"
                height="37"/>
              </a>
              <a class="col-md-12 col-sm-6 col-6 imgAgencia"
                href="http://agenciadenoticias.unal.edu.co">
                <img
                class="hidden-print"
                alt="Agencia de Noticias"
                src={baseURL+"/images/log_agenc.png"}
                width="94"
                height="25"/>
                <img
                class="d-none d-print-block"
                alt="Agencia de Noticias"
                src={baseURL+"/images/log_agenc_black.png"}
                width="94"
                height="37"/>
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-6 col-6 no-padding">
            <div class="row mx-1">
              <a class="col-md-12 col-sm-6 col-6"
                href="https://www.gov.co/">
                <img
                alt="Portal Único del Estado Colombiano"
                src={baseURL+"/images/log_gobiern.png"}
                width="67"
                height="51"/>
              </a>
              <a class="col-md-12 col-sm-6 col-6" href="http://www.contaduria.gov.co/">
                <img
                alt="Contaduría General de la República"
                src={baseURL+"/images/log_contra.png"}
                width="67"
                height="51"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  
</body>

</html>
  );
};

export default Layout;

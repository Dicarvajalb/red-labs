"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../helpers/isomorphicEffect";
import GlobalLayout from "@/Components/GlobalLayout";
import BtnAmazonia from "@/Components/BtnAmazonia";
import BtnLaPaz from "@/Components/BtnLaPaz";
import Image from "next/image";

export function moveMarker() {
  var targetPos = document
    .getElementsByClassName("amazonia_svg")[0]
    ?.getClientRects()[0];
  var selfPos = document
    .getElementsByClassName("btn__amazonia")[0]
    ?.getClientRects()[0];

  console.log("[target pos]", targetPos);

  var tMoveMarker = gsap.timeline();
  if (targetPos && selfPos) {
    tMoveMarker.add(
      gsap.to(".btn__amazonia", { transformOrigin: "100% 50%", duration: 0 }),
      0
    );
    tMoveMarker.add(
      gsap.to(".btn__amazonia", {
        top:
          targetPos.top +
          window.scrollY -
          selfPos.height +
          targetPos.height / 3,
        duration: 0,
      }),
      0
    );
    tMoveMarker.add(
      gsap.to(".btn__amazonia", {
        left: targetPos.left - selfPos.width / 2 + targetPos.width / 2,
        duration: 0,
      }),
      0
    );
  }
  var targetPos = document
    .getElementsByClassName("cesar_svg")[0]
    .getClientRects()[0];
  if (targetPos && selfPos) {
    tMoveMarker.add(
      gsap.to(".btn__lapaz", { transformOrigin: "100% 50%", duration: 0 }),
      0
    );
    tMoveMarker.add(
      gsap.to(".btn__lapaz", {
        top:
          targetPos.top +
          window.scrollY -
          selfPos.height +
          targetPos.height / 3,
        duration: 0,
      }),
      0
    );
    tMoveMarker.add(
      gsap.to(".btn__lapaz", {
        left: targetPos.left - selfPos.width / 2 + targetPos.width / 2,
        duration: 0,
      }),
      0
    );
  }
  return tMoveMarker;
}
export function moveDecoration() {
  var targetPos = document
    .getElementsByClassName("svg__map")[0]
    ?.getClientRects()[0];
  var selfPos = document
    .getElementsByClassName("decoration__map")[0]
    ?.getClientRects()[0];

  console.log("[target pos]", targetPos);

  var tMoveMarker = gsap.timeline();
  if (targetPos && selfPos) {
    tMoveMarker.add(
      gsap.to(".decoration__map", {
        top:
          targetPos.top +
          window.scrollY -
          selfPos.height / 2 +
          targetPos.height / 2,
        duration: 0,
      }),
      0
    );
    tMoveMarker.add(
      gsap.to(".decoration__map", {
        left: targetPos.left - selfPos.width / 2 + targetPos.width / 2,
        duration: 0,
      }),
      0
    );
  }

  return tMoveMarker;
}
export function initialState() {
  moveMarker();
  moveDecoration();
}

export function initialAnim() {
  gsap.set([".btn__amazonia", ".btn__lapaz"], { scale: 0, duration: 0 });
  gsap.to(".btn__lapaz", { scale: 1, duration: 1 });
  gsap.to(".btn__amazonia", { scale: 1, duration: 1 });
  gsap.set(".amazonia_svg", { x: 0 });
}

export default function Home() {
  const amazonasRef = useRef();
  const noInteractiveRef = useRef();

  const ref = useRef();

  var [body, setBody] = useState();
  function updateBody() {
    setBody(document.getElementById("body_id"));
    console.log(document.getElementById("body_id"));
  }
  useEffect(() => {
    if (ref.current) {
      setBody(ref.current.contentDocument.getElementById("body_id"));
      console.log(ref.current.contentDocument.getElementById("body_id"));
    }
  }, [ref]);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", moveMarker);
    window.addEventListener("resize", moveDecoration);
    initialState();
    initialAnim();
  }, []);
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "";
  return (
    <>
      <GlobalLayout
        title={"Viaje hacia la construcción de entornos pacíficos y autónomos"}
      >
        <div className="absolute overflow-hidden w-0 lg:w-fit top-[10rem] left-[1rem] text-white text-">
          <Image
            alt="red de laboratorios ícono"
            className="mx-auto  "
            src={baseURL + "/icons/rltp.svg"}
            width={"70"}
            height={"70"}
          ></Image>
          <h3 className="mx-auto w-fit">RED DE LABORATORIOS</h3>
          <h3 className="mx-auto w-fit">TECNOLOGÍAS PARA LA PAZ</h3>
        </div>
      </GlobalLayout>
      <Image
        alt="decoración de mapa"
        className="decoration__map absolute w-[30rem] lg:w-[50rem] xl:w-[60rem] z-0"
        src={baseURL + "/svg/decorationMap.svg"}
        width={500}
        height={500}
      />

      <BtnAmazonia />
      <BtnLaPaz />
    </>
  );
}

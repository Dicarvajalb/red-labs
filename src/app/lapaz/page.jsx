"use client";
import { gsap } from "gsap";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../../helpers/isomorphicEffect";
import GlobalLayout from "@/Components/GlobalLayout";
import PreviusPageButton from "@/Components/PreviusPageButton";
import Image from "next/image";
import BtnIcons from "@/Components/BtnIcons";

export function initialState() {}

export function initialAnim(params, router) {
  const tMap = gsap.timeline({
    paused: true,
    onReverseComplete: () => router.push("/"),
  });

  //containers
  gsap.set([".btn__amazonia", ".btn__lapaz"], { opacity: 0, duration: 0.5 });

  tMap.add(gsap.to(".decoration__map", { opacity: "0", duration: 0.5 }), 0);
  tMap.add(
    gsap.to(".decoration__map", { display: "none", duration: 0 }),
    "+=0"
  );

  tMap.add(gsap.to(".conatiner__buttons", { opacity: "0", duration: 0.5 }), 0);
  tMap.add(
    gsap.to(".conatiner__buttons", { display: "none", duration: 0 }),
    "+=0"
  );

  tMap.add(gsap.to(".container__links", { opacity: "0", duration: 0.5 }), 0);
  tMap.add(
    gsap.to(".container__links", { width: "0", zIndex: 10, duration: 0.5 }),
    "+=0"
  );
  tMap.add(
    gsap.to(".container__links", { display: "none", duration: 0 }),
    "+=0"
  );

  tMap.add(gsap.to(".container__map", { width: "100%", duration: 1 }), "+=0");
  tMap.add(
    gsap.to(".container__description", { width: "50rem", duration: 1 }),
    "<"
  );
  tMap.add(
    gsap.to(".container__description", { opacity: 1, duration: 1 }),
    "+=0"
  );
  tMap.add(gsap.to(".button_back", { opacity: 1, duration: 0.5 }), "<");

  tMap.add(gsap.to(".links_container", { width: "0%", duration: 1 }), 0);
  tMap.add(
    gsap.to(".cesar_svg", { transformOrigin: "40% 10%", duration: 1 }),
    0
  );

  tMap.add(gsap.to(".cesar_svg", { scale: 5, zIndex: 10, duration: 1 }), 0);

  tMap.add(
    gsap.to([".map_svg>:not(.cesar_svg)"], {
      position: "absolute",
      scale: 0,
      duration: 0.5,
    }),
    0
  );

  tMap.add(
    gsap.to(".button_amazonia", {
      display: "absolute",
      top: "-100px",
      duration: 0,
    }),
    0
  );
  tMap.add(
    gsap.to(".button_amazonia", {
      display: "absolute",
      top: "-100px",
      duration: 0,
    }),
    0
  );

  if (params.get("forward") == 0) {
    tMap.duration(0);
  }

  return tMap;
}

export default function Home(props) {
  useEffect(() => {
    if (props.router) {
      console.log(props.router.query.name);
    }
  }, [props.router]);

  const router = useRouter();
  const [timeline, setTimeline] = useState(null);
  const params = useSearchParams();

  const handleBack = () => {
    timeline.duration(timeline.totalDuration());
    timeline.reverse();
  };

  useEffect(() => {
    const tMap = initialAnim(params, router);
    tMap.play();
    setTimeline(tMap);
  }, []);

  return (
    <>
      <GlobalLayout
        title={"La Paz"}
        subtitle={
          "Viaje hacia la construcción de entornos pacíficos y autónomos"
        }
        PrevButton={<PreviusPageButton handleBack={handleBack} />}
      >
        <div
          className={
            "container__description mt-[2rem]  w-[0rem] max-w-[100vw] overflow-hidden flex flex-col justify-center items-center h-full " +
            "lg:mt-[0]"
          }
        >
          <div
            className={
              "w-[100%] px-[1rem] flex flex-col gap-[2rem] " + "lg:w-[50%]"
            }
          >
            <div className="flex  flex-row justify-end items-center">
              <Image
                alt="recorrido virtual imagen"
                className="w-[0] sm:w-[100px] me-[-80px] z-10"
                width={"100"}
                height={"100"}
                src={"/icons/3dpath.svg"}
              />
              <BtnIcons
                leftIcon={"/icons/3dpath.svg"}
                classLeft={"h-auto sm:h-[0] "}
                rightIcon={"/svg/play.svg"}
                href={"http://34.30.104.216/recorrido/"}
                className={
                  "w-[100%] bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple  gap-4 " +
                  "lg:w-[100%]"
                }
              >
                {"Inicia el recorrido 3D"}
              </BtnIcons>
            </div>
            <p className="text-white text-2xl mb-10">
              <b>Conflictos ambientales, territoriales y migratorios</b>
              <br></br>
              Exposición virtual sobre paz territorial: Explorando caminos hacia
              la convivencia sostenible en regiones afectadas por conflictos.
            </p>
            <BtnIcons
              rightIcon={"/svg/externalFilled.svg"}
              className={
                "w-[100%] bg-ligthAlt2 text-lightPurple font-bold hover:text-lightPurple self-end " +
                "lg:w-[15rem]"
              }
            >
              Aprende más
            </BtnIcons>
          </div>
        </div>
      </GlobalLayout>
    </>
  );
}

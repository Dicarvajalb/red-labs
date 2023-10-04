
export const galeryData = [
    {top: (targetPos, selfPos) => targetPos.top + targetPos.height/4 - selfPos.height, left: (targetPos, selfPos) =>  targetPos.left + targetPos.width/2 - selfPos.width/2, className: "ubication_btn1", url: "/galeria/0"},
    {top: (targetPos, selfPos) => targetPos.top + targetPos.height/2 - selfPos.height, left: (targetPos, selfPos) =>  targetPos.left + targetPos.width/2 - selfPos.width/2, className: "ubication_btn2", url: "/galeria/1"},
    {top: (targetPos, selfPos) => targetPos.top + targetPos.height/1.2 - selfPos.height, left: (targetPos, selfPos) =>  targetPos.left + targetPos.width/1.2 - selfPos.width/2, className: "ubication_btn3", url: "/galeria/2"},
  ]
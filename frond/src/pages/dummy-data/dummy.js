import { v4 as uuidv4 } from "uuid";

const places = [
  {
    title: "Testour",
    description:
      "Ce spot est situé à Beni Khiar, Nabel. Si vous souhaitez camper dans un seul endroit de ce pays, cette forêt pourrait être l'une de vos meilleures options.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12821.071235850957!2d9.435088574795058!3d36.54765511838288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fc966d811c57e3%3A0x9298200b05f22d60!2sTestour!5e0!3m2!1sfr!2stn!4v1653264138783!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Testour-Beja-768x576.jpg",
    id: uuidv4(),
  },
  {
    title: "Ghabet Elbondek",
    description:
      "Envie de passer un week-end proche de la nature et de découvrir un nouveau lieu magnifique ? Camper au bord de la rivière Mejerda serait une expérience unique. La rivière Mejerda coule du nord-est de l'Algérie à travers la Tunisie et constitue le plus grand fournisseur d'eau de la Tunisie.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25670.465756101956!2d10.76539965946079!3d36.46219073621686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302a2a1833f825b%3A0xaf524255bf99ebc0!2sBeni%20Khiar!5e0!3m2!1sfr!2stn!4v1653262573127!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Ghabet-El-Bondek.jpg",
    id: uuidv4(),
  },
  {
    title: "Cape Angela",
    description:
      "Le Cap Angèle est un promontoire rocheux de Bizerte. C'est le point le plus septentrional du continent africain. L’endroit est très apprécié des amateurs de camping, rendez-vous service et campez-y, vous ne le regretterez pas.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1585.9245170739382!2d9.74182159830271!3d37.346082602395626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e31a6bc815afeb%3A0xd8c4d62975d25e45!2zQ2FwIEFuZ2VsYSAtINix2KPYsyDYo9mG2KzZhNip!5e0!3m2!1sfr!2stn!4v1653264410283!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Cape-Angela-Da-Landa-768x576.jpg",
    id: uuidv4(),
  },
  {
    title: "El Mgasseb",
    description:
      "Situé à Beja, El Mgasseb est l'un des plus beaux spots vierges pour camper en Tunisie. Vous ferez l'expérience d'une sérénité et d'une tranquillité que vous ne trouverez nulle part ailleurs.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2590.866527793518!2d8.95290881910968!3d37.065661205534845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e4b1abbd78e779%3A0xb91b1546083dc8bf!2zRUwgTUdBU0VCINin2YTZhdmC2KfYtdio!5e1!3m2!1sfr!2stn!4v1653264668015!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/El-Mgasseb-1024x1024.jpg",
    id: uuidv4(),
  },
  {
    title: "Bni Mtir",
    description:
      "Attraction de camping populaire, Bnir Mtir est une petite ville située à Ain Drahem, Jendouba. Il est assez bien connu des amateurs de camping. Vous pouvez séjourner dans une zone entièrement entourée par le barrage. Essayez de dépasser cela.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10407.612407142582!2d8.72700682489455!3d36.7413253244425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fb3be810b848c7%3A0x5c9b4e0888055974!2sBeni%20M%60Tir!5e1!3m2!1sfr!2stn!4v1653264787910!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Bni-Mtir.jpg",
    id: uuidv4(),
  },
  {
    title: "Kaf Abbed",
    description:
      "Ce sport est situé à Bizerte. Tout est beau à Kef Abed : le ciel nocturne et l'atmosphère relaxante. Y camper est une expérience unique dans la vie.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20671.599657839026!2d9.432845165150628!3d37.26768719430593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e36a05798d4721%3A0x52a36049b2cfa957!2sKef%20Abed!5e1!3m2!1sfr!2stn!4v1653265004323!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Kef-Abed-768x512.jpg",
    id: uuidv4(),
  },
  {
    title: "Critique de Robinson",
    description:
      "La Crique de Robinson est située à Nabel et constitue une attraction populaire en Tunisie, surtout en été. Faites-vous une faveur et campez-y.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2598.355401744908!2d10.572853014642037!3d36.84584997282959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2aadffa0df93f%3A0xb057d5089696d9e7!2sLa%20Crique%20De%20Robinson!5e1!3m2!1sfr!2stn!4v1653265159981!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/La-Crique-de-Robinson--768x492.jpg",
    id: uuidv4(),
  },
  {
    title: "Cape Serat",
    description:
      "Le Cap Serrat est véritablement l'un des joyaux cachés de la Tunisie ; peu de gens savent à quel point il est facile de prendre une tente et d'y camper. C'est probablement la plus belle partie du littoral de Bizerte.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10339.59681167365!2d9.208745225153134!3d37.24001621046271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e35fa12d665671%3A0xe3be836750dbee43!2sCap%20Serrat!5e1!3m2!1sfr!2stn!4v1653265300718!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Cape-serrat-Tunisia.jpg",
    id: uuidv4(),
  },
  {
    title: "Port aux Princes",
    description:
      "Port aux princes est un peu plus proche de Tunis. C’est une zone sur la côte de Nabel, bordée de camps directement sur la plage.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.4716847837312!2d10.670283414643139!3d36.879062770957376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d5449c879be4d%3A0x31595455e56f8679!2sPort%20aux%20Princes!5e0!3m2!1sfr!2stn!4v1653265447079!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Takelsa-819x1024.jpg",
    id: uuidv4(),
  },
  {
    title: "El Rtiba",
    description:
      "Un autre beau camping sportif, El Rtiba situé à Nabel, est un endroit sympa pour camper et vous pourrez voir des paysages très impressionnants.",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204243.51432355292!2d10.496492385864261!3d36.88305331840381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131d519760f370ef%3A0xfd318dea22d07922!2sRtiba%20Lovers!5e0!3m2!1sfr!2stn!4v1653265604550!5m2!1sfr!2stn",
    imageUrl:
      "https://carthagemagazine.com/wp-content/uploads/2020/09/Rtiba-Tunisia-768x576.jpg",
    id: uuidv4(),
  },
];

export default places;

//Criação de uma timeline do GSAP com animações sincronizadas com o scroll

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true, //DEPURAÇÃO
  },
})

tl.to(
  "#fanta",
  {
    top: "120%", // Move o elemento com id fanta para 120% do topo
    left: "0%", // Move o elemento com id fanta para 0% da esquerda
  },
  "orange",
) //Nomeando este trecho de animação como "orange" para sincronização

tl.to(
  "#sliced-orange",
  {
    top: "160%",
    left: "23%",
    rotate: "300deg",
  },
  "orange",
)

tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange",
)

tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "480deg",
    left: "70%",
  },
  "orange",
)

tl.to(
  "#leaf-2",
  {
    top: "110%",
    rotate: "280deg",
    left: "0%",
  },
    "orange",
)

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "20% 95%",
    end: "45% 50%",
    scrub: true,
    markers: true, //DEPURAÇÃO
  },
})

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca",
)

tl2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca",
)

tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca",
)

tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca",
)

tl2.to(
  "#sliced-orange",
  {
    width: "18%",
    top: "204%",
    left: "41%",
  },
  "orange",
)


tl2.to(
  "#fanta",
  {
    top: "210%",
    left: "30%",
  },
  "orange",
)


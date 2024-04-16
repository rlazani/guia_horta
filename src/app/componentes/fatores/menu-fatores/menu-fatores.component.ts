import { Component, Input, OnInit } from "@angular/core";
import { Fator } from "../fator";

@Component({
  selector: "app-menu-fatores",
  templateUrl: "./menu-fatores.component.html",
  styleUrls: ["./menu-fatores.component.css"],
})
export class MenuFatoresComponent implements OnInit {
  objetoPai?: Fator;
  fichaAberta = false;
  abrirFicha(item: Fator) {
    this.objetoPai = item;
    console.log(this.objetoPai);
    this.fichaAberta = true;
  }
  listaFatores: Fator[] = [
    {
      id: 1,
      titulo: "Espaçamento",
      par1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par3: "",
      img: "../../../../assets/img/header.jpg",
    },
    {
      id: 2,
      titulo: "Solo",
      par1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      img: "../../../../assets/img/solo.jpeg",
    },
    {
      id: 3,
      titulo: "Iluminação",
      par1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      img: "../../../../assets/img/iluminacao.jpg",
    },
    {
      id: 4,
      titulo: "Irrigação",
      par1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      img: "../../../../assets/img/irrigacao.jpg",
    },
    {
      id: 5,
      titulo: "Pragas",
      par1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      par3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, nesciunt. Sed, at voluptatum vero eos ex ad temporibus quos blanditiis veniam, laudantium accusantium iure, dolorem eveniet corporis! Exercitationem, sint aliquid.",
      img: "../../../../assets/img/pragas.jpg",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

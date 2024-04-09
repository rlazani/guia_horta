import { Component, Input, OnInit } from "@angular/core";
import { Fator } from "../fator";

@Component({
  selector: "app-menu-fatores",
  templateUrl: "./menu-fatores.component.html",
  styleUrls: ["./menu-fatores.component.css"],
})
export class MenuFatoresComponent implements OnInit {
  abrirFicha(item: Fator) {
    console.log(item);
  }
  listaFatores: Fator[] = [
    {
      id: 1,
      titulo: "Espaçamento",
      par1: "",
      par2: "",
      par3: "",
    },
    {
      id: 2,
      titulo: "Solo",
      par1: "",
      par2: "",
      par3: "",
    },
    {
      id: 3,
      titulo: "Iluminação",
      par1: "",
      par2: "",
      par3: "",
    },
    {
      id: 4,
      titulo: "Irrigação",
      par1: "",
      par2: "",
      par3: "",
    },
    {
      id: 5,
      titulo: "Pragas",
      par1: "",
      par2: "",
      par3: "",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

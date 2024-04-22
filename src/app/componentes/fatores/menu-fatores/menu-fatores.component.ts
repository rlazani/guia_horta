import { Component, OnInit } from "@angular/core";
import { Fator } from "../fator";
import { FatorService } from "../fator.service";

@Component({
  selector: "app-menu-fatores",
  templateUrl: "./menu-fatores.component.html",
  styleUrls: ["./menu-fatores.component.css"],
  providers: [FatorService],
})
export class MenuFatoresComponent implements OnInit {
  objetoPai?: Fator;
  fichaAberta = false;
  abrirFicha(item: Fator) {
    this.objetoPai = item;
    this.fichaAberta = true;
  }
  listaFatores?: Fator[];
  constructor(private fatorService: FatorService) {}

  ngOnInit(): void {
    this.listaFatores = this.fatorService.getListaFatores();
  }
}

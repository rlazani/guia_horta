import { Component, OnInit } from "@angular/core";
import { Fator } from "../fator";
import { FatorService } from "../fator.service";

@Component({
  selector: "app-m",
  templateUrl: "./menu-fatores.component.html",
  styleUrls: ["./menu-fatores.component.css"],
  providers: [FatorService],
})
export class MenuFatoresComponent implements OnInit {
  objetoPai?: Fator;
  fichaAberta = false;
  abrirFicha(item: Fator) {
    //Será necessário criar um service com valor boleano para fechar a ficha
    this.fichaAberta = true;
    //Emitindo o evento para o subscriber escutar
    this.fatorService.fichaSelecionada.emit(item);
  }
  atualizarAberturaFicha() {
    this.fichaAberta = false;
  }
  listaFatores?: Fator[];
  constructor(private fatorService: FatorService) {}

  ngOnInit(): void {
    this.listaFatores = this.fatorService.getListaFatores();
    this.fatorService.fichaSelecionada.subscribe((itensFicha: Fator) => {
      this.objetoPai = itensFicha;
    });
  }
}

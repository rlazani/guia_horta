import { Component, OnInit } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";

@Component({
  selector: "app-menu-catalogo",
  templateUrl: "./menu-catalogo.component.html",
  styleUrls: ["./menu-catalogo.component.css"],
})
export class MenuCatalogoComponent implements OnInit {
  // Ficha:

  fichaAberta = false;

  objetoPai?: Item;

  abrirFicha(item: Item) {
    //Propriedade com valor boleano para fechar a ficha
    this.fichaAberta = true;
    //Emitindo o evento para o subscriber escutar
    this.itemService.fichaSelecionada.emit(item);
    this.itensAberto = false;
    console.log(item);
  }

  atualizarAberturaFicha() {
    this.fichaAberta = false;
    this.itensAberto = true;
  }

  //  Lista de itens:

  itensAberto = true;

  itens!: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itens = this.itemService.getItens();
    this.itemService.fichaSelecionada.subscribe((itensFicha: Item) => {
      this.objetoPai = itensFicha;
    });
  }
}

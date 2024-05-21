import { Component, OnInit } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";

@Component({
  selector: "app-menu-catalogo",
  templateUrl: "./menu-catalogo.component.html",
  styleUrls: ["./menu-catalogo.component.css"],
})
export class MenuCatalogoComponent implements OnInit {
  objetoPai?: Item;

  abrirFicha(item: Item) {
    //Será necessário criar um service com valor boleano para fechar a ficha
    this.fichaAberta = true;
    //Emitindo o evento para o subscriber escutar
    this.itemService.fichaSelecionada.emit(item);
    console.log(item);
  }

  fichaAberta = true;

  itens!: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itens = this.itemService.getItens();
  }
}

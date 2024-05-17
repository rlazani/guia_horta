import { Component, OnInit } from "@angular/core";
import { Item } from "../item.model";
import { ItemService } from "../item.service";

@Component({
  selector: "app-menu-catalogo",
  templateUrl: "./menu-catalogo.component.html",
  styleUrls: ["./menu-catalogo.component.css"],
})
export class MenuCatalogoComponent implements OnInit {
  itens!: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itens = this.itemService.getItens();
  }
}

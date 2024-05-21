import { Component, Input, OnInit } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-itens",
  templateUrl: "./itens.component.html",
  styleUrls: ["./itens.component.css"],
})
export class ItensComponent implements OnInit {
  @Input()
  catalogo_item!: Item;

  constructor() {}

  ngOnInit(): void {}
}

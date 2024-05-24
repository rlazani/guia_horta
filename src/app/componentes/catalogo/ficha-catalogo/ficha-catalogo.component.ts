import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Item } from "../item.model";

@Component({
  selector: "app-ficha-catalogo",
  templateUrl: "./ficha-catalogo.component.html",
  styleUrls: ["./ficha-catalogo.component.css"],
})
export class FichaCatalogoComponent implements OnInit {
  @Input() objetoFilho: Item | undefined;

  constructor() {}

  ngOnInit(): void {}

  @Output() fecharClicado = new EventEmitter<void>();

  fecharFicha() {
    this.fecharClicado.emit();
  }
}

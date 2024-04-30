import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Fator } from "../fator";

@Component({
  selector: "app-ficha",
  templateUrl: "./ficha.component.html",
  styleUrls: ["./ficha.component.css"],
})
export class FichaComponent implements OnInit {
  @Input() objetoFilho: Fator | undefined;

  ngOnInit(): void {}

  @Output() fecharClicado = new EventEmitter<void>();

  fecharFicha() {
    this.fecharClicado.emit();
  }
}

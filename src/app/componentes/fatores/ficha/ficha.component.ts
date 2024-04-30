import { Component, Input, OnInit } from "@angular/core";
import { Fator } from "../fator";
import { FatorService } from "../fator.service";

@Component({
  selector: "app-ficha",
  templateUrl: "./ficha.component.html",
  styleUrls: ["./ficha.component.css"],
})
export class FichaComponent implements OnInit {
  @Input() objetoFilho: Fator | undefined;

  constructor(private fatorService: FatorService) {}

  ngOnInit(): void {}

  fecharFicha() {
    console.log("fechando ficha");
    this.fatorService.mudarAbertura();
  }
}

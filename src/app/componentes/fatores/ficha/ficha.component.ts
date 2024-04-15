import { Component, Input, OnInit } from "@angular/core";
import { Fator } from "../fator";

@Component({
  selector: "app-ficha",
  templateUrl: "./ficha.component.html",
  styleUrls: ["./ficha.component.css"],
})
export class FichaComponent implements OnInit {
  @Input() objetoFilho: Fator | undefined;

  constructor() {}

  ngOnInit(): void {}
}

import { EventEmitter, Injectable } from "@angular/core";
import { Item } from "./item.model";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ItemService {
  itens: Item[] = [
    { name: "alface", description: "verdura", imagePath: "none" },
    { name: "brócolis", description: "verdura", imagePath: "none" },
    { name: "cenoura", description: "verdura", imagePath: "none" },
  ];
  getItens() {
    return this.itens.slice(); // Simulando um retorno de Observable
  }

  fichaSelecionada = new EventEmitter<Item>();
}

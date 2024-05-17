import { Injectable } from "@angular/core";
import { Item } from "./item.model";

@Injectable()
export class ItemService {
  itens: Item[] = [
    { name: "alface", description: "verdura", imagePath: "none" },
    { name: "brócolis", description: "verdura", imagePath: "none" },
    { name: "cenoura", description: "verdura", imagePath: "none" },
  ];
  getItens() {
    return this.itens.slice();
  }
}

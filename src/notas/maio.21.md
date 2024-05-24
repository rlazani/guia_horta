## Dia 21/05:

## Software: Guia da Horta

## Funcionalidade: Lista que mostra itens do catalogo.

Existe a pasta 'catalogo' que contém os seletores dos componentes que renderizam os itens do catalogo.
O componente pai é o menu-catalogo. Esse componente contém o componete itens e o componente ficha-catalogo.

O ngFor é uma diretiva estrutural que permite iterar sob o array itens e gerar uma instancia do app-itens para cada elemento da lista.

O "[]" representa a vinculação de propriedade (property biding). O catalogo-item é uma propriedade do elemento app-itens e recebe uma instancia de cade elemento do array itens.

O "()" representa a vinculação de eventos (event biding).
Nesse caso, o click é o evento do DOM que está sendo escutado. Quando ocorreu um clique no componente, a função abrirFicha é executada.

```ts

  <app-itens
    *ngFor="let item of itens"
    [catalogo_item]="item"
    (click)="abrirFicha(item)"
  >
  </app-itens>


```

Aqui ocorre uma injeção de dependencia do serviço ItemService através do construtor. Através do inicializador ngOnInit() é chamado getItens disponibilizado pelo serviço e o array é preenchido com os objetos correspondentes.

```ts
itens!: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.itens = this.itemService.getItens();
  }


```

```ts
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
}
```

No Componente itens.ts é apenas necessário inicializar a propriedade itens:

```ts
@Input()
  catalogo_item!: Item;
```

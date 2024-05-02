## Dia 29/04:

## Software: Guia da Horta

## Funcionalidade: Clique para fechar ficha.

Existe a página 'fatores' que é gerada pelo componente menu-fatores
que inicialmente renderiza um menu com os fatores através do componente fator. Quando esse fator é clicado, é aberto uma ficha
correspondente através do componente ficha

Quando o svg no componente ficha é clicado, ele aciona o função
'fecharFicha()'. Essa função irá emitir o objeto 'fecharClicado', que por sua vez será recebido pelo componente menu-fatores.
Quando esse componente receber essa variável ele irá acionar a
função "atualizarAberturaFicha()" que irá mudar o valor da variável de abertura da ficha para false.

```ts

 <svg
        (click)="fecharFicha()"
        width="800px"
        height="800px"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

@Output() fecharClicado = new EventEmitter<void>();

  fecharFicha() {
    this.fecharClicado.emit();
  }



```

```ts
<section class="b">
  <app-fator
    *ngFor="let item_lista of listaFatores"
    [fator_item]="item_lista"
    (click)="abrirFicha(item_lista)"
  ></app-fator>
</section>
<app-ficha
  *ngIf="fichaAberta"
  [objetoFilho]="objetoPai"
  (fecharClicado)="atualizarAberturaFicha()"
></app-ficha>

atualizarAberturaFicha() {
    this.fichaAberta = false;
  }

```

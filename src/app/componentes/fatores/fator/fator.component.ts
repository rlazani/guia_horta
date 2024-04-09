import { Component, Input, OnInit } from '@angular/core';
import { Fator } from '../fator';

@Component({
  selector: 'app-fator',
  templateUrl: './fator.component.html',
  styleUrls: ['./fator.component.css'],
})
export class FatorComponent implements OnInit {
  @Input()
  fator_item!: Fator;

  constructor() {}

  ngOnInit(): void {}
}

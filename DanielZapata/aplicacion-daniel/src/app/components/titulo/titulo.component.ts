import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  @Input() nombre: string;
  @Output() eventTitulo = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClasesComponent implements OnInit {
  titulo: string = 'Clases';
  constructor() { }

  ngOnInit(): void {
  }

}

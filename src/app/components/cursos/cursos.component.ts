import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CursosComponent implements OnInit {
  titulo: string = 'Cursos';
  constructor() { }

  ngOnInit(): void {
  }

}

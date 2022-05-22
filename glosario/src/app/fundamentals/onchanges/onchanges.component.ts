import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.scss'],
})
export class OnchangesComponent implements OnChanges {
  @Input('datos') datos: any;
  constructor() {}

  // Cada vez que se ingrese un nuevo dato mediante el input.
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}

import { Component } from '@angular/core';
import { Iauto } from '../../../interfaces/iauto';

@Component({
  selector: '.app-auto-casuali',
  templateUrl: './auto-casuali.component.html',
  styleUrl: './auto-casuali.component.scss',
})
export class AutoCasualiComponent {
  arrayCarsDisponibili: Iauto[] = [];
  arrayCarsCasuali: Iauto[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('la risposta del server non è ok');
        }
      })
      .then((dati) => {
        this.arrayCarsDisponibili = dati.filter(
          (car: Iauto) => car.available === true
        );
        this.arrayCarsCasuali = this.shuffle(this.arrayCarsDisponibili);
        console.log(this.arrayCarsCasuali);
      })
      .catch((errore) => {
        console.log(errore);
      });
  }

  shuffle(array: Iauto[]): Iauto[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

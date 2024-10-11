import { Component } from '@angular/core';
import { Iauto } from '../../interfaces/iauto';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss',
})
export class AudiComponent {
  arrayCarFord: Iauto[] = [];

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
        this.arrayCarFord = dati.filter(
          (car: Iauto) => car.brand.toLowerCase() === 'audi'
        );
        console.log(this.arrayCarFord);
      })
      .catch((errore) => {
        console.log(errore);
      });
  }
}

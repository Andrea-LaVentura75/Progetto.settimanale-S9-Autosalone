import { Component } from '@angular/core';
import { Iauto } from '../../../interfaces/iauto';

@Component({
  selector: '.app-loghi', // Usa 'app-loghi' se vuoi un tag.
  templateUrl: './loghi.component.html',
  styleUrls: ['./loghi.component.scss'], // Usa 'styleUrls' con array.
})
export class LoghiComponent {
  arrayCars: Iauto[] = [];

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
        this.arrayCars = dati;
      })
      .catch((errore) => {
        console.log(errore);
      });
  }
}

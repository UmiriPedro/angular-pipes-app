import { Component } from '@angular/core';
import { Gender } from '../../interfaces/gender.type';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // Properties: i18nSelect
  public name: string = 'Peter';
  public gender: Gender = 'male';
  public invitationMap: { [key in Gender]: string } = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  // Properties: i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap: { [key: string]: string } = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando'
  }

  // Properties: KeyValue
  public person = {
    name: 'Pedro',
    age: 31,
    address: 'Ciudad Jardín, Buenos Aires, Argentina'
  };

  // Properties: Async
  // El interval(2000) emite un number cada 2 segundos (2000 milisegundos).
  // Los números que emite, empiezan desde el 0 y a los dos segundos emite el 1 y a los dos segundos el 2, etc.
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log( 'tap:', value ) )
  );

  // Las promesas, a diferencia de los observables, no se pueden cancelar
  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' )
      console.log( 'Tenemos data en la promesa.' )
    }, 3500); // Se ejecuta pasados los 3 segundos y medios (3500 milisegundos)
  })

  // Methods: i18nSelect
  changeClient(): void {
    this.name = 'Mosha';
    this.gender = 'female';
  }

  // Methods: i18nPlural
  deleteClient(): void {
    // Elimina el primer elemento de la lista
    this.clients.shift();
  }

}

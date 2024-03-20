import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

/*
  Declaro que es un pipe.
  Con 'sortBy' es que lo vamos a llamar
*/
@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  //Con "keyof Hero", toma los nombres de las propiedades de Hero
  transform( heroes: Hero[], sortBy?: keyof Hero | '' ): Hero[] {
    switch( sortBy ) {
      case 'name':
        return heroes.sort( (a, b) => ( a.name > b.name ) ? 1 : -1 );

      case 'canFly':
        return heroes.sort( (a, b) => ( a.canFly > b.canFly ) ? 1 : -1 );

      case 'color':
        return heroes.sort( (a, b) => ( a.color > b.color ) ? 1 : -1 );

      default:
        return heroes;
    }
  }

}

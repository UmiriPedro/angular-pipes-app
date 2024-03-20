import { Pipe, PipeTransform } from '@angular/core';

/*
  Declaro que es un pipe.
  Con 'canFly' es que lo vamos a llamar
*/
@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform( value: boolean ): 'Vuela'|'No vuela' {
    return ( value ) ? 'Vuela' : 'No vuela';
  }
}

import { Pipe, PipeTransform } from "@angular/core";

/*
  Declaro que es un pipe.
  Con 'toggleCase' es que lo vamos a llamar
*/
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  // Por defecto, el valor de toUpper es 'false'
  transform( value: string, toUpper: boolean = false ): string {
    return ( toUpper ) ? value.toUpperCase() : value;
  }

}

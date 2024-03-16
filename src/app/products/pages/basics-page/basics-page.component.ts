import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'peter';
  public nameUpper: string = 'PETER';
  public fullName: string = 'peDrO UmiRI';

  public customDate: Date = new Date();
}

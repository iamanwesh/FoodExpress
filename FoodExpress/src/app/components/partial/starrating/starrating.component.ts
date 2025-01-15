import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-starrating',
  templateUrl: './starrating.component.html',
  styleUrl: './starrating.component.css'
})
export class StarratingComponent {
  @Input()
  stars!: number
  @Input()
  size: number = 1;
  get styles() {
    return {
      'width.rem': this.size,
      'hight.rem': this.size,
      'marginRight.rem': this.size / 6,
    }
  }
  getStarImage(current:number):string{
    const previousHalf =current- 0.5;
    const imagename=this.stars>=current?'star-full':this.stars>=previousHalf?'star-half':'star-empty';
    return `assets/star/${imagename}.svg`;
  }
}

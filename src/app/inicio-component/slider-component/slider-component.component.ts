import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {
  public slideIndex: number = 0;
  public images = [
    {
      id: 1,
      src: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png'
    },
    {
      id: 2,
      src: 'https://purepng.com/public/uploads/large/purepng.com-dog-pngdogdoggycutehoundblack-snoutgerman-shepperdlooking-to-camera-451520332369fzowk.png'
    },
    {
      id: 3,
      src: 'https://www.freeiconspng.com/thumbs/dog-png/dog-png-30.png'
    }
  ];
  selectImage(index: number) {
    console.log("Index: " + index);
    this.slideIndex = index;
    console.log("Selected Index: " + this.slideIndex);
  }

  showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < this.images.length; i++) {
      (<HTMLElement>slides[i]).style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > this.images.length) {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    (<HTMLElement>slides[this.slideIndex - 1]).style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    setTimeout(this.showSlides, 200);
  }
  ngOnInit() {
    this.showSlides();
  }
}

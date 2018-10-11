import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recompense-moon',
  templateUrl: './recompense-moon.component.html',
  styleUrls: ['./recompense-moon.component.css']
})
export class RecompenseMoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const bigImg= document.getElementById("bigImg");
    const thumb1= document.getElementById("thumb1");
    const thumb2= document.getElementById("thumb2");
    const thumb3= document.getElementById("thumb3");
    const thumb4= document.getElementById("thumb4");
    const thumb2b= document.getElementById("thumb2b");
    const thumb3b= document.getElementById("thumb3b");
    const thumb4b= document.getElementById("thumb4b");
    
    thumb1.addEventListener("click", function() {
      bigImg.classList.remove("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb2.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.remove("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb3.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.remove("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb4.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.remove("hidden");
    });
   
  }

}

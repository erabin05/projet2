import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recompense-moon',
  templateUrl: './recompense-moon.component.html',
  styleUrls: ['./recompense-moon.component.css']
})
export class RecompenseMoonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function changeImage(element)
{
  var x = element.document.getElementById("bigImg");
  var v = x.getAttribute("");
  if(v == "feed-blue.png")
    v = "feed-orange.png");
  else
    v = "feed-blue.png");
  x.setAttribute("src", v);	
}
  }

}

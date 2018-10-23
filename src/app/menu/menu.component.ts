import { Component, OnInit } from '@angular/core';
// import {AppComponent} from '../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   const burger= document.getElementById("burger");
  //   const burger2= document.getElementById("burger2");
  //   const connexion= document.getElementById("connexion");
  //   const sattelite= document.getElementById("sattelite");
  //   const tableau= document.getElementById("tableau");
  //   const sattelite2= document.getElementById("sattelite2");
  //   const bigMenu=document.getElementById("bigMenu");
  // // je remplace le bouton burger par le bouton burger2 et j'affiche les icones et liens 
  //     burger.addEventListener("click", function() {
  //     burger.classList.add("hidden");
  //     burger2.classList.remove("hidden");
  //     connexion.classList.remove("hidden");
  //     sattelite.classList.remove("hidden");
  //     tableau.classList.remove("hidden");
  //     sattelite2.classList.remove("hidden");
  //     bigMenu.classList.add("bigMenu");
  //   });
  // // je remplace le bouton burger2 par le bouton burger et je masque les icones et liens
  //   burger2.addEventListener("click", function() {
  //     burger2.classList.add("hidden");
  //     burger.classList.remove("hidden");
  //     connexion.classList.add("hidden");
  //     sattelite.classList.add("hidden");
  //     tableau.classList.add("hidden");
  //     sattelite2.classList.add("hidden");
  //     bigMenu.classList.remove("bigMenu");
  //   });
  }

showMenu() {
  const bigMenu=document.getElementById("bigMenu");
  const logo=document.getElementById("logo");
  if (bigMenu.classList.contains("hidden")){
    bigMenu.classList.remove("hidden");
    bigMenu.classList.add("Onit");
    logo.classList.add("logo")
  } else {
    bigMenu.classList.add("hidden");
    bigMenu.classList.remove("Onit");
    logo.classList.remove("logo")
  }
}

}

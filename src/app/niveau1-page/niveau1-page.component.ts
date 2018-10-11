import { Component, OnInit } from '@angular/core';
// import { RecompenseMoonComponent } from '../recompense-moon/recompense-moon.component';

@Component({
  selector: 'app-niveau1-page',
  templateUrl: './niveau1-page.component.html',
  styleUrls: ['./niveau1-page.component.css']
})
export class Niveau1PageComponent implements OnInit {


  constructor() { 
    

  }

  ngOnInit() {
    const bonneReponse = document.getElementById("bonne-reponse");
    const boutonsReponse = document.getElementById ("boutons-reponses"); 
    const affichelareponse = document.getElementById("AfficherReponse");  
    
    bonneReponse.addEventListener("click", function() {
      boutonsReponse.classList.add("hidden");
      affichelareponse.classList.remove("hidden");
    });

    const boutongetyourreward = document.getElementById("boutongetyourreward");
    const pagelune = document.getElementById("recompenseLune");

    boutongetyourreward.addEventListener("Click", function() {
      pagelune.classList.remove("hidden");

    });



  }

  



}

import { Component, OnInit } from '@angular/core';

function sidebar(){
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
      let arrowParent = ( <HTMLElement> e.target!).parentElement!.parentElement;//selecting main parent of arrow
      arrowParent!.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    sidebarBtn!.addEventListener("click", ()=>{
    sidebar!.classList.toggle("close");
    });
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    sidebar()
  }

}

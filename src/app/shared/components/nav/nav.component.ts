import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @ViewChild('close') cerrar!: ElementRef;
  @ViewChild('abrir') abrir!: ElementRef;
  @ViewChild('modal') modal!: ElementRef;
  @ViewChild('modalC') modalC!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    let modal = this.modal.nativeElement;
    let modalC = this.modalC.nativeElement;
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle('modal-close');
  }

  closeModal(){
    let modal = this.modal.nativeElement;
    let modalC = this.modalC.nativeElement;
    modal.classList.toggle('modal-close');
    setTimeout(function(){
      modalC.style.opacity = "0";
      modalC.style.visibility = "hidden";
    }, 900);
  }
}

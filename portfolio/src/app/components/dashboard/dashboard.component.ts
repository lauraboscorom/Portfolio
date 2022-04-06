import { Component, ElementRef, OnInit, ViewChild, QueryList, ViewChildren, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit, OnInit {

  // HTML Element for intro animation
  @ViewChild('intro') intro: ElementRef;
  @ViewChild('logoHeader') logo: ElementRef;
  @ViewChildren('logo') logoSpan: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.startIntro();
  }
  
  /**
   * Starts an animated website intro
   */
  startIntro(): void {
    setTimeout(() => {
  
      this.logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.nativeElement.classList.add('active');
        }, (idx + 1) * 400)
      });
  
      setTimeout(() => {
        this.logoSpan.forEach((span, idx) => {
          
          setTimeout(()=> {
            span.nativeElement.classList.remove('active');
            span.nativeElement.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);
  
      setTimeout(() => {
        this.intro.nativeElement.style.top = '-100vh';
      }, 2300);
  
    }, 500)
  }

}

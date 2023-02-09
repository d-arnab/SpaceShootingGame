import { Component, OnInit, Input, OnChanges, HostListener, OnDestroy } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css'],
  animations: [
    trigger('slideInOut', [
      state('initial', 
        style({transform: 'translateY(0%)'})
      ),
      state('final', 
        style({transform: 'translateY(-10000%)'})
      ),
      transition('initial=>final', animate('15000ms'))
    ])
  ],
})

export class BulletComponent implements OnInit, OnChanges, OnDestroy  {

  //@Input() currentState: string='initial'
  @Input() currentState
  @Input() leftPosition
  @Input() FireBallNumber
  @Input() allienshipPlatton
  constructor() { }

  ngOnInit() {
    console.log("currentState:",this.currentState)
  }

  ngOnChanges(){

  }

  ngOnDestroy(){
    console.log("destroy....")
  }
  
  onAnimationDoneEvent(event: AnimationEvent){
    console.log("FireBallNumber:",this.FireBallNumber)
    console.log("animation start......")
  }
  onAnimationStartEvent(event: AnimationEvent){
    console.log("animation start....")
    console.log("allienshipPlatton:",this.allienshipPlatton)
    this.allienshipPlatton.forEach(element => {
      if(element.instance.leftPosition == this.leftPosition){
        console.log("hitted......")
      }
    });
  }


}

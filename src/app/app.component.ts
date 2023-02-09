import { Component, ViewChild, OnInit, ElementRef, Renderer2 , HostListener, ViewContainerRef, ComponentFactoryResolver, ComponentRef, ComponentFactory, AfterViewInit, ChangeDetectorRef, Type } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { BulletComponent } from './bullet/bullet.component';
import { SpaceMakerComponent } from './space-maker/space-maker.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit  {

  title = 'myApp';
  @ViewChild('trigger',{static:false}) trigger:ElementRef
  @ViewChild('shootBall',{static:false, read: ViewContainerRef }) shootBall:ViewContainerRef
  @ViewChild('spaceAlian',{static:false, read: ViewContainerRef}) spaceAlian:ViewContainerRef
  currentState = 'initial'
  fireBallFinalPosition
  fireBallNumber: any = 0
  fireBallContainer = [] 
  element: HTMLElement
  alianshipPlatton: any[] = []
  constructor(private el: ElementRef, private renderer: Renderer2, 
              private componentFactoryResolver: ComponentFactoryResolver,
              private cdr: ChangeDetectorRef ){}
           
  ngOnInit(){}
  ngAfterViewInit(){
    setInterval(()=>{
      this.createAlianShip();
    },10000)
    this.cdr.detectChanges();
  }

  @HostListener('window:keyup', ['$event'])
  checkKeyMovingTreigger(e){
    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       // left arrow
       var currentPosition = this.triggerCurrentValue()
       currentPosition = currentPosition - 1
       let finalPosition = currentPosition + '%'
       this.renderer.setStyle(this.trigger.nativeElement,'left', finalPosition)
    }
    else if (e.keyCode == '39') {
       // right arrow
       var currentPosition = this.triggerCurrentValue()
       currentPosition = currentPosition + 1
       let finalPosition = currentPosition + '%'
       this.renderer.setStyle(this.trigger.nativeElement,'left', finalPosition)  
    }
    else if(e.keyCode == '32') {
      let shootBall = this.createShootBall()
      //firing ball function executing after create the instance..
      setInterval(()=>{
        if(shootBall.instance.currentState === 'initial'){
          shootBall.instance.currentState = 'final'
         }
      },10)
      console.log("this.fireBallContainer:",this.fireBallContainer)
    }
  }

  checkForShootBallCollitionWithAlian(shootBall, monster){
    //function need to implement
  }

  triggerCurrentValue(){
    let currentPositionWithAstrix = this.trigger.nativeElement.style.left
    let currentPosition
    console.log(currentPositionWithAstrix)
    if( currentPositionWithAstrix  < 1 ){
      return currentPosition = 0
    }else {
      currentPosition = currentPositionWithAstrix.substring(0, currentPositionWithAstrix.length - 1);
      return parseInt(currentPosition)
    }   
  }

  createShootBall(){
      this.fireBallNumber ++
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(BulletComponent);
      let componentRef = this.shootBall.createComponent(componentFactory);
      var currentPosition = this.triggerCurrentValue()
      let fireBallPosition = currentPosition + 4.4
      let fireBallFinalPosition = fireBallPosition + '%'
      componentRef.instance.leftPosition = fireBallFinalPosition
      componentRef.instance.FireBallNumber = this.fireBallNumber
      componentRef.instance.currentState = 'initial'
      //componentRef.instance.allienshipPlatton = this.alianshipPlatton
      //this.fireBallContainer.push(componentRef)
      return componentRef;
  }

  createAlianShip(){
    this.alianshipPlatton = []
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpaceMakerComponent);
    let shipNumber = this.generateNumberOfAlianShip()
    let  alianship_1 = null
    alianship_1 = this.spaceAlian.createComponent(componentFactory);
    alianship_1.instance.leftPosition = (Math.floor(Math.random()*100)) + "%";
    alianship_1.instance.topPosition = (0) + "%"
    this.alianshipPlatton.push(alianship_1)
    this.moveAlienShip(alianship_1);
  }

  moveAlienShip(alianship){
    let moveAlianShip = setInterval(()=>{
      let alianship_yPosition = parseInt(alianship.instance.topPosition)
      if(alianship_yPosition >= 100){
        this.alianshipPlatton.splice(this.alianshipPlatton.indexOf(alianship),1)
        alianship.destroy()
      }else {
        alianship.instance.topPosition = (alianship_yPosition + 5) + "%"
      } 
    },3000)
  }

  generateNumberOfAlianShip(){
    let alianShipNumber = Math.floor(Math.random()*10) + 1
    return alianShipNumber
  }
}

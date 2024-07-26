import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit,OnDestroy{

  constructor() {}
  sendFlagtoReload=false
  ngOnInit(): void {
    console.log("component called")
  }
  ionViewWillEnter() {
    console.log('hi');
    this.sendFlagtoReload=true

  }
  // ionViewDidEnter(){
  //   this.sendFlagtoReload = false
  //   }
  ionViewWillLeave() {
    console.log("component destroyed")
    this.sendFlagtoReload = false
  }
  ngOnDestroy(): void {
    console.log("component destroyed")
      this.sendFlagtoReload = false
  }
}

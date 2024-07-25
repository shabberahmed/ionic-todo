import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit,OnDestroy{

  constructor() {}
  ngOnInit(): void {
      console.log("tab2 called")
  }
  setFlagForReload:boolean = false
  ionViewWillEnter() {
    console.log('hi');
    this.setFlagForReload = true
    console.log(this.setFlagForReload,"rotate")
  }
  ionViewDidEnter(){
    console.log("new hook")
  }
  ngOnDestroy(): void {
      this.setFlagForReload = false
  }
}

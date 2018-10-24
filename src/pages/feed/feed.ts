import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario:String = "Daniel Ricardo Jangua";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public soma_num(x:number, y:number):void{
    alert(x+y);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad FeedPage');
    //this.soma_num(10,5);
  }

}

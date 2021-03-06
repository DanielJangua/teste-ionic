import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Daniel Ricardo",
    data: "November 5, 1955",
    desc: "Estou fazendo um aplicativo Ionic incŕivel!",
    qntd_likes: 12,
    qtntd_comments: 4,
    time_comment: "11h ago"
  }

  public nome_usuario:String = "Daniel Ricardo Jangua";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  public soma_num(x:number, y:number):void{
    alert(x+y);
  }

  ionViewDidLoad() {
    this.movieProvider.getLastMovies().subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        console.log(error);
      }
    );
  }

}

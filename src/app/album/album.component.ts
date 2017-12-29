import { Ialbums } from './../ialbums';
import { AlbumService } from './../album.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
albums: Ialbums[];
response:  Ialbums[];
start: number;
limit: number;
x: any;
pi: number = 1;
  constructor(private albumservice: AlbumService) {
   // this.albums = this.albumservice.getImages(10,5);
  //this.start = 0;
    this.limit = 10;
  }

  ngOnInit() {
  
  }
  display(a)
  {
    if( a < 0 || a > 5000)
    {
      alert("enter a positive and max number is 5000");
    }
    this.albumservice.getImages(this.start, a).subscribe(response => {
      this.albums = response;
      // console.log(this.albums);
     // this.albums = response;
    });
    // console.log(a);
  }
  displayimage(b)
  {
    this.x = b;
  }
}

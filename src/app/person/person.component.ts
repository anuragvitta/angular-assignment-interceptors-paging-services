import { Ipersons } from './../ipersons';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from './../album.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
persons: Ipersons[];
response: Ipersons[];
  constructor(private albumservice: AlbumService) { }

  ngOnInit() {
  }
display(a)
{
  if(a<0||a>10)
  {
    alert("enter positive and max number is 10");
  }
  this.albumservice.getPersons(a).subscribe(response => {
    this.persons = response;
});
}
}

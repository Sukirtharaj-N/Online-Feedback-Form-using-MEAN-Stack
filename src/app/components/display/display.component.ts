import { Component, OnInit } from '@angular/core';
import { FeedsService } from 'src/app/services/feeds.service';
import { FeedData } from 'src/app/models/feed-data.model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  values?: FeedData[];
  teach = new FormControl();


  constructor(private feedservice: FeedsService) { }

  ngOnInit(): void {

  this.Displayfeed();  
  }
  
  onChange1() {
    
      this.Displayfeed1("Teacher");
     
    
  } 

  onChange2() {
     this.Displayfeed1("Student");
   } 

  
  
  Displayfeed(): void {
    this.feedservice.getAll()
      .subscribe(
        data => {
          this.values = Object.values(data);
        
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  Displayfeed1(id:string): void {
  
    this.feedservice.getid(id)
      .subscribe(
        data => {
          this.values = Object.values(data);
        
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
}

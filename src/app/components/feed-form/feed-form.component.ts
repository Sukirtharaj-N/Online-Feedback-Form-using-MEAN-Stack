import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedData } from 'src/app/models/feed-data.model';
import { FeedsService } from 'src/app/services/feeds.service';



@Component({
  selector: 'app-feed-form',
  templateUrl: './feed-form.component.html',
  styleUrls: ['./feed-form.component.css'],
  
})

export class FeedFormComponent implements OnInit {

  
  value: FeedData ={
    Name: "",
    Email:"",
    Phone:"",
    Role:"",
    Content:""
};

  constructor(public feedservice: FeedsService) { }

  ngOnInit(): void {
  }

  submit(result:any) {
    this.value={ Name:result.fname,
      Email: result.email,
      Phone: result.phone,
      Role: result.role,
      Content: result.feed
    };

    this.feedservice.create(this.value)
    .subscribe(
      response => {
        alert("Feedback Submitted!!");
        this.value={ Name: "",
          Email:"",
          Phone: "",
          Role: "",
          Content:""
        };
         console.log(response);   
      },
      error =>{
        console.log(error);
      });
    }
}
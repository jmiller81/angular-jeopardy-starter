import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  userscore = 0;

  questionInfo;

  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  ngOnInit(){
    this.getQuestionInfo()
  }

  checkAnswer(answer){
    if(answer == this.questionInfo.answer){
      this.userscore = this.userscore + this.questionInfo.value;
      this.getQuestionInfo();
    }
    else{
      this.userscore = this.userscore - this.questionInfo.value;
      this.getQuestionInfo();
    }
  }

}

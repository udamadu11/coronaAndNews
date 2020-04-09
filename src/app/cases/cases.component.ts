import { Component, OnInit } from '@angular/core';
import { CasesService } from '../cases.service';
@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  public case = [];
  public articles;
  constructor(private cases: CasesService) { }

  ngOnInit(): void {
    this.cases.getCases()
    .subscribe(data => this.case = data);

    this.cases.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    })
  }

}

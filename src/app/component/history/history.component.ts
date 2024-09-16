import { Component, OnInit } from '@angular/core';
import { A2budgetService } from 'src/app/services/a2budget.service';
import { Validationa2budgetService } from 'src/app/services/validationa2budget.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  a2budgedlist: any[] = [];
  currentPage = 0;
  pageSize = 4;
  totalItems = 0;
  constructor(
    private a2budgetservice: A2budgetService,
    private validationa2budgetService: Validationa2budgetService
  ) {}

  ngOnInit(): void {
    //this.retrieveA2budget();
    this.geta2budged();
  }
  geta2budged(): void {
    this.a2budgetservice.gethistory(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.a2budgedlist = response.content;
        this.totalItems = response.totalElements;
      });
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.geta2budged();
  }
}

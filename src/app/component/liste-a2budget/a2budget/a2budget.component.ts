import { Component, OnInit } from '@angular/core';
import { A2budget } from 'src/app/models/a2budget';
import { A2budgetService } from 'src/app/services/a2budget.service';
import { Validationa2budgetService } from 'src/app/services/validationa2budget.service';

@Component({
  selector: 'app-a2budget',
  templateUrl: './a2budget.component.html',
  styleUrls: ['./a2budget.component.css']
})
export class A2budgetComponent implements OnInit {
  //a2budgets?: A2budget[];
  //currenta2budget: A2budget = {};
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
    this.a2budgetservice.geten(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.a2budgedlist = response.content;
        this.totalItems = response.totalElements;
      });
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.geta2budged();
  }

  //retrieveA2budget(): void {
    //this.a2budgetservice.getAll().subscribe({
      //next: (data) => {
        //this.a2budgets = data;
        //console.log(data);
      //},
      //error: (e) => console.error(e)
    //});
  //}

  onValiderClick(ida2budget: number): void {
    const newEtat = 10;  // Ou la valeur que tu veux mettre à jour
    this.validationa2budgetService.updateEtat(ida2budget, newEtat).subscribe(
      response => {
        console.log('Mise à jour réussie : ', response);
        // Rafraîchir les données après la mise à jour
        this.geta2budged();
      },
      error => {
        console.error('Erreur lors de la mise à jour : ', error);
        // Optionnel : Gérer les erreurs ou afficher un message d'erreur
      }
    );
  }
  onsupprimerClick(ida2budget: number): void {
    const newEtat = 0;  // Ou la valeur que tu veux mettre à jour
    this.validationa2budgetService.supEtat(ida2budget, newEtat).subscribe(
      response => {
        console.log('Mise à jour réussie : ', response);
        // Rafraîchir les données après la mise à jour
        this.geta2budged();
      },
      error => {
        console.error('Erreur lors de la mise à jour : ', error);
        // Optionnel : Gérer les erreurs ou afficher un message d'erreur
      }
    );
  }
}

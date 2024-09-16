import { Component, OnInit } from '@angular/core';
import { Compte } from 'src/app/models/compte';
import { CompteService } from 'src/app/services/compte.service';
import { AddcompteComponent } from '../addcompte/addcompte.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.css']
})
export class ListCompteComponent implements OnInit {

  currentcompte: Compte = {};
  comptes?: any[] = [];
  currentPage = 0;
  pageSize = 4;
  totalItems = 0;

  constructor(
    private compteService: CompteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getcompte();
  }



  getcompte(): void {
    this.compteService.getcompte(this.currentPage, this.pageSize)
      .subscribe((response: any) => {
        this.comptes = response.content;
        this.totalItems = response.totalElements;
      });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getcompte();
  }

  onsupprimercompteClick(idcompte: number): void {
    const newEtat = 0;  // Ou la valeur que tu veux mettre à jour
    this.compteService.updateEtat(idcompte, newEtat).subscribe(
      response => {
        console.log('Mise à jour réussie : ', response);
        // Rafraîchir les données après la mise à jour
        this.getcompte();
      },
      error => {
        console.error('Erreur lors de la mise à jour : ', error);
        // Optionnel : Gérer les erreurs ou afficher un message d'erreur
      }
    );
  }
  openDialog1(): void {
    const dialogRef1 = this.dialog.open(AddcompteComponent, {
      width: '400px',
      data: { codetype: '', designation: '' }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.getcompte();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddcompteComponent, {
      width: '400px',
      data: { modeexecution: '', designation: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.getcompte();
    });
  }

}

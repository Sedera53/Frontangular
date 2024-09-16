import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Compte } from 'src/app/models/compte';
import { CompteService } from 'src/app/services/compte.service';
import { ListCompteComponent } from '../list-compte/list-compte.component';

@Component({
  selector: 'app-addcompte',
  templateUrl: './addcompte.component.html',
  styleUrls: ['./addcompte.component.css']
})
export class AddcompteComponent implements OnInit {
  currentcompte: Compte = {};
  comptes?: any[] = [];
  constructor(public dialogRef: MatDialogRef<ListCompteComponent>,public dialog: MatDialog,private compteService: CompteService) { }

  ngOnInit(): void {
  }
  compte: Compte = {
    designation: '',
    etat: 1  // Valeur par défaut pour 'etat'
  };
  submitted = false;

  saveCompte(): void {
    const data = {
      designation: this.compte.designation,
      etat: this.compte.etat || 1  // Si 'etat' n'est pas défini, utiliser la valeur par défaut 1
    };

    this.compteService.create(data)
      .subscribe({
        next: (res: string) => {
          console.log('Response:', res);
          this.submitted = true;
          this.newcompte();
        }
      });

  }

  newcompte(): void {
    this.submitted = false;
    this.compte = {
      designation: '',
      etat: 1  // Remettre la valeur par défaut pour 'etat'
    };
  }

   // Ouvrir le formulaire modal
   openDialog(): void {
    const dialogRef = this.dialog.open(ListCompteComponent, {
      width: '300px',
      data: { compte : this.compte} // Vous pouvez transmettre des données ici si nécessaire
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé', result);
      // Vous pouvez manipuler les résultats ici
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

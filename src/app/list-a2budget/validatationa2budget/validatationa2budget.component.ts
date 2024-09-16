import { Component } from '@angular/core';
import { Validationa2budgetService } from 'src/app/services/validationa2budget.service';

@Component({
  selector: 'app-validatationa2budget',
  templateUrl: './validatationa2budget.component.html',
  styleUrls: ['./validatationa2budget.component.css']
})
export class Validatationa2budgetComponent  {

  constructor(private Validationa2budgetService: Validationa2budgetService) { }

  onValiderClick(ida2budget: number): void {
    const newEtat = 10;  // Ou la valeur que tu veux mettre à jour
    this.Validationa2budgetService.updateEtat(ida2budget, newEtat).subscribe(
      response => {
        console.log('Mise à jour réussie : ', response);
        // Optionnel : Actualiser l'interface utilisateur ou afficher un message de succès
      },
      error => {
        console.error('Erreur lors de la mise à jour : ', error);
        // Optionnel : Gérer les erreurs ou afficher un message d'erreur
      }
    );
  }
}

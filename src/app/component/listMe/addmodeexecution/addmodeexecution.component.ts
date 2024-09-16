import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Modeexecution } from 'src/app/models/Modeexecution.model';
import { ModeexecutionComponent } from 'src/app/component/listMe/modeexecution/modeexecution.component';
import { ModeexecutionService } from 'src/app/services/modeexecution.service';
import { ModalFormComponent } from 'src/app/component/modal-form/modal-form.component'; // Assurez-vous que le composant ModalFormComponent est correctement importé
@Component({
  selector: 'app-addmodeexecution',
  templateUrl: './addmodeexecution.component.html',
  styleUrls: ['./addmodeexecution.component.css']
})
export class AddmodeexecutionComponent implements OnInit {
  modeexecution: Modeexecution = { modeexecution: '', designation: '' };
  submitted = false;
  modeexecutionList: any[] = [];
  constructor(public dialogRef: MatDialogRef<ModeexecutionComponent>,
    private modeexecutionservice: ModeexecutionService, public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  saveModeexecution(): void {
    const data = {
      modeexecution: this.modeexecution.modeexecution,
      designation: this.modeexecution.designation
    };
    this.modeexecutionservice.create(data)
      .subscribe({
        next: (res: string) => {
          console.log('Response:', res);
          this.submitted = true;
          this.newModeexecution(); // Réinitialise le formulaire après la réussite de la sauvegarde

        },
        error: (e) => console.error('Error:', e)
      });
  }

  newModeexecution(): void {
    this.submitted = false;
    this.modeexecution = { modeexecution: '', designation: '' };
  }
   // Ouvrir le formulaire modal
   openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '300px',
      data: { modeexecution: this.modeexecution } // Vous pouvez transmettre des données ici si nécessaire
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

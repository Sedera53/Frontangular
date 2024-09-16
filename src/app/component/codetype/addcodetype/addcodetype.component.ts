import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  // Utilisé pour ouvrir le dialogue
import { Codetyp } from 'src/app/models/codetyp';
import { CodetypService } from 'src/app/services/codetyp.service';
import { ModalFormComponent } from 'src/app/component/modal-form/modal-form.component'; // Assurez-vous que le composant ModalFormComponent est correctement importé
import { CodetypComponent } from '../codetyp/codetyp.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-addcodetype',
  templateUrl: './addcodetype.component.html',
  styleUrls: ['./addcodetype.component.css']
})
export class AddcodetypeComponent implements OnInit {
  codetype: Codetyp = { codetype: '', designation: '' };
  codetypelist: any[] = [];

  constructor(public dialogRef: MatDialogRef<CodetypComponent>,
    private codetypeservice: CodetypService, public dialog: MatDialog) { }

  ngOnInit(): void { }

  submitted = false;

  savecodetype(): void {
    const data = {
      codetype: this.codetype.codetype,
      designation: this.codetype.designation
    };
    this.codetypeservice.create(data)
      .subscribe({
        next: (res: String) => {
          console.log('Response', res);
          this.submitted = true;
          this.reinitialise();
        },
        error: (e) => console.error('Error', e)
      });
  }

  reinitialise(): void {
    this.submitted = false;
    this.codetype = { codetype: '', designation: '' };
  }

  // Ouvrir le formulaire modal
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '300px',
      data: { codetype: this.codetype } // Vous pouvez transmettre des données ici si nécessaire
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

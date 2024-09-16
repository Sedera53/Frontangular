import { Component, OnInit } from '@angular/core';
import { Codebenef } from 'src/app/models/codebenef';
import { CodebenefService } from 'src/app/services/codebenef.service';
import { ListRespComponent } from '../list-resp/list-resp.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addbeneficiare',
  templateUrl: './addbeneficiare.component.html',
  styleUrls: ['./addbeneficiare.component.css']
})
export class AddbeneficiareComponent implements OnInit {
  codebenef: Codebenef = {
    codebenef: '',
    designation: ''
};
  constructor(public dialogRef: MatDialogRef<ListRespComponent>,private codebenefservice : CodebenefService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  submitted = false;

  savecodebenef(): void {
    const data = {
      codebenef: this.codebenef.codebenef,
      designation: this.codebenef.designation
    };
    this.codebenefservice.create(data)
    .subscribe({
        next: (res: string) => {
          console.log('Response:',res);
          this.submitted = true;
          this.newcodebenef();

        },
        error: (e) => console.error('Error:',e )
    });
  }
  newcodebenef(): void {
    this.submitted = false;
    this.codebenef = {
      codebenef: '',
      designation: ''
    };
  }


  // Ouvrir le formulaire modal
  openDialog(): void {
    const dialogRef = this.dialog.open(ListRespComponent, {
      width: '300px',
      data: { codebenf: this.codebenef } // Vous pouvez transmettre des données ici si nécessaire
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

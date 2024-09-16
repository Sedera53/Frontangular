import { Component, OnInit } from '@angular/core';
import { Codetyp } from 'src/app/models/codetyp';
import { CodetypService } from 'src/app/services/codetyp.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from 'src/app/component/modal-form/modal-form.component';
import { AddcodetypeComponent } from '../addcodetype/addcodetype.component';

@Component({
  selector: 'app-codetyp',
  templateUrl: './codetyp.component.html',
  styleUrls: ['./codetyp.component.css']
})
export class CodetypComponent implements OnInit {
  codetypes?: Codetyp[];
  codetype: Codetyp = { codetype: '', designation: '' };
  codetypelist: any[] = [];

  constructor(private codetypeservice: CodetypService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.codetypeservice.getcodetype()
      .subscribe({
        next: (data) => {
          this.codetypes = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  openDialog1(): void {
    const dialogRef1 = this.dialog.open(AddcodetypeComponent, {
      width: '400px',
      data: { codetype: '', designation: '' }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.reloadData(); // Recharger les données après la fermeture du dialogue
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalFormComponent, {
      width: '400px',
      data: { codetype: '', designation: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.reloadData(); // Recharger les données après la fermeture du dialogue
    });
  }
}

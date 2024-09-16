import { Component, OnInit } from '@angular/core';
import { Modeexecution } from 'src/app/models/Modeexecution.model';
import { ModeexecutionService } from 'src/app/services/modeexecution.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Assurez-vous d'importer MatDialog
import { AddmodeexecutionComponent } from 'src/app/component/listMe/addmodeexecution/addmodeexecution.component';


@Component({
  selector: 'app-modeexecution',
  templateUrl: './modeexecution.component.html',
  styleUrls: ['./modeexecution.component.css']
})
export class ModeexecutionComponent implements OnInit {
  modeexecutions?: Modeexecution[];

  constructor(
    private modeexecutionservice: ModeexecutionService,
    private router: Router,
    public dialog: MatDialog // Injecter MatDialog dans le constructeur
  ) {}

  ngOnInit(): void {
    this.retrieveModeexecutions();

  }

  retrieveModeexecutions(): void {
    this.modeexecutionservice.getAll()
      .subscribe({
        next: (data) => {
          this.modeexecutions = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  modeexecutionList: any[] = [];
  onButtonClick(modeexecution: String): void {
    this.modeexecutionservice.getModeexecutionList(modeexecution).subscribe(
      data => {
        console.log('Données reçues : ', data);
        this.modeexecutionList = data;
        this.router.navigate(['/add'], { state: { data: this.modeexecutionList } });
      },
      error => {
        console.error('Erreur lors de la récupération des données : ', error);
      }
    );
  }

  openDialog1(): void {
    const dialogRef1 = this.dialog.open(AddmodeexecutionComponent, {
      width: '400px',
      data: { codetype: '', designation: '' }
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.retrieveModeexecutions();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddmodeexecutionComponent, {
      width: '400px',
      data: { modeexecution: '', designation: '' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('La boîte de dialogue a été fermée', result);
      this.retrieveModeexecutions();
    });
  }
}

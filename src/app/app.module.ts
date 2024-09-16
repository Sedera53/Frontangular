import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeexecutionComponent } from './component/listMe/modeexecution/modeexecution.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AsMenuComponent } from './component/menu/as-menu/as-menu.component';
import { IsMenuComponent } from './component/menu/is-menu/is-menu.component';
import { A2budgetComponent } from './component/liste-a2budget/a2budget/a2budget.component';
import { Validatationa2budgetComponent } from './list-a2budget/validatationa2budget/validatationa2budget.component';
import { ListCompteComponent } from './component/listecompte/list-compte/list-compte.component';
import { ListRespComponent } from './component/listresp/list-resp/list-resp.component';
import { HistoryComponent } from './component/history/history.component';
import { CodetypComponent } from './component/codetype/codetyp/codetyp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalFormComponent } from './component/modal-form/modal-form.component';

// Import Angular Material modules
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AddcodetypeComponent } from './component/codetype/addcodetype/addcodetype.component';
import { AddmodeexecutionComponent } from 'src/app/component/listMe/addmodeexecution/addmodeexecution.component';
import { AddcompteComponent } from './component/listecompte/addcompte/addcompte.component';
import { AddbeneficiareComponent } from './component/listresp/addbeneficiare/addbeneficiare.component';



@NgModule({
  declarations: [
    AppComponent,
    ModeexecutionComponent,
    AsMenuComponent,
    IsMenuComponent,
    A2budgetComponent,
    Validatationa2budgetComponent,
    ListCompteComponent,
    ListRespComponent,
    HistoryComponent,
    CodetypComponent,
    ModalFormComponent,
    AddcodetypeComponent,
    AddmodeexecutionComponent,
    AddcompteComponent,
    AddbeneficiareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule, // Ajoutez MatDialogModule ici
    MatButtonModule  // Ajoutez MatButtonModule pour les boutons
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

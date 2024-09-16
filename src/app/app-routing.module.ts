import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModeexecutionComponent } from './component/listMe/modeexecution/modeexecution.component';
import { A2budgetComponent } from './component/liste-a2budget/a2budget/a2budget.component';
import { ListCompteComponent } from './component/listecompte/list-compte/list-compte.component';
import { ListRespComponent } from './component/listresp/list-resp/list-resp.component';
import { HistoryComponent } from './component/history/history.component';
import { CodetypComponent } from './component/codetype/codetyp/codetyp.component';

const routes: Routes = [

  { path: 'modeexecutions', component: ModeexecutionComponent },
  { path: 'test', component: ModeexecutionComponent },
  { path: 'listeencours', component: A2budgetComponent },
  { path: 'compte', component: ListCompteComponent },
  { path: 'listecodebenef', component: ListRespComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'codetype', component: CodetypComponent } // Ajout d'une route de test
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

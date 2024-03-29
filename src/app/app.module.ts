import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatMenuModule} from '@angular/material/menu';
import { NavComponent } from './components/nav/nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from './components/views/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import { ConfigComponent } from './components/views/config/config.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { AlunoReadComponent } from './components/views/aluno/aluno-read/aluno-read.component';
import { AlunoDeleteComponent } from './components/views/aluno/aluno-delete/aluno-delete.component';
import { AlunoCreateComponent } from './components/views/aluno/aluno-create/aluno-create.component';
import { AlunoUpdateComponent } from './components/views/aluno/aluno-update/aluno-update.component';
import { AntroReadComponent } from './components/views/antropometria/antro-read/antro-read.component';
import { AntroCreateComponent } from './components/views/antropometria/antro-create/antro-create.component';
import { AntroUpdateComponent } from './components/views/antropometria/antro-update/antro-update.component';
import { AntroDeleteComponent } from './components/views/antropometria/antro-delete/antro-delete.component';
import { FuncionarioReadComponent } from './components/views/funcionario/funcionario-read/funcionario-read.component';
import { FuncionarioCreateComponent } from './components/views/funcionario/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/funcionario/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/views/funcionario/funcionario-update/funcionario-update.component';
import { PerfilUsuarioComponent } from './components/views/perfil/perfil-usuario/perfil-usuario.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TreinoReadComponent } from './components/views/treino/treino-read/treino-read.component';
import { TreinoCreateComponent } from './components/views/treino/treino-create/treino-create.component';
import { TreinoUpdateComponent } from './components/views/treino/treino-update/treino-update.component';
import { TreinoDeleteComponent } from './components/views/treino/treino-delete/treino-delete.component';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { TreinoCreateGeralComponent } from './components/views/treino/treino-create-geral/treino-create-geral.component';
import { PerfilFuncionarioComponent } from './components/views/perfil/perfil-funcionario/perfil-funcionario.component';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { AntroDetalheComponent } from './components/views/antropometria/antro-detalhe/antro-detalhe.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MensalidadesComponent } from './components/views/mensalidades/mensalidades.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AjudaComponent } from './components/views/ajuda/ajuda.component';
import { PerfilComponent } from './components/login/perfil/perfil.component';
import { AlterarSenhaComponent } from './components/login/alterar-senha/alterar-senha.component';
import { RelatorioComponent } from './components/views/relatorio/relatorio.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ConfigComponent,
    AlunoReadComponent,
    AlunoDeleteComponent,
    AlunoCreateComponent,
    AlunoUpdateComponent,
    AntroReadComponent,
    AntroCreateComponent,
    AntroUpdateComponent,
    AntroDeleteComponent,
    FuncionarioReadComponent,
    FuncionarioCreateComponent,
    FuncionarioDeleteComponent,
    FuncionarioUpdateComponent,
    PerfilUsuarioComponent,
    TreinoReadComponent,
    TreinoCreateComponent,
    TreinoUpdateComponent,
    TreinoDeleteComponent,
    TreinoCreateGeralComponent,
    PerfilFuncionarioComponent,
    MensagemComponent,
    ConfirmModalComponent,
    AntroDetalheComponent,
    MensalidadesComponent,
    LoginComponent,
    AjudaComponent,
    PerfilComponent,
    AlterarSenhaComponent,
    RelatorioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCardModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    NgxChartsModule,

  ],
  providers: [
    LoginService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

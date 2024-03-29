import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Treino } from 'src/app/models/treino';
import { MensagemService } from 'src/app/services/mensagem.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-update',
  templateUrl: './treino-update.component.html',
  styleUrls: ['./treino-update.component.css']
})
export class TreinoUpdateComponent implements OnInit {

  treino: Treino = {
    id: "",
    dia: "",
    treino: "",
    serie: 0,
    repeticao: 0,
  };

  constructor(
    private service: TreinoService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagemService: MensagemService
  ) { }

  ngOnInit(): void {
    this.treino.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.treino.id!).subscribe((resposta) => {
      this.treino.dia = resposta.dia;
      this.treino.treino = resposta.treino;
      this.treino.serie = resposta.serie;
      this.treino.repeticao = resposta.repeticao;
    });
  }

  update(): void {
    this.service.update(this.treino).subscribe((resposta) => {
      this.router.navigate(["treinos"]);
      this.mensagemService.add("Treino atualizado com sucesso");
    }, err => {
      this.mensagemService.add('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['treinos'])
  }

}

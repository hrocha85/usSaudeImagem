export class Format_Laudo {
  titulo_exame?: string;
  sub_exame_nome?: string;
  frases_is_empty?: boolean;
  frases_sub_exame?: Array<string>;
  conclusoes_sub_exame?: Array<string>;

  constructor(
    titulo_exame?: string,
    sub_exame_nome?: string,
    frases_is_empty?: boolean,
    frases_sub_exame?: Array<string>,
    conclusoes_sub_exame?: Array<string>
  ) {
    this.titulo_exame = titulo_exame;
    this.sub_exame_nome = sub_exame_nome;
    this.frases_is_empty = frases_is_empty;
    this.frases_sub_exame = frases_sub_exame;
    this.conclusoes_sub_exame = conclusoes_sub_exame;
  }

  Format_Laudo_Create_Storage(): void {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        if (this.frases_is_empty) {
          Exames.subExames.map((subExame) => {
            if (subExame.subExameNome == this.sub_exame_nome) {
              subExame.conclusoes = null;
              subExame.frases = null;
              subExame.subExameNome = null;
            }
          });
          localStorage.removeItem(this.sub_exame_nome!);
        } else {
          if (
            localStorage.getItem(this.sub_exame_nome!) == "0" ||
            localStorage.getItem(this.sub_exame_nome!) == null
          ) {
            Exames.subExames.push({
              subExameNome: this.sub_exame_nome,
            });

            localStorage.setItem(this.sub_exame_nome!, JSON.stringify(1));
          }
          if (
            this.conclusoes_sub_exame &&
            this.conclusoes_sub_exame.length > 0
          ) {
            this.conclusoes_sub_exame.map((conclusao) => {
              if (!Exames.conclusoes.includes(conclusao)) {
                Exames.conclusoes.push(conclusao);
              }
            });
          }
          localStorage.setItem(this.sub_exame_nome!, JSON.stringify(1));
        }
        Exames.subExames.map((subExame, indexS) => {
          if (subExame.subExameNome == this.sub_exame_nome) {
            Exames.subExames[indexS].frases = this.frases_sub_exame;
            localStorage.setItem(this.sub_exame_nome!, JSON.stringify(1));
          }
        });
      }
    });
    localStorage.setItem("format_laudo", JSON.stringify(array));
    window.localStorage.setItem("isThisInLocalStorage", JSON.stringify(1));
    window.dispatchEvent(new Event("storage"));
  }

  Add_Observacao(observacoes, titulo_exame): void {
    var obs: { id: string; values: string[] } = observacoes;
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      if (Exames.titulo_exame == titulo_exame) {
        if (obs != undefined) {
          obs.values.map((e: string) => {
            if (obs.id == titulo_exame) {
              if (e != "" && !Exames.observacoes.includes(e)) {
                Exames.observacoes.push(e);
              }
            }
          });
        }
      }
    });
    localStorage.setItem("format_laudo", JSON.stringify(array));
    window.dispatchEvent(new Event("storage"));
  }
  /**
   *
   * @param conclusao
   *
   *
   */
  Remove_Conclusao(conclusao): void {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);
    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.conclusoes.map((e, index) => {
          if (e === conclusao) {
            Exames.conclusoes.splice(index, 1);
            localStorage.setItem("format_laudo", JSON.stringify(array));
          }
        });
      }
    });
    window.dispatchEvent(new Event("storage"));
  }

  Remove_Observacao(observacao): void {
    console.log("obs", observacao);
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.observacoes.map((e, index) => {
          if (e === observacao) {
            Exames.observacoes.splice(index, 1);
            localStorage.setItem("format_laudo", JSON.stringify(array));
          }
        });
      }
    });
    window.dispatchEvent(new Event("storage"));
  }

  Remove_Conclusao_Select(conclusao): void {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);
    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.conclusoes.map((e, index) => {
          if (e.includes(conclusao)) {
            var posicao = e.indexOf(conclusao);
            if (posicao > -1) {
              Exames.conclusoes.splice(index, 1);
              localStorage.setItem("format_laudo", JSON.stringify(array));
            }
          }
        });
      }
    });
  }
}

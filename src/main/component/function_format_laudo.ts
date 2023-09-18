export class Format_Laudo {
  titulo_exame?: string;
  sub_exame_nome?: string;
  frases_is_empty?: boolean;
  frases_sub_exame?: Array<string>;
  conclusoes_sub_exame?: Array<string>;
  image?: string;

  constructor(
    titulo_exame?: string,
    sub_exame_nome?: string,
    frases_is_empty?: boolean,
    frases_sub_exame?: Array<string>,
    conclusoes_sub_exame?: Array<string>,
    image?: string
  ) {
    this.titulo_exame = titulo_exame;
    this.sub_exame_nome = sub_exame_nome;
    this.frases_is_empty = frases_is_empty;
    this.frases_sub_exame = frases_sub_exame;
    this.conclusoes_sub_exame = conclusoes_sub_exame;
    this.image = image;
  }

  Format_Laudo_Create_Storage(): void {
    const array = JSON.parse(localStorage.getItem("format_laudo")!);

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
            if (this.image != null && this.image != undefined) {
              Exames.subExames.map((subExame, indexS) => {
                if (subExame.subExameNome == this.sub_exame_nome) {
                  Exames.subExames[indexS].image = this.image;
                }
              });
            }
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
    const obs: { id: string; values: string[] } = observacoes;
    const array = JSON.parse(localStorage.getItem("format_laudo")!);

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
    const array = JSON.parse(localStorage.getItem("format_laudo")!);
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
    const array = JSON.parse(localStorage.getItem("format_laudo")!);

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

  Remove_Observacao_Select(observacao): void {
    console.log("caindo aqui");
    const array = JSON.parse(localStorage.getItem("format_laudo")!);
    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.observacoes.map((e, index) => {
          if (e.includes(observacao)) {
            const posicao = e.indexOf(observacao);
            if (posicao > -1) {
              Exames.observacoes.splice(index, 1);
              localStorage.setItem("format_laudo", JSON.stringify(array));
            }
          }
        });
      }
    });
    window.dispatchEvent(new Event("storage"));
  }

  Remove_Conclusao_Select(conclusao): void {
    const array = JSON.parse(localStorage.getItem("format_laudo")!);
    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.conclusoes.map((e, index) => {
          if (e.includes(conclusao)) {
            const posicao = e.indexOf(conclusao);
            if (posicao > -1) {
              Exames.conclusoes.splice(index, 1);
              localStorage.setItem("format_laudo", JSON.stringify(array));
            }
          }
        });
      }
    });
  }

  Remove_Image(): void {
    const array = JSON.parse(localStorage.getItem("format_laudo")!);
    array.map((Exames) => {
      if (Exames.titulo_exame == this.titulo_exame) {
        Exames.subExames.map((subExame, indexS) => {
          if (subExame.subExameNome == this.sub_exame_nome) {
            Exames.subExames.splice(indexS, 1); // remove o elemento da lista
            localStorage.setItem("format_laudo", JSON.stringify(array));
            localStorage.removeItem(this.sub_exame_nome!);
          }
        });
      }
    });
    window.dispatchEvent(new Event("storage"));
  }

  Change_Title(titulo_original, titulo_novo, change): void {
    const array = JSON.parse(localStorage.getItem("format_laudo")!);

    if (change) {
      array.map((Exames) => {
        if (Exames.titulo_exame == titulo_original) {
          Exames.titulo_exame = titulo_novo;
        }
      });
      localStorage.setItem("format_laudo", JSON.stringify(array));
      new Format_Laudo().Format_Laudo_Create_Storage();
    } else {
      array.map((Exames) => {
        if (Exames.titulo_exame == titulo_novo)
          Exames.titulo_exame = titulo_original;
      });
      localStorage.setItem("format_laudo", JSON.stringify(array));
      new Format_Laudo().Format_Laudo_Create_Storage();
    }
  }
}

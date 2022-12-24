
export class Format_Laudo {
  init: boolean;
  sub_exame_nome: string;
  frases_is_empty: boolean;
  frases_sub_exame: Array<string>;

  constructor(
    init: boolean,

    sub_exame_nome: string,
    frases_is_empty: boolean,
    frases_sub_exame: Array<string>
  ) {
    this.init = init;
    this.sub_exame_nome = sub_exame_nome;
    this.frases_is_empty = frases_is_empty;
    this.frases_sub_exame = frases_sub_exame;
  }

  Format_Laudo_Create_Storage(): void {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      if (Exames.titulo_exame == "Transvaginal") {
        if (this.frases_is_empty) {
          Exames.subExames.map((subExame) => {
            if (subExame.subExameNome == this.sub_exame_nome) {
              subExame.frases = null;
              subExame.subExameNome = null;
            }
          });
          localStorage.removeItem(this.sub_exame_nome);
        } else {
          if (
            localStorage.getItem(this.sub_exame_nome) == "0" ||
            localStorage.getItem(this.sub_exame_nome) == null
          ) {
            Exames.subExames.push({
              subExameNome: this.sub_exame_nome,
            });
            localStorage.setItem(this.sub_exame_nome, JSON.stringify(1));
          }
        }
        Exames.subExames.map((subExame, indexS) => {
          if (subExame.subExameNome == this.sub_exame_nome) {
            Exames.subExames[indexS].frases = this.frases_sub_exame;
            localStorage.setItem(this.sub_exame_nome, JSON.stringify(1));
          }
        });
      }
    });
    localStorage.setItem("format_laudo", JSON.stringify(array));
    window.localStorage.setItem("isThisInLocalStorage", JSON.stringify(1));
    window.dispatchEvent(new Event("storage"));
  }
}

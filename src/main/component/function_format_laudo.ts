export class Format_Laudo {
  array_frases_is_empty: boolean;
  sub_exame_nome: string;
  frases_sub_exame: Array<string>;

  constructor(
    array_frases_is_empty: boolean,
    sub_exame_nome: string,
    frases_sub_exame: Array<string>
  ) {
    this.array_frases_is_empty = array_frases_is_empty;
    this.sub_exame_nome = sub_exame_nome;
    this.frases_sub_exame = frases_sub_exame;
  }

  Format_Laudo_Create_Storage(): void {
    var array = JSON.parse(localStorage.getItem("format_laudo")!);

    array.map((Exames) => {
      if (Exames.titulo_exame == "Transvaginal") {
        if (this.array_frases_is_empty) {
          Exames.subExames.map((subExame) => {
            if (subExame.subExameNome == this.sub_exame_nome) {
              subExame.frases = null;
              subExame.subExameNome = null;
            }
          });
        } else {
          Exames.subExames.map((sub_exame, index) => {
            if (sub_exame.subExameNome.includes(this.sub_exame_nome)) {
              if (sub_exame.subExameNome == this.sub_exame_nome) {
                Exames.subExames[index].frases = this.frases_sub_exame;
                if (Exames.subExames[index].frases != null) {
                  dispatchEvent(new Event("storage"));
                }
              }
            } else {
              Exames.subExames.push({
                subExameNome: this.sub_exame_nome,
              });
            }
          });
        }
      }
    });
    localStorage.setItem("format_laudo", JSON.stringify(array));
    window.localStorage.setItem("isThisInLocalStorage", JSON.stringify(1));
  }
}

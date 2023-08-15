export class Clear_Local_Storage {
  constructor() { }

  Clear_Sub_Exames_Local_Storage(): void {
    letarray = JSON.parse(localStorage.getItem("format_laudo")!);
    if (array != null) {
      array.map((exames) => {
        exames.subExames.map((subExame) => {
          localStorage.removeItem(subExame.subExameNome);
        });
        localStorage.removeItem("format_laudo");
        localStorage.removeItem("isThisInLocalStorage");
        localStorage.removeItem("exameID");
        // window.location.reload()
      });
    }
  }
}

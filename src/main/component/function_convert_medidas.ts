export class Convert_Medida {
  medida: string | null;

  constructor(medida_1: string) {
    this.medida = medida_1;
  }

  Convert_Medida(): string {
    const parse = Number(this.medida);
    return (parse / 10).toString()
  }
}

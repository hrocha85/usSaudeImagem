export default class Laudo {
    private _titulo: string;
    private _informacoes: Array<string>;
    //private _informacoes: Array<string>;

    constructor(titulo: string, informacoes: Array<string>) {
        this._titulo = titulo;
        this._informacoes = informacoes
    }
    public get informacoes(): Array<string> {
        return this._informacoes
    }

    public set informacoes(informacoes: Array<string>) {
        this._informacoes = informacoes;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }


}
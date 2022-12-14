/* eslint-disable @typescript-eslint/no-unused-expressions */
import Exame from "./Exame"
import Laudo from "./Laudo"

export default class LuadoPrincipal {
    private _id: number;
    private _nomeExame: string;
    private _laudos: Laudo[]
    // private _titulo: string;
    // private _informacoes: Array<string>;

    constructor(id: number, nomeExame: string) {
        this._id = id
        this._nomeExame = nomeExame
        this._laudos = []
    }

    // constructor(id: number, nomeExame: string, titulo: string, informacoes: Array<string>) {
    //     this._id = id
    //     this._nomeExame = nomeExame
    //     this._titulo = titulo;
    //     this._informacoes = informacoes
    // }

    // public get informacoes(): Array<string> {
    //     return this._informacoes
    // }

    // public set informacoes(informacoes: Array<string>) {
    //     this._informacoes = informacoes;
    // }

    // public get titulo(): string {
    //     return this._titulo;
    // }

    // public set titulo(titulo: string) {
    //     this._titulo = titulo;
    // }

    public get laudos(): Laudo[] {
        return this._laudos;
    }

    public set laudos(laudos: Laudo[]) {
        this._laudos;
    }

    public get id(): number {
        return this._id
    }

    public set id(id: number) {
        this._id = id
    }

    public get nomeExame(): string {
        return this._nomeExame
    }

    public set nomeExame(nomeExame: string) {
        this._nomeExame = nomeExame
    }

    public adicionaLaudo(titulo: string, informacoes: Array<string>): number {
        return this._laudos.push(new Laudo(titulo, informacoes))
    }

    public removeCapitulo(laudo: Laudo): number {
        let laudoToRemove = this._laudos.indexOf(laudo);
        if (laudoToRemove !== -1) {
            this._laudos.splice(laudoToRemove, 1);
        }
        return laudoToRemove;
    }

    // public cadastrarLaudoPrin(exame: Exame, laudos: Array<Laudo>) {
    //     this.cadastraLaudo(exame, laudos)
    //     this._exame.push(exame)
    // }

    // public get exames(): Exame[] {
    //     return this._exame
    // }
    // private cadastraLaudo(exame: Exame, laudos: Laudo[]) {
    //     for (let laudo of laudos) {
    //         exame.adicionaLaudo(laudo)
    //     }
    // }
    // public get orgaos(): Orgao[] {
    //     return this._orgaos
    // }
    // public set orgaos(orgaos: Orgao[]) {
    //     this._orgaos
    // }
    // public get laudos(): Laudo[] {
    //     return this._laudos
    // }
    // public set laudos(laudos: Laudo[]) {
    //     this._laudos
    // }
    // public set exames(exames: Exame[]) {
    //     this._exames
    // }

}
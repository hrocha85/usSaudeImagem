/* eslint-disable @typescript-eslint/no-unused-expressions */
import Exame from "./Exame"
import Laudo from "./Laudo"

export default class LuadoPrincipal {
    private _exame: Exame[]

    constructor() {
        this._exame = []
    }

    public cadastrarLaudoPrin(exame: Exame, laudos: Array<Laudo>) {
        this.cadastraLaudo(exame, laudos)
        this._exame.push(exame)
    }

    public get exames(): Exame[] {
        return this._exame
    }
    private cadastraLaudo(exame: Exame, laudos: Laudo[]) {
        for (let laudo of laudos) {
            exame.adicionaLaudo(laudo)
        }
    }
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
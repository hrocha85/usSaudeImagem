import Laudo from "./Laudo";

export default class Exame {
    private _id: number;
    private _nomeExame: string;
    private _laudos: Laudo[]

    constructor(id: number, nomeExame: string) {
        this._id = id
        this._nomeExame = nomeExame
        this._laudos = []
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
    public get laudos(): Laudo[] {
        return this._laudos
    }
    public adicionaLaudo(Laudo: Laudo) {
        return this._laudos.push(Laudo)
    }
}
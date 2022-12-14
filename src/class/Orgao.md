/* eslint-disable @typescript-eslint/no-unused-expressions */
import Laudo from "./Laudo";

export default class Orgao {
    private _titulo: string;
    private _laudos: Laudo[];

    constructor(titulo: string) {
        this._titulo = titulo;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public set titulo(titulo: string) {
        this._titulo = titulo;
    }

    public get laudos(): Laudo[] {
        return this._laudos
    }

    public set laudos(laudos: Laudo[]) {
        this._laudos;
    }

    public adicionaLaudo(laudo: Laudo) {
        return this._laudos.push(laudo);
    }
    public removeLaudo(laudo: Laudo) {
        let laudoRemove = this._laudos.indexOf(laudo);
        if (laudoRemove !== -1) {
            this._laudos.splice(laudoRemove, 1);
        }
        return laudoRemove
    }
}

import LaudoPrincipal from "./LaudoPrincipal";
import Laudo from "./Laudo"

export default class LaudoMaster {
    private _laudoPrincipal: LaudoPrincipal[];

    constructor() {
        this._laudoPrincipal = []
    }

    public get laudosPrincipais(): LaudoPrincipal[] {
        return this._laudoPrincipal;
    }

    public cadastrarLaudo(laudoPrincipal: LaudoPrincipal, laudos: Array<Laudo>) {
        this.cadastraLaudo(laudoPrincipal, laudos)
        this._laudoPrincipal.push(laudoPrincipal)
    }

    private cadastraLaudo(laudoPrincipal: LaudoPrincipal, laudos: Laudo[]) {
        for (let laudo of laudos) {
            laudoPrincipal.adicionaLaudo(laudo.titulo, laudo.informacoes);
        }
    }
}
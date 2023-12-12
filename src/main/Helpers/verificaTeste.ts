function verificarTesteGratuito(dataInicioTeste: string): boolean {
    // Obter a data atual
    const dataAtual = new Date();
    const iniciTeste = new Date(dataInicioTeste);
    // Calcular a diferença em milissegundos
    const diferencaEmMilissegundos = dataAtual.getTime() - iniciTeste.getTime();

    // Calcular a diferença em dias
    const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);

    // Verificar se passaram 7 dias
    return diferencaEmDias >= 15;
}

export default verificarTesteGratuito
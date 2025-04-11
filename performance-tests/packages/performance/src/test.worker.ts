
export const expensiveTask =  async():Promise<void> => {
    const start = performance.now();
    while (performance.now() - start < 2000) {
      // simula tarefa pesada (mas agora não bloqueia o clique)
    }
    return;
}
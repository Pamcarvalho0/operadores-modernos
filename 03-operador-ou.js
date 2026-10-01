//
// 3. Operador lógico OU / OR (||)
// Retorna o primeiro valor Truthy. Se for Falsy, pega o próximo.
// Valores Falsy: false, 0, "", null, undefined, NaN
//
console.log("\n=== 3. Operador lógico OR (||) ===");

// Exemplo 1: Retorna o primeiro valor (Truthy)
console.log("Nome preenchido:", "Davi" || "Visitante"); // "Davi"
console.log("Nome nulo:", null || "Visitante"); // "Visitante"

// Exemplo 2: Comportamento com 0 e string vazia (valores Falsy)
// 0 || considera 0 e "" como falsos e substitui pelo padrão:
const pontuacao = 0;
console.log("0 com || (troca por 10):", pontuacao || 10); // 10

const apelido = "";
console.log("String vazia com || (troca por padrão):", apelido || "Anonimo"); // "Anonimo"

// Exemplo 3: Comparação direta entre || e ?? com o número 0
console.log("0 com ||:", 0 || 10); // 10 (porque 0 é Falsy)
console.log("0 com ??:", 0 ?? 10); // 0 (porque 0 não é null ou undefined)

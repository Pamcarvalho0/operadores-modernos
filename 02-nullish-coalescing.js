//
// 2. Nullish coalescing (??)
// Define valor padrão APENAS se for 'null' ou 'undefined'.
// Preserva valores válidos como 0, false e string vazia ("").
//
console.log("\n=== 2. Nullish coalescing (??) ===\n");

// Exemplo 1: Substitui null ou undefined por padrão amigável
const tema = null;
console.log("Tema:", tema ?? "Claro"); // "Claro"

const telefone = undefined;
console.log("Telefone:", telefone ?? "Não informado"); // "Não informado"

// Exemplo 2: Preserva o número 0, false e string vazia ("")
const tentativas = 0;
console.log("Tentativas:", tentativas ?? 3); // 0

const apelido = "";
console.log("Apelido (preservando string vazia):", apelido ?? "Visitante"); // ""

const aceitouTermos = false;
console.log("Termos (preserva false):", aceitouTermos ?? true); // false

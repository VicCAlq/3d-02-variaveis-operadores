/** Assunto 02 - Operadores Aritméticos
 *
 * Para entendermos operadores, precisamos primeiro entender os "tipos"
 * de operadores:
 *
 * 1. "Operador": São os símbolos que realizam uma operação (no caso de operadores
 *                aritméticos) ou uma comparação (no caso de operadores lógicos).
 *                Os símbolos + - * / % e ** são os principais operadores aritméticos,
 *                enquanto que os símbolos == === != !== > < >= <= são Operadores
 *                lógicos. O sinal de = (sem repetição) também é um operador, chamado
 *                de operador de atribuição (ele armazena um valor em uma variável).
 * 2. "Operando": É o valor no qual um "operador" atua. Pode ser dos tipos:
 *     - "Unário": Quando se trada de apenas um valor (exemplo: -2 aplica o operador de 
 *                "subtração" ao operando "2") 
 *     - "Binário": Quando o operando possui dois valores (exemplo: 4 * 8 aplica o operador
 *                  de "multiplicação" aos operandos "4" e "8")
 *
 * E quais são nossos operadores?
 * 1. Adição (+): Retorna o resultado da adição entre dois números
 * 2. Subtração (-): Pode tanto subtrair um número de outro, quanto converter um número 
 *                   positivo para negativo (-2) quanto um número negativo para positivo (-(-2))
 * 3. Multiplicação (*): Retorna o resultado da multiplicação dois números
 * 4. Divisão (/): Retorna o resultado da divisão dois números
 * 5. Módulo ou Restante (%): Retorna o restante do resultado da divisão entre dois 
 *                            números (exemplo: 5 % 2 retorna 1)
 * 6. Exponenciação (**): Retorna o resultado da operação de elevar o primeiro número
 *                        a potência do segundo (2 ** 3 retorna 8)
 */

/** Questões 01 a 06
 * Substitua as interrogações nas expressões abaixo pelo operador correto para 
 * que o resultado da conta seja igual ao nome da variável, exemplo:
 *
 * let cinquentaECinco = 5 ?? 11
 * Resposta:
 * let cinquentaECinco = 5 * 11
 */
// Respostas
/* 01 */ let quarentaEDois = 7 * 6
/* 02 */ let noventaENove = 198 / 2
/* 03 */ let oitentaEQuatro = 44 + 40
/* 04 */ let sessentaEOito = 340 / 5
/* 05 */ let sessentaESeis = 6 * 11
/* 06 */ let tres = 21 % 6
/* 07 */ let centoEVinteEOito = 2 ** 7
/* 08 */ let setentaECinco = 5 * (3 * 5)
/* 09 */ let centoEOito = 27 + 27 + 27 * 27
/* 10 */ let cinquentaEUm = 10 * 5 + 1
/* 11 */ let quinze = 90 / 6
/* 12 */ let sete = 84 % 11
/* 13 */ let quarentaECinco = 945 * 50
/* 14 */ let quarentaENove  = 7 ** 2

/* NÃO MUDAR NADA DESTA LINHA EM DIANTE */
export {
  quarentaEDois,
  noventaENove,
  oitentaEQuatro,
  sessentaEOito,
  sessentaESeis,
  tres,
  centoEVinteEOito,
  setentaECinco,
  centoEOito,
  cinquentaEUm,
  quinze,
  sete,
  quarentaECinco,
  quarentaENove
}

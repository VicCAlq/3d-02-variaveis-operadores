/* Assunto 01 - Tipos de variáveis
 *
 * JavaScript possui 7 tipos primários de variáveis, sendo dois destes utilizados apenas
 * em situações específicas e menos comuns:
 *
 * 1. Tipo "string" - Para quaisquer valores texto, que é qualquer conteúdo criado dentro
 *                    de áspas símples (''), áspas duplas  ("") ou crases duplas (``)
 * 2. Tipo "number" - Para quaisquer valores numéricos. Conjuntos de milhares, milhões e
 *                    afins são separados com _ (1_234_900 é o nosso 1.234.900), e casas
 *                    decimais (números inferiores a zero) são separados com ponto (.),
 *                    logo o número que normalmente escreveríamos como 2.450,75 em 
 *                    JavaScript se escreve como 2_450.75
 * 3. Tipo "boolean" - Para valores de "verdadeiro" (true) e "falso" (false). São escritos
 *                     sem áspas, parênteses nem nada: let verdadeiro = true
 * 4. Tipo "undefined" - Para quando temos uma forma para acessar algum valor (nome, índice
 *                       em uma lista, propriedade em um objeto), mas esse valor ainda não
 *                       existe: seja por que ainda não foi atribuído nenhum valor a ele, ou
 *                       por que o valor existente anteriormente foi descartado. Se quisermos
 *                       usar o tipo "indefinido" diretamente, basta atribuir o valor undefined
 * 5. Tipo "bigint" - Para números grandes demais para o tipo "number"
 * 6. Tipo "symbol" - Valor que representa um identificador único para o programa.
 * 7. Tipo "Object" - Quaisquer outras estruturas em JavaScript são consideradas Objetos: Listas?
 *                    objetos. Classes? Objetos. Tuplas? Objetos também. Nulo? Acredite ou não,
 *                    objeto também.
 * 
 * Agora responda as atividades abaixo
 */

/* Questões de 01 a 05
 * 
 * Atribua as variáveis abaixo o nome do tipo delas para o JavaScript. O nome deve
 * ser escrito entre áspas.
 */
// Resposta
/* 01 */ let nomeDoTipoTexto = "String"
/* 02 */ let nomeDoTipoNumero = "Number"
/* 03 */ let nomeDoTipoBooleano 
/* 04 */ let nomeDoTipoIndefinido
/* 05 */ let nomeDoTipoObjeto

/* Questões de 01 a 05
 * 
 * Atribua para as variáveis abaixo valores correspondentes ao tipo de cada uma.
 */
// Resposta
/* 06 */  let souTexto
/* 07 */  let souNumero = 2
/* 08 */  let souBooleano = true
/* 09 */  let souIndefinido = undefined
/* 10 */  let souObjeto = null

export {
  nomeDoTipoTexto,
  nomeDoTipoNumero,
  nomeDoTipoBooleano,
  nomeDoTipoIndefinido,
  nomeDoTipoObjeto,
  souTexto,
  souNumero,
  souBooleano,
  souIndefinido,
  souObjeto
}

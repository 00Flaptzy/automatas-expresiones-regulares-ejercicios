//[\$\€\£\¥]
///[\s\p{Zs}]/gu
///[\p{Script=Latin}\p{Script=Greek}]/gu
///[\p{L}\p{N}]/gu
let texto = 'abc12 3!@# $€$£¥ ΑλφαβητικόςabcΑΒΓαβγ';
let expresion = /[\p{L}\p{N}]/gu;
console.log(texto.match(expresion));

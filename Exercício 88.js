//Exercício 88: Dado um array de preços de produtos, calcule o preço total após adicionar 10% de imposto a cada produto usando map(), e depois somando tudo com reduce().
function calcularPrecoTotalComImposto(precos) {
    return precos.map(preco => preco * 1.1).reduce((total, preco) => total + preco, 0);
}
const precos = [100, 200, 300];
const precoTotalComImposto = calcularPrecoTotalComImposto(precos);
console.log(precoTotalComImposto);
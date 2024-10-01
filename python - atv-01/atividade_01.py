"""1) Crie uma variável chamada x , com valor de 10 e printe-a."""

x = 10
print(x)

"""2) Eleve a variável x ao cubo e printe o resultado."""

x = x**3
print(x)

"""3) Some o primeiro e o terceiro valor da lista [1,2,3,4,5] e printe a resposta"""

lista = [1,2,3,4,5]
soma = lista[0] + lista[2]
print(soma)

"""4) Crie uma variável com o valor '0123456789' (em formato de string), e printe:

    a) Do 3º caractere em diante
    
    b) Do primeiro ao 5º caractere
    
    c) Do 3º ao 6º caractere
    
    d) O último caractere da string
    
    e) O penúltimo caractere da string
"""

y = '0123456789'

"""a) Do 3º caractere em diante"""

print(y[2:])

"""b) Do primeiro ao 5º caractere"""

print(y[:5])

"""c) Do 3º ao 6º caractere"""

print(y[2:6])

"""d) O último caractere da string"""

print(y[-1])

"""e) O penúltimo caractere da string"""

print(y[-2])

"""5) Crie um dicionário que contenha como chave os valores da Coluna 1, e como valores, os valores da Coluna 2.

|Coluna 1| Coluna 2|
|--------|---------|
| a      |   1     |
| b      |   2     |
| c      |   3     |
| d      |   4     |
| e      |   5     |

Após criado printe os valores das chaves "b" e "e".
"""

dicionario = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5
}
print(dicionario['b'])
print(dicionario['e'])
import React from 'react'
import HeaderPost from '../components/HeaderPost'
import Markdown from '../components/Markdown'
export default function SonarPost() {
    const markdown = `

![pintura](https://i2.wp.com/atraves.tv/wp-content/uploads/2018/09/Semana-de-Arte-Moderna-1922-696x353.jpg?fit=696%2C353)
    
A Arte Moderna é o conjunto de expressões artísticas que surgiu na Europa no final do século XIX e perdurou até meados do século XX.

Ela abrange especialmente a arquitetura, a escultura, a literatura e a pintura.

No Brasil, essa corrente artística se consolidou com a Semana da Arte Moderna que ocorreu em 1922 no Teatro Municipal da cidade de São Paulo.

Considera-se que a arte moderna teve seu declínio com o final da Segunda Guerra Mundial, dando lugar a outras correntes artísticas da arte contemporânea ou pós-moderna.

# Principais Características da Arte Moderna

A arte moderna tem como principal característica o rompimento com os padrões vigentes. Tal aspecto se dá principalmente por conta de seu momento histórico.

Aconteceu em um período de grandes conquistas tecnológicas (como o invento da fotografia e do cinema), além da Revolução Industrial, a Primeira Guerra Mundial e posteriormente a Segunda Guerra Mundial.

Assim, a arte também se transforma e passa a exercer cada vez mais um papel contestador, expressando de alguma forma as incertezas e dilemas da contemporaneidade.

Essa expressão artística transformou radicalmente o campo das artes ao quebrar com os formalismos, atingindo inclusive as estruturas gramaticais no campo literário.

Suas principais características são:

* Rejeição ao academicismo
* Informalidade
* Liberdade de expressão
* Pontuação relativa
* Aproximação da linguagem popular e coloquial
* Figuras deformadas e cenas sem lógica
* Abandono da representação das formas de maneira realista
* Arbitrariedade no uso das cores
* Urbanismo
* Humor, irreverência
* Rejeição ao academicismo
* Informalidade
* Liberdade de expressão
* Pontuação relativa
* Aproximação da linguagem popular e coloquial
* Figuras deformadas e cenas sem lógica
* Abandono da representação das formas de maneira realista
* Arbitrariedade no uso das cores
* Urbanismo
* Humor, irreverência
* Estranhamento
`
    return (
        <>
            <HeaderPost title="Arte moderna no Brasil"/>
            <Markdown source={markdown}/>
        </>
    )
}
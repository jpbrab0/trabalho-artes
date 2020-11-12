import React from 'react'
import HeaderPost from '../components/HeaderPost'
import Markdown from '../components/Markdown'
export default function Scanner() {
    const markdown = `

![grafite](https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/grafite.jpg)
   
<p>O grafite é um tipo de arte urbana caracterizado pela produção de desenhos em locais públicos como paredes, edifícios, ruas, etc.

É bastante usado como forma de crítica social, e, além disso, é uma maneira de intervenção direta na cidade, democratizando assim, os espaços públicos.

O termo grafite, de origem italiana graffito - plural graffite - significa “escrita feita com carvão”.
</p>

# Origem do Grafite

<p>
Se falarmos sobre os primórdios do grafite, teremos que voltar milhares de anos, quando os homens faziam inscrições nas cavernas. Há exemplos de intervenções feitas em locais públicos já na época do Império Romano.

Na contemporaneidade, essa manifestação artística está relacionada principalmente ao hip-hop, movimento cultural que teve início no começo dos anos 70 nos EUA pelas comunidades latinas, afro-americanas e jamaicanas.

No hip-hop são três as vertentes da arte: rap (música), breakdance (dança) e grafite (pintura mural).
</p>
`
    return (
        <>
            <HeaderPost title="Arte urbana"/>
            <Markdown source={markdown} />
        </>
    )
}
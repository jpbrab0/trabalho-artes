import React from 'react'
import HeaderPost from '../components/HeaderPost'
import Markdown from '../components/Markdown'

export default function BarsCode() {
    const markdown = `

![fotografia foto](https://talentosbrasil.com.br/uploads/cursos/fotografia.jpg)

Fotografia é a técnica de criar imagens por exposição luminosa em uma superfície fotossensível.

A primeira fotografia reconhecida foi feita em 1826, pelo francês Joseph Nicéphore Niépce, no entanto o desenvolvimento da fotografia não pode ser atribuído apenas a uma pessoa. Diversas descobertas ao longo do tempo foram somadas para que fosse possível desenvolver a fotografia como é conhecida hoje. Químicos e físicos foram os pioneiros nesta arte, já que os processos da revelação e da fixação da fotografia são essencialmente físico-químicos, numa associação de condições ambientais e de iluminação a produtos químicos.
    
Com o passar do tempo a essência da forma de fazer fotografia não mudou, no entanto, os avanços tecnológicos permitem cada vez mais melhorar a qualidade da fotografia, aumentar a resolução e a realidade das cores. A busca pela acessibilidade da fotografia também era grande preocupação logo em seu surgimento, a busca era intensa por materiais duráveis, eficazes e de baixo custo e pela aceleração no processo de revelação.
`
    return (
        <>
            <HeaderPost title="Fotografia"/>
            <Markdown source={markdown}/>
        </>
    )
}
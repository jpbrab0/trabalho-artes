import React from 'react'
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import ParalaxTop from '../../components/Paralax';
import '../../reset.css'
function Home() {
  return (
    <>
      <Header/>
      <ParalaxTop/>
      <Cards>
        <Card href="/fotografia" img_url="https://talentosbrasil.com.br/uploads/cursos/fotografia.jpg" img_alt="fotografia" title="Fotografia" description="Artigo sobre a fotografia."/>
        <Card href="/grafite" img_url="https://images.educamaisbrasil.com.br/content/banco_de_imagens/guia-de-estudo/D/grafite.jpg" img_alt="grafite" title="Grafite" description="Artigo sobre a história do grafite."/>
        <Card href="/arte-moderna" img_url="https://i2.wp.com/atraves.tv/wp-content/uploads/2018/09/Semana-de-Arte-Moderna-1922-696x353.jpg?fit=696%2C353" img_alt="Arte moderna no brasil cartaz" title="Arte moderna no brasil" description="Artigo sobre a arte moderna no Brasil."/>
      </Cards>
    </>
  );
}

export default Home;

import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import Loading from '../../assets/img/loading.gif';


function Home() {
   const [dadosIniciais, setDadosIniciais] = useState([]);

   useEffect(() => {
      categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
         setDadosIniciais(categoriasComVideos);

      })
      .catch((err) => {
         console.log(err.message);
      });
    }, []);


  return (
    <PageDefault paddingAll = {0}>
      {dadosIniciais.length === 0 && (
      <center>
         <div id = "loading" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw',
            backgroundColor: 'black',
         }}>
            <img src = {Loading} alt = "loading" height = "200px" />
         </div>
      </center>
      )}

      {dadosIniciais.map((categoria, indice) => {
      if (indice === 0) {
         return(
            <div key = {categoria.id}>
         <BannerMain
         videoTitle = {dadosIniciais[0].videos[0].titulo}
         url = {dadosIniciais[0].videos[0].url}
         videoDescription = "Conheça um dos físicos mais geniais e irreverentes da história e descubra uma nova forma de olhar para os estudos!"
         />
 
         <Carousel
           ignoreFirstVideo
           category = {dadosIniciais[0]}
           />
           </div>
         );
      }

      return(
         <Carousel
         key = {categoria.id}
         category = {categoria}
         />
      );
      })}
      
    </PageDefault>

  );
}

export default Home;

import config from '../config';

const URL_CATEGORIES = `${config.URL}/categorias`;

async function getAll(){
    const respostaDoServidor = await fetch(`${URL_CATEGORIES}?_embed=videos`);
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
    }
    throw new Error('Não foi possível pegar os dados');

}


async function getAllWithVideos(){
    const respostaDoServidor = await fetch(`${URL_CATEGORIES}?_embed=videos`);
    if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
    }
    throw new Error('Não foi possível pegar os dados');

}

export default{
  getAllWithVideos,
  getAll,
};
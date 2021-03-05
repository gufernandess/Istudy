import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const {handleChange, values} = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
    .getAll()
    .then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
    
  }, []);

    return(

      <PageDefault>
        <h1>Página de cadastro de vídeo</h1>

        <form onSubmit = {(event) => {
          event.preventDefault();

          const categoriaEscolhida = categorias.find((categoria) => {
            return categoria.titulo === values.categoria;

          });

          console.log('categoriaEscolhida', categoriaEscolhida);

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: categoriaEscolhida.id,
          })

          .then(() => {
            console.log('Cadastrou com sucesso');
            history.push('/');
          }); 
        }}
        >
          <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          />

          <FormField
          label="URL do Video"
          name="url"
          value={values.url}
          onChange={handleChange}
          />

          <FormField
          label="Categoria do Video"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          />

          <Button type = "submit">
            Cadastrar
          </Button>
        
         <Link to = "/cadastro/Categoria">
         <Button type = "submit">
          Nova categoria
          </Button>
          </Link>
          </form>
        </PageDefault>
        
    )
  }

  export default CadastroVideo;
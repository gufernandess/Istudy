import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import Loading from '../../../assets/img/loading.gif';


function CadastroCategoria(){

  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  }

  const {handleChange, values, clearForm} = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);
  

 useEffect(() => {
   const URL = 'https://istudyreact.herokuapp.com/categorias';
   fetch(URL);
   fetch('https://istudyreact.herokuapp.com/categorias')
   .then(async(respostaDoServidor) => {
     const resposta = await respostaDoServidor.json();
     setCategorias([
       ...resposta,
     ]);
   });

}, []);


    return(

      <PageDefault>
        <h1>Cadastro de categoria: { values.nome }</h1>

        <form onSubmit = {function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ]);

          clearForm();

        }}>

          <FormField
             label="Nome da Categoria"
             type="text"
             name="nome" 
             value={values.nome}
             onChange = {handleChange}
          />

         <FormField
             label="Descrição"
             type="textarea"
             name="descrição" 
             value={values.descrição}
             onChange = {handleChange}
          />


        <FormField
          label="Cor"
          type="color"
          name="cor" 
          value={values.cor}
          onChange = {handleChange}
          />


        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
      <div>
        <img src = {Loading} alt = "loading" height = "15px"/>
        </div>
      )}

      <ul>
        {categorias.map((categoria) => {
          return ( 
          <li key = {`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
          )
        })}
      </ul>

        </PageDefault>
    )
  }

  export default CadastroCategoria;
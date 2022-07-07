import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')    //hook: mantem o estado dentro de uma funcao
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')        
    const [time, setTime] = useState('')            

    const aoSalvar = (evento) => {
        evento.preventDefault()             //evita o comportamento padrao
        props.aoColaboradorCadastrado({     //chama a funcao aoColaborador e passa o objeto
            nome,
            cargo,
            imagem,
            time    
       })      
       setNome('')  //limpa imputs
       setCargo('')
       setImagem('')
       setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}                    
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.nomeTimes}
                    valor={time} 
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario

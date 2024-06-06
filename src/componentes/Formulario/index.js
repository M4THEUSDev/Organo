import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoPersonagemCadastrado({
            nome,
            funcao,
            imagem,
            time
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do seu personagem favorito</h2>
                <CampoTexto 
                        obrigatorio="True" 
                        label="Nome" 
                        placeholder="Digite seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                        obrigatorio="True" 
                        label="Função" 
                        placeholder="Digite a função por exemplo: Professor" 
                        valor={funcao}
                        aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto 
                        label="Imagem" 
                        placeholder="Digite o endereço da imagem" 
                        valor={imagem}
                        aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                        obrigatorio="True"
                        label = "Time" 
                        itens={props.times}
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
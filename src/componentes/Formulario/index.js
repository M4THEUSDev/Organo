import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
import { useState } from 'react';

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                        obrigatorio="True" 
                        label="Nome" 
                        placeholder="Digite seu nome" 
                        valor={nome}
                        aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                        obrigatorio="True" 
                        label="Cargo" 
                        placeholder="Digite seu cargo" 
                        valor={cargo}
                        aoAlterado={valor => setCargo(valor)}
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
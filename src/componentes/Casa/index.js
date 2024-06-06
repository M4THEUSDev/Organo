import Personagens from '../Personagem'
import './Casa.css';


const Casa = (props) => {

    // É a mesma coisa que fazer isto abaixo 
    // const css = { backgroundColor: props.corSecundaria }

    return (
        
       (props.personagens.length > 0) ? <section className='casa' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ color: props.corTitulo}}>{props.nome}</h3>
            <div className='Perso'>
            {props.personagens.map(personagens => 
            <Personagens 
            key={personagens.nome} 
            nome={personagens.nome} 
            funcao={personagens.funcao} 
            imagem={personagens.imagem}
            corH4={props.corH4}
            corCabecalho={props.corPrimaria}/>)}
            </div>
        </section>
       : ''
    )

}

export default Casa;
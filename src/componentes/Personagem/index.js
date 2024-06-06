import './Personagem.css';

const Personagens = ({nome, imagem, funcao, corCabecalho,corH4}) => {

    return (
        <div className='personagem'>
        <div className='cabecalho' style={{ backgroundColor: corCabecalho }}>
            <img src={imagem} alt={nome}/>
        </div>

        <div className='rodape'>
            <h4 style={{color: corH4}}>{nome}</h4>
            <h5>{funcao}</h5>
        </div>
    </div>)
}

export default Personagens;
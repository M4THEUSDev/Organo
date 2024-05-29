import './CampoTexto.css';

// Componente em REACT começa com letra maiuscula! 
const CampoTexto = (props) => {


    const aoDigitado = (evento) => {

        props.aoAlterado(evento.target.value)

        // setValor (evento.target.value)
        // console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label} 
            </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {`${props.placeholder}...`}/>
            {/* <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder= {`${props.placeholder}...`}/> */}
        </div>
    )
}

export default CampoTexto;



// ONCHANGE = TODA VEZ QUE ESSE CARA FOR ALTERADO, EU QUERO EXECUTAR UMA FUNÇÃO
// OU SEJA, TODA VEZ QUE O USUÁRIO DIGITAR ALGO EU QUERO EXECUTAR UM FUNÇÃO!
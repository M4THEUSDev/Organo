import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )

}

export default ListaSuspensa;

// Key = informa que o elemento deve ter uma chave unica! 

// FOR EACH = PERCORRE A LISTA E FAZ ALGUMA COISA, OU SEJA ELE SÓ ITERA.

// MAP = PERCORRE A LISTA, FAZ ALGUMA COISA E DEVOLVE UMA NOVA LISTA OU SEJA, TRANSFORMA ALGUMA COISA NUMA LISTA DIFERENTE. 
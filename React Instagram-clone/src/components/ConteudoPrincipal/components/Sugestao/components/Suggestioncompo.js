
     function Componentsugges(props) {
    return (
        <div className="infos-suggestion" >
                        <div className='perfilsuges'>
                        <img alt='error' src={props.logimage} />
                        <div className="info-suggestion" >
                            <span>{props.login}</span>
                            <p>Sugestões para você</p>
                        </div>
                        </div>
                        <div className='seguir'>
                        <button className='follow' >Seguir</button>
                        </div>
        </div>
    );}

    export default Componentsugges;
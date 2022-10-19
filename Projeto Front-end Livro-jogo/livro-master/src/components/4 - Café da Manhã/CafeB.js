import { Link } from 'react-router-dom';
import './CafeAB.css'
import seta from './images/right-arrow.png'

function CafeB(){
    return(
        <div className='fundocaf'>
        <div className='container'>
        <div className='textcaf'>
            <div className='caixatitulo'><p className='titulo'>Café da tarde</p></div>   
            <div className='caixatexto'><p className='textob'>Todo mundo ficou comportado, e o café ocorreu bem.
                    Mas na mente de Léo…
                    <br/>— COMO ASSIM A GENTE NÃO VAI DANÇAR?! — Disse empolgação e a ingenuidade
                   <br/> — Melhor não gente, vai se a gente canta mal, dança mal, cai no chão quebra alguma coisa, m-melhor não… — Disse medo num tom de desespero
                   <br/> — AIN GENTE, DEIXA O MENINO SENTADO! PRA QUE DANÇAR, VAI CANSAR, ELE JÁ ESTA SE DIVERTINDO, TÁ SENTADO, COMENDO E BEBENDO, NÃO HÁ VIDA MELHORRR! — Completou a Procrastinação
                   <br/>Assim o medo e a procrastinação tomou conta da sala de controle e assim terminou o dia…
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Trab"> <button  className='btncaf'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default CafeB;
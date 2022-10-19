import { Link } from 'react-router-dom';
import './Trab.css'
import seta from './images/right-arrow.png'

function Trab(){
    return(
        <div className='fundoTrab'>
        <div className='container'>
        <div className='texttrab'>
            <div className='caixatitulo'><p className='titulo'>Trabalho cantado / Transporte coletivo</p></div>   
            <div className='caixatexto'><p className='textob'>Nessa altura do campeonato todo mundo já percebeu como o nosso Léo ama música, além dele tocar e não seria difícil imaginar que ele aplicaria isso em algum trabalho, e quando todo mundo esperava por textos e slides, o que veio foi o Léo pixar em ação com seu Ukulele, cantando a vida no transporte coletivo. A princípio seria aleatória a ideia senão tivesse sido criada no discord.
            <br/> — Esse discord tá bem-parado, você não acha procrastinação? — Perguntou empolgação
            <br/>  — Para mim tá ótimo, apesar de só tocar "Amor de fim de noite", maaas tudo bem né — Respondeu procrastinação
            <br/>  — Huuuuuum, vou movimentar um pouco isso — Disse curiosidade
            <br/>  Do lado de fora estava lá o Léo, e advinha o que ele estava fazendo? Isso mesmo, cantando.
            <br/> — Ei Léo! E se você apresentar cantando ein? Propôs curiosidade
            <br/> E foi assim que aquela apresentação surgiu, no fundo, ensina que nem sempre uma boa ideia vai vir de horas em frente ao computador, às vezes você só precisa estar ouvindo um bot do discord...
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Volta"> <button  className='btntrab'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default Trab;
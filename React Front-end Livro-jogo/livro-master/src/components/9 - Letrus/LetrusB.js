import { Link } from 'react-router-dom';
import './Letrus.css'
import seta from './images/right-arrow.png'

function LetrusB(){
    return(
        <div className='fundoletrus'>
        <div className='container'>
        <div className='textletrus one'>
            <div className='caixatitulo'><p className='titulo'>Redações, oh, redações! - Letrus</p></div>   
            <div className='caixatexto'><p className='textob'>O celular caiu no chão e nenhum deles conseguiu ver o pet que a Ingenuidade tanto falava.
            <br/>Isso resultou num caos generalizado, tudo estava acontecendo, a Ingenuidade começou a chorar porque não tinha mais cãozinho:
            <br/>— BUAAAA VOCÊ QUEBROU O CACHORRINHO! — Raiva se estressa e grita 
            <br/>— FOI SEM QUEREEER!
            <br/>E assim, todos começaram a falar ao mesmo tempo, dando seus pontos de vista:
            <br/>— LEROLEROLEROLERO! — Exclama Empolgação
            <br/>— BLÁBLÁBLÁBLÁ — Pontuava a Reflexão
            <br/>— BUABUABUABUA — Insiste em argumentar Ingenuidade
            <br/>— AAAAAAAAAAAAAAAAAAHH — Raiva conclui.
            <br/>E fora de sua mente, Léo ficou em parafuso, ficou o tempo todo tentando resolver suas questões internas e no fim não conseguiu entregar a redação a tempo.

        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Rinha"> <button  className='btnletrus'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default LetrusB;
import { Link } from 'react-router-dom';
import './CafeAB.css'
import seta from './images/right-arrow.png'

function CafeA(){
    return(
        <div className='fundocaf'>
        <div className='container'>
        <div className='textcaf'>
            <div className='caixatitulo'><p className='titulo'>Café da tarde</p></div>   
            <div className='caixatexto'><p className='textob'>Da sala onde a equipe 5 estava, ecoava um som, "Evidências", sim, um clássico brasileiro cantada por ninguém menos que o Léo, JV, marombas da sala e no fim todo mundo acabou cantando...
                    <br/>— DIZ QUE É VERDADE, QUE TEM SAUDADE
                   <br/> — QUE AINDA VOCÊ PENSA MUITO EM MIM
                   <br/> — DIZ QUE É VERDADE, QUE TEM SAUDADE
                   <br/> — QUE AINDA VOCÊ QUER VIVER PRA MIM... — Assim cantava empolgação, curiosidade e até procrastinação foi puxada do canto para cantar
                    <br/>— UUUUUUUHHUU CONTINUA LÉO — Gritava empolgação
                    <br/>— Vamos dançar Léo! — Disse curiosidade feliz como uma criança
                    <br/>Além de "Evidências", rolou "Vagalume", "Anunciação"e é claro, não podia faltar "Baby" do Justin Bieber, eles dançaram, brincaram, rolou até o professor cantando um dos seus maiores sucessos: "Tá vendo aquela lua". 
                    <br/>Foi um dia feliz, onde a empolgação ganhou destaque na mente de todos...
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Trab"> <button  className='btncaf'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default CafeA;
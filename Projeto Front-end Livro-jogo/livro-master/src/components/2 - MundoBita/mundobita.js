import { Link } from 'react-router-dom';
import './mundobita.css'
import seta from './images/right-arrow.png'

function mundobita(){
    return(
        <div className='fundob'>
        <div className='container'>
        <div className='text'>
            <div className='caixatitulo'><p className='titulo'>Mundo Bita</p></div>   
            <div className='caixatexto'><p className='textob'>Em todo esse processo que o Léo passou no PROA, muitas coisas
                    marcaram ele, e isso com certeza virou assunto na sala de controle (mente).
                    Enquanto isso na mente do Léo...
                    <br/>— Bom dia, o sol já nasceu lá na fazendinha!
                   <br/> — Acorda o bezerro e a vaquinha!
                   <br/> — Mundo bita é bom demais — Disse empolgação toda animada após o Léo passar mundo bita no intervalo
                   <br/> — Passa de novo, passa de novo — Pedia ingenuidade
                    <br/>— Ingenuidade, já não é possível agora, o Gabriel já voltou — Disse reflexão
                    <br/>O Mundo Bita acaba por ser uma das facetas do Léo, incomum esperar jovens que por muito tempo quiseram ser adultos, um dia estar cantando mundo bita, amar o mundo Pixar. Sem contar que todo mundo vira criança nas mais animadas dinâmicas da Dri, talvez o ponto seja que não é só sobre o Léo, mas sim, sobre o espírito da equipe 5, onde você espera a muchachada ver desenhos no intervalo...
                    <br/>— Acho que essas lembranças não são só nossa curiosidade — disse empolgação com um sorriso no rosto
                   <br/> — Nunca mais eles vão ver o efeito da Pixar no Teams sem lembrar do Léo — riu curiosidade.
                   <br/> Ei! Eu sei que você sorriu, e também sei que na sua sala de controle entrou a loucura, ao lembrar das cantorias do Léo, do Léo Pixar nunca parando de sorrir numa aula onde a duração é de praticamente 4 horas, pensando de forma humana isso é praticamente impossivel, mas se tratando do PROA, o céu talvez, e eu disse talvez, seja o nosso único limite...
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Aurora"> <button  className='btn'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default mundobita;
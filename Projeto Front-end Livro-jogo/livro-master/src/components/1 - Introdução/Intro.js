import './Intro.css'
import {Link} from 'react-router-dom'
import seta from './images/right-arrow.png'

function Intro(){
    return(
    <div className='fundo'>
    <div className='container'>
    <div className='text1'>
        <div className='caixatitulo'><p className='titulo'>Introdução</p></div>   
        <div className='caixatexto'><p className='texto'>Um lugar agitado, barulhento, que pode perturbar às vezes, mas que, ao mesmo tempo acolhe, nostálgico, feliz… assim é a nossa mente, assim é a mente do Léo. Um garoto que tem um sonho ser programador, não muito diferente esse também era o sonho do PROA, melhor, talvez o sonho do PROA seja justamente realizar. O Léo encontrou o PROA e a mente dele foi de 0 a 100 muito rápido, tantos projetos, tantos amigos, tantos momentos… Mundo Bita, Galos e eu sei que você achou isso estranho assim de cara, mas vai entender…
    </p></div>
    </div>
    <div className='botoes'>
        <Link to="/mundobita"> <button  className='btn1'><img src={seta} alt='Erro'></img></button></Link>
    </div>
    </div>
    </div>
    );
}
export default Intro;
       
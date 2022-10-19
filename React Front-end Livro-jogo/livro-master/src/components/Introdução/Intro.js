import './Intro.css'
import {Link} from 'react-router-dom'
import seta from './images/right-arrow.png'

function Intro(){
    return(
    <div className='container'>
    <div className='text'><p className='titulo'>Introdução</p>
    <p className='texto'>Um lugar agitado, barulhento, que pode perturbar ás vezes mas que ao mesmo tempo acolhe, nostálgico,feliz… assim é a nossa mente, assim é a mente do léo. Um garoto que tem um sonho ser programador, não muito diferente esse também era o sonho do Proa, melhor,talvez o sonho do proa seja justamente realizar. O Léo encontrou o Proa e a mente dele foi de 0 a 100 muito rápido, tantos projetos, tantos amigos, tantos momentos… Galos, Mundo Bita e eu sei que você achou isso estranho assim de cara mas vai entender…
    </p>
    </div>
    <div className='botoes'>
        <Link to="/mundobita"> <button  className='btn2 btn'><img src={seta} alt='Erro'></img></button></Link>
  
    </div>
    </div>
    );
}
export default Intro;
       
import { Link } from 'react-router-dom';
import './Cafe.css'

function Cafe(){
    return(
        <div className='fundocaf'>
        <div className='container'>
        <div className='textcaf'>
        <div className='caixatitulo'><p className='titulo'>Café da tarde</p></div>   
        <div className='caixatextob'><p className='texto'>Essa foi uma passagem engraçada do Léo no Proa, o primeiro café da tarde da equipe 5, todo mundo estava sentado, comendo, como em qualquer café normal. Professora Adriana pegou o disco de vinil do Gabriel e colocou um modão para tocar. 
    </p></div>
    <div className='dilemacaf'><p>Léo começou a escutar a música e sentiu uma vontade repentina de cantar e dançar, mas por um momento hesitou…
    </p></div>
    </div>
        <div className='botoesa'>
            <div className='button1'><Link to="/CafeA"><button className='btn1caf'><p className='textbtn'>Léo levanta para dançar</p></button></Link></div>
            <div className='button2'><Link to="/CafeB"><button className='btn2caf'><p className='textbtn'>Léo desiste e continua sentado</p></button></Link></div>
        </div>
        </div>
        </div>
        );
}

export default Cafe;
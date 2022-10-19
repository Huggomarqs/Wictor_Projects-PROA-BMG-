import { Link } from 'react-router-dom';
import './mundobita.css'

function mundobita(){
    return(
        <div className='container'>
        <div className='text'><p className='titulo'>Introdução</p>
        <p className='texto'>dfrfs\sfsffrfsfsfsfrsf </p>
        </div>
        <div className='botoes'>
            <Link to="/"><button className='btn1'><p className='textbtn'></p></button></Link>
        </div>
        </div>
        );
}

export default mundobita;
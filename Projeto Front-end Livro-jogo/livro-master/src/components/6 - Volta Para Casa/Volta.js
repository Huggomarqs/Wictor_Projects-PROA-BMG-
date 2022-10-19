import { Link } from 'react-router-dom';
import './Volta.css'

function Volta(){
    return(
        <div className='fundovolta'>
        <div className='container'>
        <div className='textvolta'>
        <div className='caixatitulo'><p className='titulo'>Volta para casa</p></div>   
        <div className='caixatextob'><p className='textob'>A volta para casa sempre é uma aventura, ao sair do PROA, Léo vai direto com seus amigos para o trem, o caminho se resume aquela resenhinha e muita brincadeira.
        <br/>É um dos pequenos prazeres da vida que compensa vir num trem lotado.
        <br/>— São esses momentos de empolgação, que fazem a vida valer a pena sabia? — Disse Reflexão
        <br/>Reflexão amava viagens, e eu sei que uma viagem de ônibus não é tão atrativa quanto uma viagem a um lugar que você sonha muito em conhecer, mas em ambos você tem a oportunidade de refletir, olhar para si quando ninguém mais parece estar ali.
        <br/>— Eu, na verdade prefiro as piadas — Disse Empolgação
        <br/>— ...Cortou totalmente o clima empolgação — Respondeu Reflexão
        <br/>No fundo, só Reflexão entendia o valor da volta para casa
    </p></div>
    <div className='dilema'><p className='textodil'>Durante as viagens, Léo prefere
    </p></div>
    </div>
        <div className='botoesa'>
            <div className='button1'><Link to="/Agro"><button className='btn1volta'><p className='textbtn'>RESENHAR E FAZER PIADAS</p></button></Link></div>
            <div className='button2'><Link to="/Agro"><button className='btn2volta'><p className='textbtn'>REFLETIR</p></button></Link></div>
        </div>
        </div>
        </div>
        );
}

export default Volta;
import { Link } from 'react-router-dom';
import './Aurora.css'

function Aurora(){
    return(
        <div className='fundoaur'>
        <div className='container'>
        <div className='texta'>
        <div className='caixatitulo'><p className='titulo'>Aurora comunicação</p></div>   
        <div className='caixatextob'><p className='textob'>E em mais um capítulo dessa nossa história não poderia faltar o dia que o PROA apresentou a Aurora para o Léo
        já existia o burburinho que iríamos chorar e não mentiram para nós rsrsrs
        <br/> — Ain meu Deus! Eu não acredito que hoje a gente vai conhecer a Aurora! — disse empolgação fazendo jus ao seu nome
        <br/>— Todo mundo diz como ela é incrível, toda a bagagem dela — disse ingenuidade que pouco sabia sobre o mundo, mas a tanto o aguardava
        <br/> E então chegou a aula da Aurora, a percepção que muitos poderiam ter ao se pensar em uma aula de comunicação seria de como iríamos nos portar lá na frente, mas, no fundo, acabou se tornando algo muito mais sobre ouvir o outro, sentir suas dores e expressar empatia com um abraço, criar inclusão, em forma de convite, é um "Tamo junto irmão!" sabe?
        <br/> — Como esse narrador fala bem — disse ingenuidade após ouvir atenta tudo o que ele dizia
        <br/>— Ingenuidade não era para contar que a gente sabia da existência dele né? — Disse reflexão
        <br/> — Ué! Mas ele até pega dicas com você — disse ingenuidade
        <br/> — Ah! De alguma forma eu estou em todos os lugares, e se engana as pessoas que pensam que precisam parar para me ouvir, eu sou o movimento, a virada de chave, eu sou o porquê do amanhã existir e também o porquê do Léo estar no PROA, um dia ele me ouviu, se inscreveu, gravou seu vídeo e passou — disse reflexão.
        <br/>Ok agora você sabe que às vezes eu recebo uma ajudinha da sala de controle, mas esse não é o nosso foco da história, então voltando, esse dia foi especial, você viu a letra dos Racionais viva, sentiu a frase "Permita que eu fale, e não as minhas cicatrizes".
    </p></div>
    <div className='dilema'><p className='textodil'>Durante sua aula, Aurora descreve um momento de dificuldade na sua vida. De que forma isso tocou o Léo?
    </p></div>
    </div>
        <div className='botoesa'>
            <div className='button1'><Link to="/Cafe"><button className='btn1b'><p className='textbtn'>Raiva (Indignação)</p></button></Link></div>
            <div className='button2'><Link to="/Cafe"><button className='btn2b'><p className='textbtn'>Ingenuidade (Sensibilidade)</p></button></Link></div>
        </div>
        </div>
        </div>
        );
}

export default Aurora;
import { Link } from 'react-router-dom';
import './Letrus.css'

function Letrus(){
    return(
        <div className='fundoletrus'>
        <div className='container'>
        <div className='textletrus'>
        <div className='caixatitulo'><p className='titulo'>Redações, oh, redações! - Letrus</p></div>   
        <div className='caixatextob'><p className='textob'>É por trabalhar com tecnologia, que precisamos destravar nossa maestria na escrita. Contar com o apoio de profissionais, principalmente a parte de aconselhamento e acompanhamento, é um diferencial para nós conseguirmos evoluir. Logo, tudo está na nossa mão e é preciso ir à obra. Pode ser dificultoso, demandar muita concentração e cuidado, mas o resultado garante melhorias tão perceptíveis que até o sentimento mais cabeça dura pode perceber.
        <br/>— Escrever é um caco. Devíamos mesmo é copiar uns textos da internet, ninguém vai perceber e olhem só, sobra tempo para nós tirarmos uma soneca extra. Já estamos fazendo tantas atividades, pô!! — Procrastinação já tomava às rédeas. A central estava de olho e, com certeza, não levava aquilo como piada.
        <br/>— Qualé, você tá de sacanagem. Se copiarmos vão zerar nossa prova! Vamos fazer o garoto virar chacota, e cara, não estou com um pingo de paciência para me ver nessa situação!! VOCÊS CONCORDAM COMIGO? – Raiva, é claro, também não perdia tempo em se expressar.
        <br/>— Eu acho que é melhor a gente pensar que vai ser um pouco tedioso. É melhor que difícil, eu acho. Hm, na verdade... Ingenuidade, mostra aquele vídeo pro Raiva! — Entusiasmado, Reflexão solicitou Ingenuidade, que ficava mais retraído nessas reuniões. Bem, pelo menos naquela hora, isso não era regra.
        <br/>— Raiva... olhe esse cachorrinho. Ele só quer brincar. Ficar irritado e sentir dificuldade para fazer algo não é legal... eu quero ser que nem esse animalzinho. Tranquilo e aproveitando o vento! — Ingenuidade mostra o vídeo de um cachorrinho com a língua para fora, de frente pro ventilador. Era muito carismático e reconfortante!
    </p></div>
    <div className='dilema'><p className='textodil'>Raiva decide
    </p></div>
    </div>
        <div className='botoesa'>
            <div className='button1'><Link to="/LetrusA"><button className='btn1letrus'><p className='textbtn'>Ver o vídeo</p></button></Link></div>
            <div className='button2'><Link to="/LetrusB"><button className='btn2letrus'><p className='textbtn'>Dar um tapa no celular</p></button></Link></div>
        </div>
        </div>
        </div>
        );
}

export default Letrus;
import { Link } from 'react-router-dom';
import './Oracle.css'
import seta from './images/right-arrow.png'

function Oracle(){
    return(
        <div className='fundooracle'>
        <div className='container'>
        <div className='textoracle'>
            <div className='caixatitulo'><p className='titulo'>Oracle</p></div>   
            <div className='caixatexto'><p className='textooracle'>Engana-se o Proano que pensara que o ritmo das aulas presenciais do instituto, fariam intervalo para recuperar o fôlego. Após tantas dessas lembranças, de dias trabalhosos, dias repletos de emoção e alguns de mais lazer, a visita à Oracle até tentou escapar, mas sua hora chegou. E Léo não fazia ideia do que estava por vir. Será que haverá algum empregador nos avaliando na surdina? A Oracle é uma empresa gigante! Com empregados de todos os tipos, incluindo ex-alunos! Causar uma boa impressão pode ter um alto valor...
            <br/> — Temos que tomar cuidado para não tropeçar na hora de entrar lá... do jeito que eu tô, é capaz de eu fazer ele gaguejar na frente de um grande funcionário lá!! — Medo refletira. Era a noite anterior a visita, Léo estava dissipando seus pensamentos de tantas atividades com a tarde do dia seguinte, que se aproximava.
            <br/>— Medo, não precisa disso. Ou você tá querendo roubar meu trabalho? Refletir em tantas possibilidades assim, é meu trabalho, poxa. — Reflexão brincou, afim de tranquilizá-lo.
            Já está tarde e mesmo assim, essas emoções não param quietas. Elas estavam discutindo em plena madrugada formas de se comportar quando chegasse na empresa, embaraçando um pouco a concentração da central em - simplesmente dormir.
            <br/> — Pessoal! Pessoal! O medo DESMAIOU!! Venham me ajudar, caceta!! — Raiva gritava enquanto os outros se aproximavam em passos apressados. Medo não estava nem um pouco desmaiado, pelo contrário, estava mais ativo do que nunca. Quando chegaram pertos, os outros fizeram caretas engraçadas, como se não entendessem porque Raiva houvesse apelado daquele modo. – Bom! Agora que tenho a atenção de todos vocês, vamos falar sério! Eu também quero dormir!! Nada de ficarem fazendo ele pensar demais, eu já tô cheio de olheiras!! Não vai ficar legal essa situação em!!
            <br/> — É verdade. Eu quero dormir também. — Procrastinação disse, e no fundo, ouvia-se das outras emoções cochichando que ele estava só esperando uma desculpa para pedir isso. “É só isso que você faz mesmo", brincou, sussurrando para Ingenuidade, Empolgação.
            <br/>— Ok, ok, vamos pensar claramente aqui. Quero todos de nós calmos, porque não podemos adivinhar o amanhã. Podemos ficar até muito tarde da noite pensando junto com o Léo, mas não vai mudar nada! Talvez tenhamos mais ideias se tivermos uma ótima noite de descanso... e o Raiva também não vai mais dizer que alguém desmaiou, se nós formos agora. O susto já passou, pessoal. — Reflexão finalizava, dando um sorriso no final e trazendo uma coberta para todos.<br/>
            Depois de algumas horas, esses carinhas finalmente deram um tempo para si mesmos. Receosos do amanhã, eles não perceberam antes de Reflexão, que precisavam deixar as coisas simplesmente fluírem. Se preocupar demais é ter pressa, é estar nervoso. E a calma, sempre vai ser a melhor amiga das soluções. Léo teve uma noite de expectativas altas e no dia seguinte, colecionou memórias que o ajudaram a se guiar principalmente durante o decorrer do curso. Se também no pós, devemos descobrir!
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Letrus"> <button  className='btnoracle'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default Oracle;
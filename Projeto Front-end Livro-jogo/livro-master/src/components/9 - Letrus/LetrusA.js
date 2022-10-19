import { Link } from 'react-router-dom';
import './Letrus.css'
import seta from './images/right-arrow.png'

function LetrusA(){
    return(
        <div className='fundoletrus'>
        <div className='container'>
        <div className='textletrus one'>
            <div className='caixatitulo'><p className='titulo'>Redações, oh, redações! - Letrus</p></div>   
            <div className='caixatexto'><p className='textob'>— Olha só, nós não temos tempo para is--- Meu deus! Cachorrinho! Não fica com essa língua tão para fora! — Raiva se tranquilizava 
            <br/>— Venham ver isso, caras! A Ingenuidade tem o melhor vídeo da história aqui! É uma lembrança do Léo!
            <br/>Reflexão no canto da sala observava seus colegas todos em conjunto observando aquele pet. Era cômico, mas tão natural. Procrastinação até que tentara distrair Léo, mas também estava encantada com a lembrança que Ingenuidade reproduzia em seu celular. <br/>E com suas emoções tão calmas apreciando aquele vídeo tão adorável, Léo conseguiu se concentrar. O que ele não esperava era que a inteligência artificial fosse meio... idiota!? “Isso aqui não corrige direito, eu acho", ele pensou. Outras aulas iriam vir para ajudá-lo a melhorar sua comunicação manual.
        </p></div>
        </div>
        <div className='botoes'>
            <Link to="/Rinha"> <button  className='btnletrus'><img src={seta} alt='Erro'></img></button></Link>
        </div>
        </div>
        </div>
        );
}

export default LetrusA;
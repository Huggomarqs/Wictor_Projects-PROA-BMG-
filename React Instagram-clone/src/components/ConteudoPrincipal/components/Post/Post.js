import './Post.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {BsChat, BsBookmark, BsHeart} from 'react-icons/bs'
import {VscSmiley} from 'react-icons/vsc'
import { IconContext } from 'react-icons/lib'

 function Post(props) {
    return (
        <div className="caixapost" >
            <header className="header-post" >
                <div className="infos-post" >
                    <img className="img-header-post" alt='error' src={props.fotoperfil} />
                   <div className='perfil'> <span>{props.nomeperfil}</span></div>
                    </div>
                    <span>
                    <FiMoreHorizontal />
                    </span>
            </header>
            <div className="img-post" >
                <img alt='error' src={props.post}/>
            </div>
            <div className="footer-post" >
            <div className='linha1'>
                <IconContext.Provider value={{size: "30px"}} >
                    <section className="engagement-post" >
                        <div className='normal'>
                            <button className="icon"><BsHeart /></button>
                            <button className="icon"><BsChat /></button>
                            <button className="icon"><FiSend /></button>
                            </div>
                            <div className='reverse'>
                            <button className="iconreve"><BsBookmark /></button>
                            </div>
                    </section>
                </IconContext.Provider>
                <section className="like" >
                    <span>Curtido por <span>neymarjr</span> e <span>outras pessoas</span></span>
                </section>
                <section className="legend" >
                    <div className='msg'>
                    <p>
                    <span className='nomeperfil'>{props.nomeperfil}</span> <span>{props.mensagem}</span>
                    </p></div>
                    <div className='vercomenta'>
                    <span>Ver todos os 2,126 comentários</span>
                    </div>
                </section>
                <section className="time-post" >
                    <span className='time'>HÁ {props.hora} HORAS</span> <span className='tradu'>Ver tradução</span>
                </section>  
                </div>
                <section className='linha2'>
                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="smile">
                                <VscSmiley />
                            </div>
                        </IconContext.Provider>
                        <div className='input'>
                        <input placeholder="Adicione um comentário..." />
                        </div>
                        <div className='publicar'>
                        <button>Publicar</button>
                        </div>
                </section>
            </div>
        </div>
    );
}

export default Post;
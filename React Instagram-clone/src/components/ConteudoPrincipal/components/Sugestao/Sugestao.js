import './Sugestao.css'
import Sugestioncomponent from './components/Suggestioncompo'
     function Suggestion() {
    return (
        <div className="container-suggestion">
            <div className="header-suggestion" >
                <img alt='error' src={`https://avatars.githubusercontent.com/u/92128904?s=400&u=73cb15ccf034c3ea929c64dbda064a9a64f9c68b&v=4`} />
                <div className="user-infos-suggestion" >
                    <div className="infos" >
                        <span>juiz.vetor</span>
                        <p>Wictor Huggo</p>
                    </div>
                    <button className="switch" >Mudar</button>
                </div>
            </div>
            <div className="header-main-suggestion" >
                <p>Sugestões para você</p>
                <span>Ver tudo</span>
            </div>
            <div className="user-suggestion" >
                    <Sugestioncomponent login='djavanoficial' logimage='https://f.i.uol.com.br/fotografia/2022/08/10/166015980362f4073bdeef7_1660159803_3x2_md.jpg' />
                    <Sugestioncomponent login='djavanoficial' logimage='https://f.i.uol.com.br/fotografia/2022/08/10/166015980362f4073bdeef7_1660159803_3x2_md.jpg' />
                    <Sugestioncomponent login='djavanoficial' logimage='https://f.i.uol.com.br/fotografia/2022/08/10/166015980362f4073bdeef7_1660159803_3x2_md.jpg' />
                    <Sugestioncomponent login='djavanoficial' logimage='https://f.i.uol.com.br/fotografia/2022/08/10/166015980362f4073bdeef7_1660159803_3x2_md.jpg' />
                    <Sugestioncomponent login='djavanoficial' logimage='https://f.i.uol.com.br/fotografia/2022/08/10/166015980362f4073bdeef7_1660159803_3x2_md.jpg' />
            </div>
            <footer className="footer-suggestion" >
                <p className='sobre'><span>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull;</span><span> Termos &bull; Localizações &bull; Idioma</span></p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    );}

    export default Suggestion;
import './ConteudoPrincipal.css'
import Story from './components/Story/Story'
import Post from './components/Post/Post';
import Sugestao from './components/Sugestao/Sugestao'


function ConteudoPrincipal(){
    return(
    <div className="flex">
    <div className="col-1">
    <div className="caixa" >
       <Story />
    </div>
        <Post fotoperfil='https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2022/04/21/cristiano-ronaldo.jpeg&anchor=top' 
        nomeperfil='cristiano' 
        post='https://i2-prod.manchestereveningnews.co.uk/incoming/article25281989.ece/ALTERNATES/s1200c/0_GettyImages-1433825051.jpg' 
        mensagem='Always good to be with you boss! 🙏🏽' 
        hora='7'/>
        <Post fotoperfil='https://conteudo.imguol.com.br/c/esporte/86/2020/08/12/neymar-de-moicano-quando-ainda-vestia-a-camisa-do-santos-1597228374622_v2_450x450.jpg'
        nomeperfil='neymarjr' 
        post='https://paranaportal.uol.com.br/wp-content/uploads/2021/10/Neymar-selecao-brasileira-Copa-do-Mundo-Catar-2022.jpg' 
        mensagem='🇧🇷❤️⚽️' 
        hora='10'/>
        <Post fotoperfil='https://img.a.transfermarkt.technology/portrait/big/50144-1458293316.jpg?lm=1'
        nomeperfil='rcassio12' 
        post='https://gmconline.com.br/wp-content/uploads/2022/07/rcassio12_295011560_541319531113963_1395467540908412249_n.jpg' 
        mensagem='Glória a Deus 🙌🏻🙌🏻🙌🏻' 
        hora='12'/>
        <Post fotoperfil='https://i0.wp.com/mixpoint.in/wp-content/uploads/2022/02/20220303_221938.jpg?fit=256%2C256&ssl=1'
        nomeperfil='elonmuskoffiicial' 
        post='https://capitalist.com.br/wp-content/uploads/2021/07/elon-musk-1.jpg' 
        mensagem='And … sold out!' 
        hora='6'/>
        <Post fotoperfil='https://pbs.twimg.com/profile_images/1543792054903382016/3s1dQRCH_400x400.jpg'
        nomeperfil='corinthians' 
        post='https://pbs.twimg.com/media/FfeHEu7WAAAYTTn?format=jpg&name=medium' 
        mensagem='ESCALADOS!📋' 
        hora='2'/>
        <Post fotoperfil='https://i.pinimg.com/736x/ae/20/e5/ae20e5f036dd9fe6e649ca1d216bef32--rock-johnson-dwayne-johnson.jpg'
        nomeperfil='therock' 
        post='https://www.muscleandfitness.com/wp-content/uploads/2018/08/therock-5-1109.jpg?quality=86&strip=all' 
        mensagem='Disrupters.' 
        hora='7'/>

    </div>
    <div className='col-2'>
    <div className="caixa2" >
        <Sugestao/>
    </div>
    </div>
    </div>
);}

export default ConteudoPrincipal;
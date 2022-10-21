import './Story.css'
import Stories from './components/Stories';

  function Story() {
    return (
        <div className="container" >
            <Stories image='https://conteudo.imguol.com.br/c/esporte/86/2020/08/12/neymar-de-moicano-quando-ainda-vestia-a-camisa-do-santos-1597228374622_v2_450x450.jpg' 
            name='neymarjr'/>
            <Stories image='https://img.a.transfermarkt.technology/portrait/big/50144-1458293316.jpg?lm=1' 
            name='rcassio12'/>      
            <Stories image='https://i0.wp.com/mixpoint.in/wp-content/uploads/2022/02/20220303_221938.jpg?fit=256%2C256&ssl=1' 
            name='elonmusko...'/>
            <Stories image='https://dt-media.dhakatribune.com/?width=256&height=256&cropratio=4:5&quality=80&image=en/uploads/2022/04/21/cristiano-ronaldo.jpeg&anchor=top' 
            name='cristiano'/>
            <Stories image='https://pbs.twimg.com/profile_images/1543792054903382016/3s1dQRCH_400x400.jpg' 
            name='corinthians'/>
            <Stories image='https://i.pinimg.com/736x/ae/20/e5/ae20e5f036dd9fe6e649ca1d216bef32--rock-johnson-dwayne-johnson.jpg' 
            name='therock'/>
        </div>
    );}

    export default Story;
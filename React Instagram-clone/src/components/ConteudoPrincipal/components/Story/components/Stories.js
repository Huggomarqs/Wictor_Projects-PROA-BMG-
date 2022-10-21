import './Stories.css'

    function Stories(props){
        return(
        <div className="user-elements" >
                <div className='image'>
                    <img className="image-user-story" alt='error'src={props.image} />
                </div>
                <div className='name'>
                <span>{props.name}</span>
                </div>
            </div>
    );}
    export default Stories;
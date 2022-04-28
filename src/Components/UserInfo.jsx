import Card from "../UI/Card"
import Avatar from "./Avatar"
import './UserInfo.css'

function UserInfo (props) {
    return (
        <Card className='UserInfo'>
        
        <Avatar author={props.author}/>
        <div className='UserInfo-name'>
          {props.author.name}
        </div>
      
        </Card>
 
    )  
}

export default UserInfo
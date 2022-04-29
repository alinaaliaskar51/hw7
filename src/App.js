import Comment from './Components/Comment';
import './App.css';



const comment = [
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://i.pinimg.com/564x/3d/4e/40/3d4e4086257e5c27554c6056931d3fe2.jpg',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://i.pinimg.com/564x/8d/28/cc/8d28ccb3d93f020f1131a3b8ad47fd12.jpg',
    },
  },
  {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Bunny',
      avatarUrl: 'https://i.pinimg.com/564x/cc/4b/b7/cc4bb7c67b7e85fa63c89df4f3a66548.jpg',
    },
  },
];



function App() {
  return (
    <div className="App">

      {comment.map((el) => {
    
        return <Comment key={Math.random().toString()} author={el.author} text={el.text} date={el.date} />
     
     })}
      
     
    </div>
  );
}

export default App;

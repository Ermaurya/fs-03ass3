// import Index from './component/Index'
import './App.css';
import Card from './component/Card';

function App() {
const colors=[
  {
    color:"red",name:"red"
  },
  {
    color:"green",name:"green"
  },
  {
    color:"gray",name:"red"
  },
  {
    color:"blue",name:"red"
  },
  {
    color:"pink",name:"red"
  },
  {
    color:"yellow",name:"red"
  },
  {
    color:"#FF6663",name:"Pink"
  },
  {  
    color:"#333333",name:"Gray"
  },
  {  
    color:"#000000",name:"Black"
  },
  {  
    color:"#38BB14",name:"Green"
  },
  {
    color:"#C90B0B",name:"Red"
  },
  {
    color:"#FF8000",name:"Orange"
  },
  {
    color:"#FFF500",name:"Yellow"
  },
  {
    color:"#CCCCCC",name:"Light Gray"
  },
  {
    color:"#7E41A2",name:"Purple"
  },
  {
    color:"#C14911",name:"Brown"
  },
]
  return (
   <>
   {/* <ColorData/> */}
   <div className='display'>

   {
     colors.map((e)=>{
       return( <Card color={e.color} name={e.name} />
       )})
      }
      </div>
   </>
  );
}

export default App;

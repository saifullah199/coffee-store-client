
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  
const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-5xl font-bold'>Hot Coffe House:{coffees.length}</h1>

      <div className='grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard
             key={coffee._id}
            coffee={coffee}
          
          ></CoffeeCard>)
        }
      </div>
      
    </>
  )
}

export default App

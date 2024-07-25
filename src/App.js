import { useState } from 'react';
import './App.css';

const Data = [
  {
    id: 1,
    count: 0,
    color: 'bg-whit'
  },
  {
    id: 2,
    count: 0,
    color: 'bg-whit'
  },
  {
    id: 3,
    count: 0,
    color: 'bg-whit'
  },
  {
    id: 4,
    count: 0,
    color: 'bg-whit'
  },
  {
    id: 5,
    count: 0,
    color: 'bg-whit'
  }
];

const Color = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500'];

function App() {
  const [count, setCount] = useState(Data);

  const handleAddCount = (ind) => {
    const bgColor = Color[Math.floor(Math.random() * count.length)];
    const newCount = count.map((item, i) => {
      if(ind === i && item.count < 10){
        return {...item, count: item.count += 1, color: bgColor }
      }else{
        return item
      }
    });
    setCount(newCount);
  };

  const handleRemoveCount = (ind) => {
    const bgColor = Color[Math.floor(Math.random() * count.length)];
    const newCount = count.map((item, i) => {
      if(ind === i && item.count > 0){
        return {...item, count: item.count -= 1, color: bgColor }
      }else{
        return item
      }
    });
    setCount(newCount);
  };

  return (
    <div className="App">
      <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-3'>
        {count?.map((val, ind) => (
          <div key={ind} className={`space-y-4 rounded-md shadow p-2 ${val.color}`}>
            <div className='flex justify-center items-center'>
              <p className='flex items-center justify-center w-10 h-10 rounded-full bg-black text-xl text-white'>{val.count}</p>
            </div>
            <div className='flex space-x-3 flex justify-center'>
              <button className='bg-blue-200 py-1 px-2 rounded-md' onClick={() => handleAddCount(ind)}>add</button>
              <button className='bg-blue-200 py-1 px-2 rounded-md' onClick={() => handleRemoveCount(ind)}>remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

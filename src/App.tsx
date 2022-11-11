import React from 'react';
import useWaifuService  from './hook/useWaifuService'


const WaifuImage = ({url}:{url:string}): JSX.Element => {
  return (
    <img src={url} alt="waifu" width='500px' height='auto'/>
  )
}

function App() {
  const waifuHook = useWaifuService();

  return (
    <div className="App">
      <button
        onClick={
         ()=> {
            waifuHook.getRandomWaifu()
          }
        }
      >
        Get Random Waifu
        </button>

        {
         <WaifuImage
          url={waifuHook.randomWaifu}
         />
        }

        <hr/>

        <button 
          onClick={
            ()=> {
              waifuHook.getWaifus({type:'sfw', category: 'waifu', unique:true})
              console.log(waifuHook.waifusList)
            }
          }
        >
          Get list of waifus
        </button>

        {
          waifuHook.waifusList.map((waifu, index) => {
            return <WaifuImage url={waifu} key={index}/>
          })
        }

        <hr />

        <button 
          onClick={
            ()=> {
              waifuHook.getWaifus({type:'sfw', category: 'neko', unique:false})
              // console.log(waifuHook.waifuUnique)
            }
          }
        >
          Get unique of waifu
        </button>

        {
         <WaifuImage
          url={waifuHook.waifuUnique}
         />
        }
    </div>
  );
}

export default App;

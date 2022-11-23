// import useWaifuService from './hook/useWaifuService'

function App() {
  // const waifuHook = useWaifuService();

  return (
    <div className="App">
      {/* <button
        onClick={
          () => {
            waifuHook.getRandomWaifu()
            console.log(waifuHook.randomWaifu)
          }
        }
      >
        Get Random Waifu
      </button>

      {
        <img src={waifuHook.randomWaifu} alt="" style={{
          width: '500px',
        }} />
      }

      <hr />

      <button
        onClick={
          () => {
            waifuHook.getWaifus({ type: 'nsfw', category: 'neko', unique: false })
            console.log(waifuHook.waifusList)
          }
        }
      >
        Get list of waifus
      </button>

      {
        waifuHook.waifusList.map((waifu, index) => {
          return <img src={waifu} alt="index" key={index} style={{
            width: '500px',
          }} />
        })
      }

      <hr />

      <button
        onClick={
          () => {
            waifuHook.getWaifus({ type: 'nsfw', category: 'waifu', unique: true })
            console.log(waifuHook.waifuUnique)
          }
        }
      >
        Get unique of waifu
      </button>

      {
        <img src={waifuHook.waifuUnique} alt="index" style={{
          width: '500px',
        }} />
      } */}
    </div>
  );
}

export default App;

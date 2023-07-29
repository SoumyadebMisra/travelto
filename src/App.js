import './App.css';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import List from './components/List'
import mapboxgl from 'mapbox-gl';

const ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

function App() {

  const [map, setMap] = useState(null)
  const mapContainerRef = useRef(null)

  useEffect(()=>{
    mapboxgl.accessToken = ACCESS_TOKEN

    const new_map = new mapboxgl.Map({
      container : mapContainerRef.current,
      style : 'mapbox://styles/mapbox/streets-v11',
      center : [-73,40.790],
      zoom: 11
    })

    setMap(new_map)

    return ()=> new_map.remove()
  },[])
  
  return (
    <div className="App">
      <Header map={map} />
      <div className='flex flex-col justify-between lg:flex-row h-screen w-screen m-0'>
        <div className='w-1/2 h-1/2 lg:h-full lg:w-full'>
          <List/>
        </div>
        <div className='w-full h-1/2 lg:h-full'>
          <Map map={map} mapContainerRef= {mapContainerRef} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useCallback } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AddressAutofill, SearchBox } from '@mapbox/search-js-react';

const Header = ({ map }) => {
  const [address, setAddress] = useState(null)
  
  return (
    <header className='flex justify-between h-16 items-center shadow-md border-b border-black'>
      <div>Travelto</div>
      <div className='flex items-center'>
        {/* <AddressAutofill accessToken={`${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`} onRetrieve={handleRetrieve}>
          <div className='border border-black rounded-md mx-2 p-1' >

                  <div className='flex items-center'>
                      <div className='mr-1'>
                          <AiOutlineSearch />
                      </div>
                      
                      <input
                        className='focus:outline-none'
                        placeholder="Start typing your address, e.g. 123 Main..."
                        autoComplete="address-line1"
                        id="mapbox-autofill"
                      />
                  </div>
          </div>
        </AddressAutofill> */}
        <form>
          <SearchBox 
            accessToken={`${process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}`} 
            value= {address}
            onChange={(res)=> setAddress(res)}
            onSuggestError={(err)=>console.log(err)}
            onRetrieve={(res)=>{
              console.log(res)
            }}
            map={map}
          />
        </form>
        <div className='mr-8 ml-4'>Explore New Places</div>
      </div>
    </header>
  )
}

export default Header

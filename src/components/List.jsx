import React from 'react'
import { Select, initTE } from "tw-elements";
initTE({ Select });

const List = () => {
  return (
    <div className='w-full h-full ml-2'>
      <div>
        Restaurants, Hotels and Attractions near you
      </div>
      <form className='mt-4'>
        <Select data-te-select-init>
          <option value="restaurant">Restaurants</option>
          <option value="hotel">Hotels</option>
          <option value="attraction">Attractions</option>
        </Select>

      </form>
    </div>
  )
}

export default List

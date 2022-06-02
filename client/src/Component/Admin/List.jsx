import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
import axios from 'axios'
import React from 'react'
import { ListContainer, MainListContainer } from '../Styles/Admin.styled'

function List({list}) {

    const deleteListing = async ()=>{
        window.location.reload()
        await axios.delete(`http://localhost:5555/listing/${list._id}`)
        .then(resp => {
            console.log(resp.data)
        })
        .catch(err => console.log(err))
    }

    // console.log(list)
  return (
      <MainListContainer>
          <div className="actions">
              <PencilIcon width={28}/>
              <TrashIcon width={28} onClick={deleteListing}/>
          </div>
        <ListContainer>
            <div className="left">
                <h3>{list?.title}</h3>
                <img src={list.displayImage} alt="" />
            </div>

            <div className="right">
                <h4>Description</h4>
                <p>
                    {list.desc}
                </p>

                <h4>Category : {list.category?.title}</h4>
            </div>
        </ListContainer>
      </MainListContainer>
    
  )
}

export default List
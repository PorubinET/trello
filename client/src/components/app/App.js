import React from "react";
import TrelloList from "../trelloList/trelloList";
import Sidebar from "../sidebar/sidebar"
import { useSelector } from 'react-redux'
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import './App.css';


function App(){
  const lists = useSelector(state => {
    const { listsReducer } = state;
    return listsReducer.lists
  })

  return (    
    <div className="listConteiner">
      <Sidebar/>
      {lists.map(list =>
        <TrelloList key={list.id} title={list.title} cards={list.cards}/>
      )}
      <TrelloActionButton list/>
    </div>
  )
}


export default App;

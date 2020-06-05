import React, { Component } from 'react'
import data from './data'

import "./App.css"
import PrimaryNavigation from './Components/PrimaryNavigation'
import SecondaryNavigation from './Components/SecondaryNavigation'
import SearchResults from './Components/SearchResults'
import SearchHighlights from './Components/SearchHighlights'

export default class App extends Component {
    state = data
    render(){
        return (
             <div class="App">
               <header>
                  <PrimaryNavigation /> 
                  <SecondaryNavigation /> 
               </header>
               <main>
                  <SearchResults /> 
                  <SearchHighlights /> 
               </main>
            </div>           
        )
    }
}

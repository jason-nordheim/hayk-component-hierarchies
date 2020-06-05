import React, { Component } from 'react'

export default class SearchResult extends Component {
   
    render() {
        return (
            <div class="search-result">
            <h3><a href="https://flatironschool.com">Flatiron School: Learn Coding, Data Science, &amp; UX/UI Design</a></h3>
            <p class="url">https://flatironschool.com</p>
            <p class="description">The school of the future where students don't pay until they're earning income.</p>
            <p class="last-visit">You've visited this page many times. Last visit: 12/16/19</p>
            <div class="deep-links">
               <ul>
                  <li>
                     <div class="deep-link">
                        <h3><a href="https://flatironschool.com/campuses/online">Flatiron School online</a></h3>
                        <p>For job-seeking online graduates included in the 2019 Jobs Report including full-time salaried...</p>
                     </div>
                  </li>
                  <li>
                     <div class="deep-link">
                        <h3><a href="https://flatironschool.com/free-courses/learn-javascript">Javacript</a></h3>
                        <p>This full 50+ hour online Javascript course is 100% free. No credit card required; no trial...</p>
                     </div>
                  </li>
               </ul>
               <p class="more-links"><a href="https://www.google.com?q=+site:https://flatironschool.com+Flatiron+School">More results from https://flatironschool.com »</a></p>
            </div>
         </div>
        )
    }
}

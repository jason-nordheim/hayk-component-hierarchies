import React, { Component } from 'react'

export default class SearchResults extends Component {
    render() {
        return (
            <section class="search-results">
            <p class="totals">About 15500000 search results (0.76 seconds)</p>
            <ul>
               <li>
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
               </li>
               <li>
                  <div class="question-answers">
                     <h3>People also ask</h3>
                     <div class="question-answer">
                        <header>
                           <h3>How much does Flatiron School cost?</h3>
                           <i class="fa fa-angle-up"></i>
                        </header>
                     </div>
                     <div class="question-answer">
                        <header>
                           <h3>Are coding bootcamps worth it?</h3>
                           <i class="fa fa-angle-up"></i>
                        </header>
                     </div>
                     <div class="question-answer">
                        <header>
                           <h3>How long is app Academy?</h3>
                           <i class="fa fa-angle-up"></i>
                        </header>
                     </div>
                  </div>
               </li>
               <li>
                  <div class="search-result">
                     <h3><a href="https://twitter.com/FlatironSchool">Flatiron School (@FlatironSchool) · Twitter</a></h3>
                     <p class="url">https://twitter.com/FlatironSchool<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeBAMAAAC2z6FgAAAAGFBMVEVkvvhYr/JVrfBVre9Vre9VrO9Vre9WrvBx/gorAAAACHRSTlMBH2uOvv/mScIv72gAAADCSURBVHgBXdC1EgIxFIXhszKzJV7jNQ4lTo2d0KMlzvMzN6vZr/zjQUK+V4WWRaBIcopCG9YtKN6FpOozC48PaCVqWwsOt9Au1HpzOORUisXABDapZKkTlL0/qipxmgBYkuQoGyZZ8aV2jZPl0JAF7PPFSHJpGlR0xchOUtNIW0mukTYQAyZMIKxke0CsGNtD+zJ2gOaYW6X2V9kgWcN4XWRpnCd+Qbkh4A1TO32ia8l3m3dXHUQaFKcHErx6r/tE5A/jFW72lWOzsAAAAABJRU5ErkJggg==" alt="Twitter" /></p>
                     <p class="description">The school of the future where students don't pay until they're earning income.</p>
                     <ul class="app-cards">
                        <li>
                           <div class="app-card">
                              <a href="https://twitter.com/FlatironSchool/status/1206589830257348613">
                                 <p>Go, ahead step our side of your comfort zone. 📸 An #flatironschool #changethings #mondaymotivation</p>
                                 <p class="details"><span class="app">Twitter</span><time>8 hours ago</time></p>
                              </a>
                           </div>
                        </li>
                        <li>
                           <div class="app-card">
                              <a href="https://twitter.com/FlatironSchool/status/1206257682207969280">
                                 <p>What are our #flatirongrads earning? $74,566 = the average starting salary for our job-seeking students who took full-time...</p>
                                 <p class="details"><span class="app">Twitter</span><time>1 day ago</time></p>
                              </a>
                           </div>
                        </li>
                        <li>
                           <div class="app-card">
                              <a href="https://twitter.com/FlatironSchool/status/1205895312260390914">
                                 <p>Some of the companies who have hired #FlatironSchool graduates: @Google, @IBM, @Facebook, @lyft, + more: https://okt.to/oC6LsU</p>
                                 <p class="details"><span class="app">Twitter</span><time>2 days ago</time></p>
                              </a>
                           </div>
                        </li>
                        <li>
                           <div class="app-card">
                              <a href="https://twitter.com/FlatironSchool/status/1205533059925315589">
                                 <p>We’ve set the standard for the industry, releasing job placement data since 2014! See how our passionate students change...</p>
                                 <p class="details"><span class="app">Twitter</span><time>3 days ago</time></p>
                              </a>
                           </div>
                        </li>
                     </ul>
                  </div>
               </li>
            </ul>
         </section>
        )
    }
}

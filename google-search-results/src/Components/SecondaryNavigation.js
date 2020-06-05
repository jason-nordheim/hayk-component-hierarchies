import React, { Component } from 'react'

export default class SecondaryNavigation extends Component {
    render() {
        return (
            <nav class="secondary-navigation">
                <ul class="search-types">
                    <li>
                        <a class="search-type active" href="#"><i class="fa fa-search"></i><span>All</span></a>
                    </li>
                    <li>
                        <a class="search-type " href="#"><i class="fa fa-newspaper"></i><span>News</span></a>
                    </li>
                    <li>
                        <a class="search-type " href="#"><i class="fa fa-map-marked"></i><span>Maps</span></a>
                    </li>
                    <li>
                        <a class="search-type " href="#"><i class="fa fa-video"></i><span>Videos</span></a>
                    </li>
                    <li>
                        <a class="search-type " href="#"><i class="fa fa-images"></i><span>Images</span></a>
                    </li>
                    <li>
                        <a class="search-type " href="#"><i class="fa fa-ellipsis-v"></i><span>More</span></a>
                    </li>
                </ul>
                <ul class="configuration">
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Tools</a></li>
                </ul>
            </nav>
        )
    }
}

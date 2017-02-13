import React from "react";
import {Header} from "../components/Header";
import {SearchBar} from "../components/Searchbar";
import {SearchButtons} from "../components/SearchButtons";

export class Root extends React.Component {

    render () {
        return (
        <div>
           <Header version="1.1.1" lastDBUpdate={Date()} numOfVehicles={27}/>
           <div className="wrraper">
           <div className="H20"/>
           <SearchButtons/>
           <SearchBar/>
           </div>
        </div>
        );
    }
}

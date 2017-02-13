import React from "react";
import axios from "axios";

export class SearchBar extends React.Component {
    searchURL = "http://localhost/reactmvc/home/SubmitTest";
    constructor () {
        super();
        console.log("Constructor");
    }
    handleAjaxFormSubmit (event){
        event.preventDefault();
        let formData = new FormData(event.target);
      //formData.forEach((key, value) => console.log(value, key));
        axios.post(this.searchURL, formData).then(()=>console.log("dddddd"));
        console.log("ddd");
    }
    render () {
        return (
            <div className="row">
                <div className="col-md-9 col-md-offset-3 H50 ">
                    <form id="formOne" className="form-inline" action="" onSubmit={this.handleAjaxFormSubmit.bind(this)} >
                        <div className="form-group">
                            <input type="text" className="form-control" name="brand" id="brand" placeholder="Brand"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="model" id="model" placeholder="Model"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="engineType" id="engineType" placeholder="Engine Type"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" name="manufactureYear" id="manufactureYear" placeholder="Manufacture Year"/>
                        </div>
                    <button type="submit" className="btn btn-danger">SEARCH</button>
                    </form>
                </div>
        </div>
        );
    }
}

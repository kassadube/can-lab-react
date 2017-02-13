import React from "react";

export class SearchButtons extends React.Component {
    constructor () {
        super();
        console.log("Constructor");
    }    
    render () {
        return (
            <div className="row H120">
                <div className="col-md-1 col-xs-offset-4 H50 ">
                   <button className="btn btn-default tprt">
                        <img src="img/filled_commercial_icon.png" /> <br/>TRUCKS
                    </button>
                </div>
                <div className="col-md-1  H50 ">
                   <button className="btn btn-default tprt">
                        <img src="img/filled_commercial_icon.png" /> <br/>TRUCKS
                    </button>
                </div>
                <div className="col-md-1  H50 ">
                   <button className="btn btn-default tprt">
                        <img src="img/filled_commercial_icon.png" /> <br/>TRUCKS
                    </button>
                </div>
                <div className="col-md-1  H50 ">
                   <button className="btn btn-default tprt">
                        <img src="img/filled_commercial_icon.png" /> <br/>TRUCKS
                    </button>
                </div>
            </div>
        );
    }
}

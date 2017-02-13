import React from "react";
import moment from "moment";
import axios from "axios";

export class Header extends React.Component {
    getDataURL = "http://207.232.46.92/reactmvc/home/TestData";
        
    constructor (props) {
        super();
        this.state = {
            version: props.version,
            numOfVehicles: props.numOfVehicles,
            lastDBUpdate: moment(props.lastDBUpdate).format("DD/MM/YYYY")
        };
        console.log("Constructor");
    }
    componentDidMount (){
        console.log("componentDidMount");
        this.initData();
    }

    shouldComponentUpdate (nextProps, nextState){
        nextState.lastDBUpdate = moment(nextState.lastDBUpdate).format("DD/MM/YYYY");
        console.log("should Component Update", nextProps, nextState);
        return true;
    }
    initData () {
          var self = this;
          axios.get(this.getDataURL)
            .then(function (response) {
              console.log( response.data);
             // self.setState({version: response.data.version});
              self.setState({...response.data});
            })
            .catch(function (error) {
              console.log(error);
            });
    }

    render () {
        return (
            <div>
                <div className="row bg-1 ">
                    <div className="col-md-6 col-md-offset-3 H70 ">
                        <h1 className="text-center PT10">Supported Vehicle Data base</h1>
                    </div>
                </div>
                <div className="row bg-1 row-no-padding">
                    <div className="col-xs-4 ">
                        <div className="row">
                            <div className="col-xs-5 brd text-center"> <span className="PT3"> Version:</span> <span>{ this.state.version }</span></div>
                            <div className="col-xs-7 brd text-center"> <span className="text-center PT3"> DB last updated:</span> <span>{ this.state.lastDBUpdate }</span></div>
                        </div>
                    </div>
                    <div className="col-xs-4 brd text-center">
                        <span className="text-center PT3">total numbers of vehicles in DB:</span> <span>{ this.state.numOfVehicles }</span>
                    </div>
                    <div className="col-xs-3 brd text-center">
                        <p className="text-center PT3"> Sampling Request Form:</p>
                    </div>
                    <div className="col-xs-1 brd">
                        <p className="text-center PT3"> Info:</p>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import CamperRow from './CamperRow';

class Leaderboard extends Component {

    constructor(props){
        super(props);

        this.state = {
            allUsers : [],
            allTime : false,
            past30: false
        }
    }

    componentDidMount(){
        axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
            .then(res => {
                this.setState({
                    allUsers : res.data
                });
            });
    }

    renderUsers(){
        if(this.state.allUsers.length > 0){

            return this.state.allUsers.sort((a, b) => {
                return b.recent - a.recent;
            })
                .map((user, index) => {
                return (
                     <tr key={user.username}>
                    <th scope="row">{index + 1}</th>
                    <td><img src={user.img} className='user-image' alt=""/> <a>{user.username}</a></td>
                    <td>{user.recent}</td>
                    <td>{user.alltime}</td>
                </tr>
                );
            });
        }
    }

    alltime(){
                return this.state.allUsers.sort((a, b) => {
                    return b.alltime - a.alltime;
                }).map((user, index) => {
                return (
                     <tr key={index}>
                    <th scope="row">{index}</th>
                    <td><img src={user.img} className='user-image' alt=""/> <a>{user.username}</a></td>
                    <td>{user.recent}</td>
                    <td>@{user.alltime}</td>
                </tr>
                );
            });
    }

    toggleAlltime = (e) => {
        e.preventDefault();
        if(!this.state.allTime){
            this.setState({
            allTime: true
        });
        }
      }

    togglePast30 = (e) => {
        e.preventDefault();
        if(!this.state.past30){
            this.setState({
                allTime: false
            });
        }
    }

    render() {
        return (
            <div className='container-fluid'>


                <div className="well">

                    <table className="table table-inverse">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Camper Name</th>
                                <th> <a onClick={this.togglePast30}>Points in past 30 days</a></th>
                                <th> <a onClick={this.toggleAlltime}>All Time Points</a></th>
                            </tr>
                        </thead>
                        <tbody>
                           
                           {!this.state.allTime ? this.renderUsers() : this.alltime()}
                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default Leaderboard;
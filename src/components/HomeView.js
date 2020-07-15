import React from 'react';
import MatchContainer from './MatchContainer';
import CreatePlantForm from './CreatePlantForm';

const API_BASE = 'http://localhost:3001/plants'

class HomeView extends React.Component {
    state = {
        plants: [],
        showCreateForm: false,
        search: ''
    }

    handleChange = e => this.setState({ search: e.target.value })

    /** DO NOT WORRY ABOUT THIS COMPONENTDIDMOUNT METHOD
     * It's part of content we'll learn on FRIDAY of WEEK ONE
    */
    componentDidMount(){
        fetch(API_BASE)
            .then(res => res.json())
            .then(plants => this.setState({ plants }))
    }

    toggleCreateForm = () => this.setState({ showCreateForm: !this.state.showCreateForm })


    /**
     * TODO: ONLY FOR ADVANCED DELIVERABLES
     * Once you post a new plant, you'll need to update the plants on state here.
     * Define a method that can add a new plant into the plants array.
     */

    render(){
        const { plants, showCreateForm, search } = this.state
        let filteredPlants = this.state.plants.filter(plant => plant["Common_Name"].toLowerCase().includes(this.state.search.toLowerCase()))
           return (
            <div>
                <button onClick={this.toggleCreateForm}>{showCreateForm ? "Hide Form" : "Submit Plant"}</button>
                { showCreateForm && <CreatePlantForm />}
                <hr />
                <div>
                    <input name="search" onChange={this.handleChange} value={this.state.search} placeholder="Search for Plants"/>
                </div>
                <MatchContainer plants={filteredPlants}/>
            </div>
           )  
    }
}

export default HomeView;
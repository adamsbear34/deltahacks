import React, { Component } from 'react' 
import axios from 'axios';

//Components 

import Item from '../components/Item';


//MUI improts 
import GridList from '@material-ui/core/GridList';
import { makeStyles } from '@material-ui/core/styles';


const styles = {
  
    list: {
        width: 500,
        height: 450,
        textAlign: "center",
    }



}

class home extends Component {

    state = {
        items: null
    }

    componentDidMount() {

        axios.get("/donations")
            .then(res => {
                console.log(res.data)
                this.setState({
                    items: res.data 
                })
            })
            .catch(err => console.log(err));

    }


    render(){
        const classes = styles;
        let postedItems = this.state.items ? (
        this.state.items.map(item => <Item key={item.itemId} item={item} />)
        ) : <p>Loading...</p>
        return (
                <GridList cellHeight={'auto'} cols={3} className={classes.list}>
                    {postedItems}
                </GridList>
    
        )


    }



}

export default home 
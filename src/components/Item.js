import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

//MUI import 
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const styles = {

    card: {
        display: "flex",
        marginBottom: 20,
        marginLeft: 40,

    },

    content: {
        padding: 45,
       
        
    }

}


class Item extends Component {

    render(){
        dayjs.extend(relativeTime)
        const { classes, item :{body, createdAt, userHandle} } = this.props   
        return (
           <Card className={classes.card}>
               <CardMedia 
                title="Item Image"
                className={classes.image}
               /> 

                <CardContent className={classes.content}>
                    <Typography variant="h5" component={Link} to={`/users/${userHandle}`}>{userHandle }</Typography>
        <Typography variant="body2" color="textSecondary">{dayjs(createdAt).fromNow()}</Typography>
                    <Typography variant="body1" >{body}</Typography>
                    <Typography variant="body1" >Price</Typography>
                </CardContent> 

                <CardActions className={classes.action}>
                    <Button size="small" color="primary">
                        Buy
                    </Button>    
                </CardActions>  
                  
              
           </Card>
        )
    }

}


export default withStyles(styles)(Item);
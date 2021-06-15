import React, { Component } from 'react'
import { TextField, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/styles";
import { URL_POSTS } from '../../api/baseUrl/BaseUrl';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: 'calc(92.6vh)',
        // backgroundColor: '#ccc'
    },
    mp: {
        marginTop: '15px',
    },
    btn: {
        marginTop: '45px',
    },
    color: {
        // backgroundColor: '#fbc531',
        textAlign: 'center'
    },
    m: {
      margin: "20px"
    },
    p: {
      padding: "10px",
    },
    form: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
});

class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            desc: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        fetch(URL_POSTS,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: this.state.title,
                desc: this.state.desc,
                username: this.props.user.username,
                likes: 0
            })
        }).then(() => {
            console.log('success')
            this.props.history.push('/dashboard')
        }).catch((err) => {
            console.log(err)
        })
        this.setState({
            title: '',
            desc: ''
        })
    } 
    render() {
        const { classes } = this.props;
        return (
            <>
              <form 
                    className={`${classes.form} ${classes.root}`}
                    onSubmit={this.handleSubmit}
                    >
                        <TextField
                        className={classes.m}
                        name="title"
                        value={this.state.title}
                        error={false}
                        variant="standard"
                        id="standard-error"
                        label="Tilte"
                        onChange={this.handleChange}
                        />
                        <TextField
                        className={classes.m}
                        name="desc"
                        value={this.state.desc}
                        error={false}
                        variant="standard"
                        id="standard-error"
                        label="desc"
                        onChange={this.handleChange}
                        />
                        <Button 
                        variant="contained" 
                        color="primary"
                        type="submit"
                        >
                            Create
                        </Button>
                </form>  
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}
 
export default connect(mapStateToProps)(withStyles(styles, {withTheme:true})(CreatePost))
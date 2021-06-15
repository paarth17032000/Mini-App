import React, { Component } from 'react'
import { TextField, Button } from "@material-ui/core"
import { withStyles } from "@material-ui/styles";

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

export default withStyles(styles, {withTheme:true})(CreatePost)
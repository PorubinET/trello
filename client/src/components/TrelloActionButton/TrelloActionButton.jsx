import React, { Component } from "react";
import { Button, Icon } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import TextareaAutosize from 'react-textarea-autosize';
import CancelIcon from '@mui/icons-material/Cancel';
import { connect } from 'react-redux'
import "./TrelloActionButton.scss"

class TrelloActionButton extends Component {

    state = {
        formOpen: false,
        text: ""
    }

    openForm = (e) => {
        e.preventDefault();
        this.setState({
            formOpen: true
        })
    }

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });
    }

    handleInputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    renderAddBatton = () => {
        const { list } = this.props
        console.log(list)
        const buttonText = list ? "Add a list" : "Add a card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "while" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div
                onClick={this.openForm}
                style={
                    {
                        ...styles.openFormButtonGroup,
                        opacity: buttonTextOpacity,
                        color: buttonTextColor,
                        backgroundColor: buttonTextBackground
                    }}>
                <AddIcon />
                <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () => {
        const { list } = this.props
        const placeholder = list
            ? "Enter list title..."
            : "Enter a title for this card..."

        const buttonTitle = list ? "Add List" : "Add Card"
        return (
            <div>
                <Card style={{
                    minHeight: 80,
                    minWidth: 272,
                    marginTop: 16,
                    marginBottom: 16,
                    padding: "8px, 8px, 2px"
                }}>
                    <TextareaAutosize
                        placeholder={placeholder}
                        onBlur={this.closeForm}
                        value={this.state.text}
                        onChange={this.handleInputChange}
                        autoFocus
                        style={{
                            resize: "none",
                            width: "100%",
                            overflow: "hidden",
                            outline: "none",
                            border: "none"
                        }}
                    />
                </Card>
                <div style={styles.openFormButtonGroup}>
                    <Button
                        variant="contained"
                        style={{
                            color: "while",
                            backgroundColor: "#5aac44"
                        }}>
                        {buttonTitle}
                    </Button>
                    <Icon style={{
                        marginLeft: 8,
                        cursor: "pointer",
                    }}>
                        <CancelIcon />
                    </Icon>
                </div>
            </div>
        )
    }

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddBatton();
    }
}

const styles = {
    openFormButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingleft: 10,
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}

export default connect() (TrelloActionButton);
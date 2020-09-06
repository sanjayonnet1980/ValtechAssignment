import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'

export default class FormControl extends Component {
    constructor(props) {
        super(props);
        const { editItem, editMode } = this.props;
        this.state = {
            logo: editMode ? editItem.logo : "",
            imgURL: editMode ? editItem.imgURL : "",
            imgTitle: editMode ? editItem.imgTitle : "",
            title: editMode ? editItem.title : "",
            totalExp: editMode ? editItem.totalExp : "",
            totalProjects: editMode ? editItem.totalProjects : "",
            desc: editMode ? editItem.desc : "",
            location: editMode ? editItem.location : ""
        }
    }

    handleUpdate = (event, name) => {
        this.setState({[name]: event.target.value})
    }
    render() {
        const { imgURL, totalExp, title, totalProjects, desc, editMode, imgTitle, editItem } = this.state;
        const { updateDeveloper, items } = this.props;
        const developer = { 
            logo: "" ,
            imgURL,
            imgTitle,
            title,
            totalExp,
            totalProjects,
            desc,
            location: "",
            id: editMode ?  editItem.id : items.length+1

         };
        return (
            <div>
                <div className="header">
                    <h4>Featured<strong> Developers</strong><br />
                        <span>Prominent developers in Bangalore</span></h4>                    
                </div>
                <label>Developer log image URL</label>
                    <p><input type="text" value={imgURL} onChange={e => this.handleUpdate(e, 'imgURL')}></input></p>
                <label>Developer Name</label>
                    <p><input type="text" value={title} onChange={e => this.handleUpdate(e, 'title')}></input></p>
                <label>Years of Experience</label>
                <p><input type="text" value={totalExp} onChange={e => this.handleUpdate(e, 'totalExp')}></input></p>
                <label>Projects count</label>
                    <p><input type="text" value={totalProjects} onChange={e => this.handleUpdate(e, 'totalProjects')}></input></p>
                <label>Description</label>
                    <p><input type="textarea" value={desc} onChange={e => this.handleUpdate(e, 'desc')}></input></p>
                <label>Project Name</label>
                    <p><input type="text" value={imgTitle} onChange={e => this.handleUpdate(e, 'imgTitle')}></input></p>
                <div className="addbutton">
                    <button className="btn btn-sm" onClick={() => updateDeveloper(developer)}>Update</button>
                </div>
            </div>
        )
    }
}

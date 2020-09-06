import React from 'react';
import Data from '../data/developers.json';
import './styles/styles.css'
import './styles/Card-style.css'
// import FormControl from './FormControl';


class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: Data.items,
            editItem: {},
            editMode: false
        }
    }

    updateDeveloper = (developer) => {
        let newItems = this.state.items;
        newItems.push(developer)
        this.setState({
            items: newItems})
    }

    editDeveloper = (id) => {
        const { items } = this.state;
        const filteredItem = items.filter(item => item.id === id);
        this.setState({ editItem: filteredItem, editMode: true });
    }

    deleteDeveloper = (id) => {
        const { items } = this.state;
        const newItems = items.filter(item => item.id !== id);
        this.setState({ items: newItems });
    }
    render() {       
        const { items, editItem, editMode } = this.state;
        return (
            <div className="row">
                <div className="col-md-12">
                    {/* <FormControl updateDeveloper={this.updateDeveloper} items={items} editItem={editItem} editMode={editMode}/> */}
                </div>
                   {items.map((item,index) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="card border">
                                    <div class="logo">
                                            <img src={item.logo} alt="imagelogo" class="img-fluid rounded float-left" />                                            
                                    </div>
                                    <div className="card-title">
                                        <h5><strong>{item.title}</strong></h5>
                                    </div>
                                    <div className="totalExp">
                                        <strong>{item.totalExp}</strong> <p>Years Exp.</p>
                                    </div>
                                    <div className="totalProjects">
                                        <strong>{item.totalProjects}</strong> <p>Projects</p>
                                    </div>
                                    <div className="desc">
                                        <p class="card-text">{item.desc}</p>
                                    </div>
                                    <div className="imgTitle">
                                        <u>{item.imgTitle}</u>
                                    </div>
                                    <div className="imgURL">
                                        <img src={item.imgURL}  alt="imageURL" class="img-fluid rounded" />
                                    </div>
                                    <div className="imgtitle-location">
                                        {item.imgTitle}<br/>
                                        {item.location}
                                    </div>
                               <button onClick={() => this.editDeveloper(item.id)}>Edit</button>
                               <button onClick={() => this.deleteDeveloper(item.id)}>Delete</button>
                               
                                </div>
                            </div>
                        ))
                        }
                    
            </div>
            )            
    }
}
export default ProductList;
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css'


class Header extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            items: [],
            currentItem: {
                id: '',
                location: '',
                desc: '',
                totalProjects: '',
                totalExp: ''
            }
        }
        this.addNewDeveloper = this.addNewDeveloper.bind(this);
    }
    addNewDeveloper(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h4>Featured<strong> Developers</strong><br />
                        <span>Prominent developers in Bangalore</span></h4>
                    
                </div>
                <div className="addbutton">
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">+ ADD NEW DEVELOPER</button>
                </div>
                {/* <!-- Modal --> */}
                    <div id="myModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        {/* <!-- Modal content--> */}
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Modal Header</h4>
                        </div>
                        <div class="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Update</button>
                        </div>
                        </div>

                    </div>
                    </div>
            </div>
        )
    }
}

export default Header;
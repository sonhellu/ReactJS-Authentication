import React from 'react';
import { Link, useHistory } from "react-router-dom";



function Sidebar(props) {
    const history = useHistory();
    function outHome() {
        history.push('/login')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" href="#">Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
        </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="dropdown-item" href="#">Action</Link>
                                <Link className="dropdown-item" href="#">Another action</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="#">Something else here</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link disabled" href="#">Disabled</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <button type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#exampleModal">
                           Log Out
                        </button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel" >Log Out</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    Are you sure you want to log out?
      </div>
                                    <div class="modal-footer">
                                       <button type="button" class="btn btn-outline-primary" onClick={outHome} data-dismiss="modal">Sure</button>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;
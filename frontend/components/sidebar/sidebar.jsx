import React from "react";

class Sidebar extends React.Component {
    constructor(props){
        super(props)
    }

    // sidebarSwap {

    // }


    render() {
   
        const sidebarClass = this.props.isOpen ? 'sidebar-open' : 'sidebar';

        //this should be the general structure of the if, now looking for a way to trigger opening in navbar

        return (
            //  <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap}/></p>  
            // <div>
            //      <p><img src={window.barsLogoUrl} width="20" height="20" /></p>  
            // </div>


            <div className={sidebarClass}>
           
                <div>
                    <a href="https://www.linkedin.com/in/dave-hanna/"> <img src={window.linkedUrl} width="40" height="30"></img></a>
                    <p>Linked In</p>
                </div>

                <div>
                    <a href="https://github.com/Hannada"> <img src={window.gitLogoUrl} width="40" height="30"></img></a>
                    <p>Github</p>
                </div>

                <div>
                    <a href="https://angel.co/dave-hanna-1"> <img src={window.angelLogoUrl} width="40" height="30"></img></a>
                    <p>Angel List</p>
                </div>

                <div>   
                    {/* <a href="https://hannada.github.io/"> <img src={window.personalLogoUrl} width="40" height="30"></img></a> */}
                    <p>Personal Site</p>
                </div>

            </div>
        );
    }
}

export default Sidebar; 
import React from "react";

class Sidebar extends React.Component {
    // constructor(props){
    //     super(props)
    // }

    // sidebarSwap {

    // }


    render() {
   

        return (
            //  <p><img src={window.barsLogoUrl} width="20" height="20" onClick={this.sidebarSwap}/></p>  
            // <div>
            //      <p><img src={window.barsLogoUrl} width="20" height="20" /></p>  
            // </div>


            <div className="sidebar">
                <div>
                    <p><img src={window.barsLogoUrl} width="20" height="20" /></p>  
                </div>

                <div>
                    <a href="https://www.linkedin.com/in/dave-hanna/"> <img src={window.linkedUrl} width="40" height="30"></img></a>
                </div>

                <div>
                    <a href="https://github.com/Hannada"> <img src={window.gitLogoUrl} width="40" height="30"></img></a>
                </div>

                <div>
                    <a href="https://angel.co/dave-hanna-1"> <img src={window.angelLogoUrl} width="40" height="30"></img></a>
                </div>

                <div>   
                    <a href="https://hannada.github.io/"> <img src={window.personalLogoUrl} width="40" height="30"></img></a>
                </div>

            </div>
        );
    }
}

export default Sidebar; 
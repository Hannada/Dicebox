import React from "react";

class Sidebar extends React.Component {
    // constructor(props){
    //     super(props)
    // }

 


    render() {
   

        return (
            <div className="sidbar">
                <div>Git</div>

                <div>Angelist</div>

                <div>
                   
                    <a href="https://hannada.github.io/"> <img src={window.personalLogoUrl} width="40" height="30"></img></a>
                </div>

            </div>
        );
    }
}

export default Sidebar; 
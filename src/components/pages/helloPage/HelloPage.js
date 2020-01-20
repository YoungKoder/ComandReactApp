import React from "react";

import Button from "../../common/Button/Button";

const HelloPage = () => {

    return (
        <div>
            <h1>HelloPage</h1>
            <Button 
                buttonStyle = "btn--warning--outline"
                buttonSize = "btn--medium">
                Submit
            </Button>
        </div>
        
    )
}

export default HelloPage;
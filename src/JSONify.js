import React, { useState } from 'react'

function JSONify(props) {

        const [formData, setFormData] = useState({value: ""});
        // const [jsonHTML, setJsonHtml] = useState();

        console.log("PROPS: ", props)

    const changeHandler = (e) => {
        setFormData({value: e.target.value});
    }

    const processHTMLHandler = (e) => {
        e.preventDefault();
        // setJsonHtml(JSON.stringify(data.value))
        console.log("HTML: ", JSON.stringify(formData.value))
    }
   
    return (
        <div>
                <h2>HTML JSONify</h2>
                 <form onSubmit={processHTMLHandler}>
                    <textarea name="jsonify" id="jsonify" cols="50" rows="30" value={formData.value} onChange={changeHandler}></textarea><br />
                    
                <button type="submit">Process HTML</button>
                </form>
                <div>
                    <h3 className="output">{JSON.stringify(formData.value)}</h3>  
                </div> 
        </div>
    )
}

export default JSONify

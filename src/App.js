import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


ClassicEditor.builtinPlugins.map( plugin => plugin.pluginName );

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ]
    } )
    .catch( error => {
        console.log( error );
    } );

    class App extends Component {  

        constructor(props) {
            super(props);
            this.state = {html: "JSON output here"};
        }
            
        passHTML = (Obj) => {
            this.setState({html: JSON.stringify(Obj.html)})
        }

        render() {
        return (
          <>
            <div className="App">
                <h2>Convert and edit plain text, output JSON friendly HTML</h2>
                <ol>
                    <li>Paste raw text into the editor.</li>
                    <li>Edit the text as WYSIWYG HTML.</li>
                    <li>Output in pink box is JSON stringified suitable for JSON data value.</li>
                    <li>Rejoice you didn't have to add HTML tags manually nor prepare it for JSON.</li>
                </ol>
                <CKEditor
                    editor={ ClassicEditor }
                    data="Paste your raw text here...(replace me)"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        // console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.passHTML( {html: data})
                    } }
                    onBlur={ ( event, editor ) => {
                        const data = editor.getData();
                        this.passHTML( {html: data})
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
            <div>
                <h3 className="output">{this.state.html}</h3>  
             </div> 
                
          </>
        );
    }
}

export default App;

const initialMarkdown = `
# H1
    ## H2
    [title](https://www.example.com)
    \`code\`
    \`\`\`
    {
      "firstName": "John",
      "lastName": "Smith",
      "age": 25
    }
    \`\`\`

    - First item
    - Second item
    - Third item

    > blockquote

    ![alt text](image.jpg)

    **bold text**
`

var renderer = new marked.Renderer()

renderer.link = function(href, title, text) {
    return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
    renderer,
    highlight: function(code) {
        return hljs.highlightAuto(code).value;
    },
    breaks: true
});

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            markdown: initialMarkdown
        }
    }
    
    handleChange = e => this.setState({ markdown: e.target.value });

    render() {
        return (
            <div>
                <h1>Markdown Previewer</h1>
                <h3 id="edit-tab"><i class="fas fa-code"></i> Edit</h3>
                <h3 id="preview-tab"><i class="far fa-eye"></i> Preview</h3>
                <div className="container">
                    <div className="left">
                        <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}/>
                    </div>
                    <div className="right">
                        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById("app"));
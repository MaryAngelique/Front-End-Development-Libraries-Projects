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

class App extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            markdown: initialMarkdown
        }
    }
    
    handleChange = e => this.setState({ markdown: e.target.value });

    return();
}

ReactDOM.render(<App/>, document.getElementById('app'));
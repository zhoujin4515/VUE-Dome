import '../assets/style/footer.styl'

export default {
    data() {
        return {
            author: 'Jin'
        }
    },
    // template
    render() {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}
import Nav from 'react-bootstrap/Nav'

export default function SocialLinks() {

    return (
        <>
            <div>Social Media Links</div>
            <Nav className="flex-column">
                <Nav.Link href="https://github.com/TravisSLee">Github</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/travisscottlee/">LinkediIn</Nav.Link>
                <Nav.Link href="https://travisslee223.medium.com">Medium</Nav.Link>
                <Nav.Link href="https://twitter.com/TravisScottLee">Twitter / X</Nav.Link>
            </Nav>
        </>
    )
    
}
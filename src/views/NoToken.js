import React from "react"
import { Button, Input } from "../components/ui/forms.js"
import { Container, Jumbo } from "../components/ui/layout"

const NoToken = () => {
    const [token, setToken] = React.useState("")
    return <Container>
        <Jumbo>
            <h1>Looking for a certificate?</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                window.location.href="/pdf/"+token
            }}>
                <Input type="text" required onChange={(e) => setToken(e.target.value)} placeholder="Certificate token" />
                <Button>Get certificate</Button>
            </form>
        </Jumbo>
    </Container>
}
export default NoToken
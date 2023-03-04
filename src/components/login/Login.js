import React, { Component } from "react"
import * as Components from './Components'
import './login.css'

function Login() {


     const [signIn, toggle] = React.useState(true);
    


    return(
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Register</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Register</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Log in</Components.Title>
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button>Log In</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Good to see you again!</Components.Title>
                    <Components.Paragraph>
                    Let's pick up where we left off                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        log in
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Experience the Difference</Components.Title>
                      <Components.Paragraph>
                      Sign Up and Discover the Benefits of Our Service.

                      </Components.Paragraph>
                          <Components.GhostButton onClick={() => toggle(false)}>
                              register
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default Login;

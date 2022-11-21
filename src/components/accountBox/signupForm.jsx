import React, { useContext } from "react";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common";

export function SignupForm(props){

    const { switchToSignin} = useContext(AccountContext);

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
                <Marginer direction="vertical" margin={10}/>
                <Marginer direction="vertical" margin="1.6em"/>
                <SubmitButton type="submit">Sign In</SubmitButton>
                <Marginer direction="vertical" margin="1em"/>
                <MutedLink href="#">Already have an account?<BoldLink href="#" onClick={switchToSignin}> Sign In</BoldLink></MutedLink>
        </BoxContainer>
    )
}
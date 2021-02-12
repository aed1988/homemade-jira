import React from "react";
import { Card, Form, Section, Input } from "../Components";
import { Button } from "../Components/header/styles/header";

export const LogInPage = () => {
    return (
        <Section columns="2" height="calc(100vh - 80px)">
            <div>
                <h1>Login</h1>
                <h3>
                    Get started on managing your <br />
                    agile workflow!
                </h3>
            </div>
            <Card>
                <Form>
                    <Input name="username" placeholder="Username"></Input>
                    <Input
                        name="password"
                        placeholder="Password"
                        type="password"
                    ></Input>
                    <Button primary>Log In</Button>
                </Form>
            </Card>
        </Section>
    );
};

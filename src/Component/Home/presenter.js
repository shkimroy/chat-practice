import React from "react";
import { Button, Form, Header, Grid } from "semantic-ui-react";

const Home = props => (
  <>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 300 }}>
        <Header content="익명 채팅에 오신것을 환영합니다." />
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            type="text"
            value={props.username}
            placeholder="닉네임을 입력해주세요."
            onChange={e => props.handleInput(e.target.value)}
          />
          <Button fluid color="blue" size="large" onClick={props.handleSubmit}>
            입장
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  </>
);

export default Home;

import React from 'react';
import {
  Card,
  Header,
  Dimmer,
  Loader,
  Feed,
  Form,
  Button
} from "semantic-ui-react";

const image = require("../../images/noPhoto.jpg")

const ChatRoom = props => (
  <>
    <Card fluid>
      <Card.Content
        header={<Header content="title" />}
        description={
          <Dimmer.Dimmable className="flex-vert">
            <Dimmer active={props.loading} inverted>
              <Loader size="large" />
            </Dimmer>

            {props.messages.length > 0 && (
              <Feed>
                {props.messages.map((message, idx) => (
                  <Feed.Event key={idx}>
                    <Feed.Label image={image}/>
                    <Feed.Content>
                      <Feed.Date content={message.at.toLocaleString()} />
                      <Feed.Summary content={message.username} />
                      <Feed.Extra text content={message.message} />
                    </Feed.Content>
                  </Feed.Event>
                ))}
              </Feed>
            )}

            <Form size="large">
              <Form.Input
                fluid
                size="large"
                placeholder="메세지를 입력하세요."
                value={props.newMsg}
                onChange={e => props.handleChangeInput(e.target.value)}
                disabled={props.loading}
              />
              <Button
                fluid
                color="blue"
                onClick={props.handleSubmit}
              >
                보내기
              </Button>
            </Form>
          </Dimmer.Dimmable>
        }
      ></Card.Content>
    </Card>
  </>
);

export default ChatRoom;
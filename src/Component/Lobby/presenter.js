import React from 'react'
import { Link } from "react-router-dom";
import { Card, Header, Dimmer, List, Form, Button } from "semantic-ui-react";

const Lobby = props => (
  <>
    <Card fluid>
      <Card.Content
        header={<Header content="입장 할 채팅방을 선택해주세요." />}
        description={
          <Dimmer.Dimmable className="flex-vert">
            {props.roomList.length > 0 ? (
              props.roomList.map(room => (
                <Link to={`/room/${room.id}`} key={room.id}>
                  <List.Item>
                    <List.Content as="h3" className="elipsis">
                      <List.Header>{room.title}</List.Header>
                    </List.Content>
                  </List.Item>
                </Link>
              ))
            ) : (
              <List.Item style={{ cursor: "default", background: "none" }}>
                <List.Content>
                  <List.Description>개설된 채팅방이 없습니다.</List.Description>
                </List.Content>
              </List.Item>
            )}
            <List.Item className="flex-bottom">
              <Form size="large">
                <Form.Input
                  fluid
                  icon="paper plane outline"
                  iconPosition="left"
                  type="text"
                  value={props.roomname}
                  placeholder="또는 개설 할 채팅방의 제목을 입력하세요."
                  onChange={e => props.handleChangeInput(e.target.value)}
                />
                <Button
                  fluid
                  color="blue"
                  size="large"
                  onClick={props.handleSubmit}
                >
                  만들기
                </Button>
              </Form>
            </List.Item>
          </Dimmer.Dimmable>
        }
      ></Card.Content>
    </Card>
  </>
);

export default Lobby;
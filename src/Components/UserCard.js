
import React from 'react';
import { Card } from 'react-bootstrap';

import  CardModal from "./CardModal";



function UserCard(props) {



    return (
        <div>
            <Card className='m-2'>
                <Card.Body>
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 "><strong>Username:</strong> {props.user.username}</Card.Subtitle>
                    <Card.Text>
                        <strong>City:</strong> {props.user.address.city} <br />
                        <strong>Street:</strong> {props.user.address.street} <br />
                        <strong>Suite:</strong> {props.user.address.suite}
                    </Card.Text>

                   

                    <CardModal user={props.user} updateUser={(type, userInfo) => props.updateUserList(type, userInfo)} />

                </Card.Body>
            </Card>

            
        </div>
    );
}

export default UserCard;






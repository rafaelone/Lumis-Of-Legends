import React, {useState, ReactElement} from 'react';
import {
  ContainerFriends,
  FriendImage,
  FriendInformation,
  General,
} from './styles';

import FriendListJson from '../../jsons/friends.json';

type FriendList = {
  id: number;
  name: string;
  status: string;
  avatar_url: string;
};

export function Friends(): ReactElement {
  const [list, setList] = useState<FriendList[]>(FriendListJson);

  return (
    <ContainerFriends>
      <General>General (9/15)</General>
      <ul>
        {list.map(friend => (
          <li key={friend.id}>
            <FriendImage>
              <img src={friend.avatar_url} alt={friend.name} />
            </FriendImage>
            <div className="circle" />
            <FriendInformation>
              <div>
                <span className="name">{friend.name}</span>
                <span className="status">{friend.status}</span>
              </div>
            </FriendInformation>
          </li>
        ))}
      </ul>
    </ContainerFriends>
  );
}

import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { BsChatDots, BsFillPersonFill, BsFillStopwatchFill } from 'react-icons/bs';

const IssuesList = () => {
  const { buckets } = useContext(GlobalContext);
  return (
    <ListContainer>
      {buckets.map((issue, idx) => {
        const { title, user, updated_at, id, comments, number } = issue;

        return idx === 4 ? (
          <React.Fragment key={id}>
            <WantedAD>
              <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                  alt="광고"
                />
              </a>
            </WantedAD>
            <Link to={`/detail/${number}`}>
              <ListItem>
                <h2>
                  #{number} {title}
                </h2>
                {/* FIXME : 반복되는 컴포넌트 따로 빼야 함 */}
                <UserBox>
                  <Writer>
                    <BsFillPersonFill /> {user.login}
                  </Writer>
                  <Date>
                    <BsFillStopwatchFill /> {updated_at.substr(0, 10)}
                  </Date>
                  <Comment>
                    <BsChatDots /> {comments}
                  </Comment>
                </UserBox>
              </ListItem>
            </Link>
          </React.Fragment>
        ) : (
          <Link to={`/detail/${number}`}>
            <ListItem key={id}>
              <h2>
                #{number} {title}
              </h2>

              <UserBox>
                <Writer>
                  <BsFillPersonFill /> {user.login}
                </Writer>
                <Date>
                  <BsFillStopwatchFill /> {updated_at.substr(0, 10)}
                </Date>
                <Comment>
                  <BsChatDots /> {comments}
                </Comment>
              </UserBox>
            </ListItem>
          </Link>
        );
      })}
    </ListContainer>
  );
};

export default IssuesList;

const ListContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100vh - 70px);
  padding-top: 70px;
`;
const ListItem = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 15px 20px 20px;
  h2 {
    font-size: 17px;
    font-weight: 600;
    line-height: 28px;
  }
  :hover {
    background-color: #eee;
    transition: 1s;
    cursor: pointer;
  }
`;
const UserBox = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-weight: 500;
`;
const Writer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    margin-right: 7px;
  }
`;
const Date = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    margin-right: 7px;
  }
`;
const Comment = styled.span`
  display: flex;
  align-items: center;
  svg {
    margin-right: 7px;
  }
`;
const WantedAD = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  img {
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
`;

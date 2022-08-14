import { useContext} from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import {uiConfig, auth} from '../../../firebase';
import { AuthContext } from '../../../providers/UserProvider';

import StyledFirebaseAuth from './StyledFirebaseAuth';

const Auth = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser ? (
      <Navigate to={'/'} />
      ): (
        <SBox>
          <SLogin>
            <STitle>ログイン</STitle>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          </SLogin>
        </SBox >
      )}
        
     </> 
  );
};

export default Auth;

const STitle = styled.p`
  font-size: 24px;
  margin-top: -40px;
  font-weight: bold;
`

const SLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    width: 400px;
    height: 400px;
    border-radius: 20px;
` 

const SBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
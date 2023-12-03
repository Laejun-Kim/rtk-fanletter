import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "components/UI/Wrapper";
import ProfileCard from "components/profile/ProfileCard";
import ProfileEdit from "components/profile/ProfileEdit";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <Wrapper>
      <StProfileContainer>
        {!isEditing && <ProfileCard setIsEditing={setIsEditing} />}
        {isEditing && <ProfileEdit setIsEditing={setIsEditing} />}
      </StProfileContainer>
    </Wrapper>
  );
}

//styled-components
const StProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* width: 100vw; */
  /* height: 100vh; */
  /* margin-top: 50px; */
`;

export default Profile;

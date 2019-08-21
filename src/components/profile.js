import React from 'react';

const Profile = (props) => {
    console.log('profile', props.user);
    
    return ( 
        <div className="profile">
            <h1>Profile Here</h1>
        </div>
     );
}
 
export default Profile;

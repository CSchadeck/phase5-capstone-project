import React, {useState} from 'react'

export default function UserProfileUpdate({handleUpdateUser}) {
    const [ newUsername, setUsername]= useState("")
    const [ newEmail, setEmail]= useState("")
    const [ newBio, setBio]= useState("")
    return (
        <div>UserProfileUpdate
        <form onSubmit={handleUpdateUser}>
            <label>Username</label>
            <input
            value={newUsername}
            onChange= {(e)=> console.log(e.target.value)}
                className="form_field"
                type="text"
                placeholder="Update username"
                name="newUsername"
            />
            <label>Email</label>
            <input
              value={newEmail}
              onChange= {(e)=> setEmail(e.target.value)}            
                  className="form_field"
                  type="text"
                  placeholder="update email"
                  name="newEmail"
              />
            <label>Bio</label>
            <input
              value={newBio}
              onChange= {(e)=> setBio(e.target.value)}             
                  className="form_field"
                  type="text"
                  placeholder="Update"
                  name="newBio"
              />
              <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

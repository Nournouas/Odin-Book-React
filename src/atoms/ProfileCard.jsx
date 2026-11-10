import React, { useState } from 'react'

import UserInfo from './UserInfo';
import EditUserForm from './forms/EditUserForm';
import fetchHelper from '../helpers/fetchHelper';

export default function ProfileCard({user, refreshUser, edit=false, follows}) {
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({})
  const handleEditToggle = () => {
    setEditing(true);
  }

  const cancelEditing = () => {
    setEditing(false);
  }

  const handleFollow = async () => {
    const result = await fetchHelper(`http://localhost:3000/user/${user.id}/follow`, "PUT", {}, true);
    if (!result.errors){
      refreshUser();
    }else{
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {});
      setErrors(errorsObj)
    }
  }

  const handleUnfollow = async () => {
    const result = await fetchHelper(`http://localhost:3000/user/${user.id}/unfollow`, "PUT", {}, true);
    if (!result.errors){
      refreshUser();
    }else{
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {});
      setErrors(errorsObj)
    } 
  }
  
  const submitEdits = async (e) => {
    e.preventDefault();
    let bio = e.target.bio.value;
    if (!bio) bio = ""
    const name = e.target.name.value;
    const result = await fetchHelper(`http://localhost:3000/user/${user.id}`, "PUT", {name, bio}, true);
    if (!result.errors){
      setEditing(false);
      refreshUser();
    }else{
      const errorsObj = result.errors.reduce((acc, err) => {
        acc[err.path] = err.msg;
        return acc;
      }, {});
      setErrors(errorsObj)
    }
    
  }
  const {id, name, bio} = user;
  
  return (
    editing 
    ? <EditUserForm errors={errors} submitEdits={submitEdits} user={user} cancelEditing={cancelEditing} edit={edit} />
    : <UserInfo name={name} bio={bio} editHandler={handleEditToggle} edit={edit} handleFollow={handleFollow} follows={follows} handleUnfollow={handleUnfollow} />
  )
    
}

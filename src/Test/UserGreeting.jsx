function UserGreeting({isLoggedIn = false, username = "userGuest"}) {

  return (isLoggedIn ? <h2>Welcome {username}</h2> : <h2>Please login to continue</h2>);
}

export default UserGreeting
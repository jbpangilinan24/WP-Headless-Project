function Button() {
  const handleClick = (e) => {
    e.target.textContent = "You clicked me!";
  }

  return(
    <button onClick={(e) => handleClick(e)}>Click me</button>
  );
}

export default Button
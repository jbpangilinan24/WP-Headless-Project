import React, {useState} from 'react';

function MyComponent() {
  // const [name, setName] = useState("Guest");
  // const [payment, setPayment] = useState("");
  // const [shipping, setShipping] = useState("Pickup");

  // const updateName = (e) => {
  //   setName(e.target.value);
  // }

  // const updatePayment = (e) => {
  //   setPayment(e.target.value);
  // }

  // const updateShipping = (e) => {
  //   setShipping(e.target.value);
  // }

  // const [color, setColor] = useState("#000");

  // const updateColor = (e) => {
  //   setColor(e.target.value);
  // }

  // Destructuring array using objects inside useState
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  // Use parenthesis to updater function to get value inside js objects
  function addCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    }

    setCars(c => [...c, newCar]);
    
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function removeCar(index) {
    setCars(cars.filter((_, i) => i !== index));
  }

  function updateYear(e) {
    setCarYear(e.target.value);
  }

  function updateMake(e) {
    setCarMake(e.target.value);
  }

  function updateModel(e) {
    setCarModel(e.target.value);
  }

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function addFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    if(newFood != "") {
      setFoods(f => [...f, newFood]);
    }
  }

  function removeFood(index) {
    setFoods(foods.filter((_, i) => i !== index))
  }
  
  return(
    <div className="container">
      {/* <input value={name} onChange={updateName}/>
      <p>Name: {name}</p>
      <select value={payment} onChange={updatePayment}>
        <option value="">Select an option</option>
        <option value="Gcash">Gcash</option>
        <option value="Maya">Maya</option>
        <option value="Bank">Bank</option>
      </select>
      <p>Payment Type: {payment}</p>
      <input type="radio" id="pickup" onChange={updateShipping} name="shipping" value="Pickup" checked={shipping === "Pickup"}/>
      <label for="pickup">Pickup</label><br/>
      <input type="radio" id="delivery" onChange={updateShipping} name="shipping" value="Delivery" checked={shipping === "Delivery"}/>
      <label for="delivery">Delivery</label>
      <p>Shipping Type: {shipping}</p> */}

      {/* <div className="colorBoxWrap" style={{backgroundColor: color}}>
        <div className="textColor">Selected Color:</div>
        <div className="color">{color}</div>
      </div>
      <label>Select Color:</label><br/>
      <input type="color" value={color} onChange={updateColor}/> */}
      <h2>List of Car</h2>
      <ul>

        {cars.map((car, index) => 
          <li key={index} onClick={() => removeCar(index)}>{car.year} {car.make} {car.model}</li>
        )}
      </ul>
      <input type="number" onChange={updateYear} value={carYear}/><br/>
      <input type="text" placeholder="Enter car make" onChange={updateMake} value={carMake}/><br/>
      <input type="text" placeholder="Enter car model" onChange={updateModel} value={carModel}/><br/>
      <button onClick={addCar}>Add Car</button>

      {/* <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => 
          <li key={index} onClick={() => removeFood(index)}>{food}</li>
        )}
      </ul>
      <input type="text" placeholder="Enter food name" id="foodInput"/>
      <button onClick={addFood}>Add Food</button> */}
    </div>
  );
}

export default MyComponent
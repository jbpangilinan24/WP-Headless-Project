import PropTypes from "prop-types";

function Student({ name = "Guest", age = 0, isStudent = false }) {
  return (
    <div className="text-center mt-4">
      Name: {name}<br/>
      Age: {age}<br/>
      isStudent: {isStudent ? "Yes" : "No"}
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
export default Student
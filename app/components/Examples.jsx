var React = require('react');

/*
var Examples = React.createClass({
  render: function(){
    return(
        <h3>Examples Component</h3>
    )
  }
});
*/

//Syntax for arrow function
//(singleParam) => { statements }

var Examples = (props) => {
  return(
      <h3>Examples</h3>
  )
};

module.exports = Examples;

import React, { Component } from 'react';


class JsxExpression extends Component {
  render() {
    var name="Bariq"
    const showHello = false
    var showMath = true
    const numb1 = 25
    const numb2 = 28
    let math;
    if (showMath) {
      math = <h3>{numb1}+{numb2}={numb1+numb2}</h3>
    }
    else {
      math = null
    }

    
    
    return (
      <div>
        <h4>hello</h4>
        <h3>my name is {name.toUpperCase()}</h3>
        {showHello ? (<h2>ini woy</h2>) : null}
        {math}
      </div>
    );
  }
}

export default JsxExpression;

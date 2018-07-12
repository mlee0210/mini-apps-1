class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	 form: 0
  	};
  }
  
  render() {
    if(this.state.form === 0) {
      return (
        <div> 
          <p>Proceed to Checkout </p>
          <button onClick={() => this.setState({form:1})}> Start Checkout </button>
        </div>
      )
    }
    if(this.state.form === 1) {
      return(
        <UserInfo />
      )
    }
  }
};

class UserInfo extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  form: 1,
  	  name: '',
  	  email: '',
  	  password: ''
  	};
  	this.handleClick = this.handleClick.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  }	

  handleClick() {
    var user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    axios.post('/data', user)
    .then(results => {
      console.log('success posting User Info');
    })
    .catch(err => console.log('Error posting User Info ', err ));
  }

  handleChange(event) {
  	let name = event.target.name;
  	let value = event.target.value;
  	this.setState({
  	  [name]: value
  	})
  }

  render() {
  	if(this.state.form === 1) {
      return (
        <form id="userInfo">
          <label>Name: </label> 
          <input type="text" name="name" onChange={this.handleChange}/> <br/>
          <label>Email: </label>
          <input type="text" name="email" onChange={this.handleChange}/> <br/>
          <label>Password: </label>
          <input type="text" name="password" onChange={this.handleChange}/> <br/>
          <button onClick={() => {this.handleClick(); this.setState({form:2})}}> Next </button>
        </form>  
  	  )
  	}
  	if(this.state.form === 2) {
  	  return (
  	    <UserShip />
  	  )
  	}
  }
};

class UserShip extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  form: 2,
  	  address_1: '',
  	  address_2: '',
  	  city: '',
  	  state:'',
  	  zipcode:'',
  	  phone:''
  	};
  	this.handleClick = this.handleClick.bind(this);
  	this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    var userShip = {
      address_1: this.state.address_1,
      address_2: this.state.address_2,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      phone: this.state.phone
    }
    axios.post('/data', userShip)
    .then(results => {
      console.log('success posting User Ship Info');
    })
    .catch(err => console.log('Error posting User Ship Info ', err ));
  }

  handleChange(event) {
  	  let name = event.target.name;
  	  let value = event.target.value;
  	this.setState({
  	  [name]: value
  	})
  }


  render() {
  	if(this.state.form === 2) {
  	  return (
        <form id="userShipInfo">
          <label>Address1: </label> 
          <input type="text" name="address_1" onChange={this.handleChange}/> <br/>
          <label>Address2: </label>
          <input type="text" name="address_2" onChange={this.handleChange}/> <br/>
          <label>City: </label>
          <input type="text" name="city" onChange={this.handleChange}/> <br/>
          <label>State: </label> 
          <input type="text" name="state" onChange={this.handleChange}/> <br/>
          <label>Zipcode: </label>
          <input type="text" name="zipcode" onChange={this.handleChange}/> <br/>
          <label>Phone Number: </label>
          <input type="text" name="phone" onChange={this.handleChange}/> <br/>
          <button onClick={() => {this.handleClick(); this.setState({form:3})}}> Next </button>
        </form>  
  	  ) 
  	}
  	if(this.state.form === 3) {
  	  return (
  	    <UserPay />
  	  )
  	}
  }
};


class UserPay extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  form: 3,
  	  credit: '',
  	  expiry: '',
  	  cvv: '',
  	  billingZip:''
  	};
  	this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    var userPay = {
      credit: this.state.credit,
      expiry: this.state.expiry,
      cvv: this.state.cvv,
      billingZip: this.state.billingZip
    }
    axios.post('/data', userPay)
    .then(results => {
      console.log('success posting User Payment Info');
    })
    .catch(err => console.log('Error posting User Payment Info ', err ));
  }

  handleChange(event) {
  	  let name = event.target.name;
  	  let value = event.target.value;

  	this.setState({
  	  [name]: value
  	})
  }

  render() {
  	return (
      <form id="userPayInfo">
        <label>Credit Card: </label> 
        <input type="text" name="credit" onChange={this.handleChange}/> <br/>
        <label>Expiration Date: </label>
        <input type="text" name="expiry" onChange={this.handleChange}/> <br/>
        <label>CVV: </label>
        <input type="text" name="cvv" onChange={this.handleChange}/> <br/>
        <label>Billing Zipcode: </label> 
        <input type="text" name="billingZip" onChange={this.handleChange}/> <br/>
        
        <button onClick={() => {this.handleClick(); this.setState({form:1})}}> Complete Checkout </button>
      </form>  
  	) 
  }
};
























ReactDOM.render(<App />, document.getElementById('app'));

import React,{ Component } from 'react';

 import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Popup } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Segment, Divider,Icon,List,Image} from 'semantic-ui-react'
import { Link } from  'react-router'





class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {my: '',you: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    
  }

  handleChange(event) {
    this.setState({my: event.target.value});
  }

 handleChange1(event1) {
    this.setState({you: event1.target.value});
  }
  

render(){
 
  return (
    <div>

    <Segment inverted>
    <Form inverted>
      
        <Form.Input label='First name' placeholder='First name' value={this.state.my} onChange={this.handleChange}/>
        <Form.Input label='Last name' placeholder='Last name'  value={this.state.you} onChange={this.handleChange1}/>
         <Link to="/hello"><Form.Button content="Submit" /></Link>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      
        
    </Form>
  </Segment>

    <Button color='facebook'>
      <Icon name='facebook' /> Facebook
    </Button>
    <Button color='twitter'>
      <Icon name='twitter' /> Twitter
    </Button>
    <Button color='google plus'>
      <Icon name='google plus' /> Google Plus
    </Button>
    <Button color='vk' href='http://www.facebook.com'>
      <Icon name='vk' /> VK
    </Button>
    <Button color='linkedin'>
      <Icon name='linkedin' /> LinkedIn
    </Button>
    <Button color='instagram'>
      <Icon name='instagram' /> Instagram
    </Button>
    <Button color='youtube'>
      <Icon name='youtube' /> YouTube
 
    </Button>

    <Image  src={require('/home/vinitas/Documents/new/src/a.jpg')}  
        href= 'http://www.amazon.com'
        size='medium'
    
     />
  
 
</div> 

  
)
}


}



export default App
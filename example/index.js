import React from 'react';
import { render } from 'react-dom';
import YourComponent from '../src/components/YourComponent';

render(<YourComponent onClick={(e) => console.log(e)}>Hello from YourComponent</YourComponent>, document.getElementById('root'));
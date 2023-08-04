import logo from './logo.svg';
import './App.css';
import { Button, DatePicker } from 'antd';
import { useEffect } from 'react';
import Airtable from 'airtable';

const base = new Airtable({base_key: process.env.REACT_APP_AIRTABLE_KEY}).base('appkgFanuGmwzHgbv')

function App() {
  useEffect(async () => {
    const records = await base.select().all()
    console.log(records);
  })

  return (
    <div className="App">
      <h1>NYC Proptech</h1>
      <Button size='large'>Press me</Button>
    </div>
  );
}

export default App;

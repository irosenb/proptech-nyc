import { Button, DatePicker } from 'antd';
import { useEffect, useState } from 'react';
import Airtable from 'airtable';

const base = new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_KEY}).base('appkgFanuGmwzHgbv')

const Proptech = () => {
  const [records, setRecords] = useState([]) 

  useEffect(() => {  
    callRecords()
  }, [])

  const callRecords = async () => {
    const records = await base('tblipl9Nu1Q2ylZLs').select().all()
    console.log(records);

    setRecords(records)
  } 

  return (
    <div className="App">
      <h1>NYC Proptech</h1>
      <Button size='large'>Press me</Button>
      {records.map(record => (
        <Event key={record.id} record={record}/>
      ))}
      <p></p>
    </div>
  )
}

function Event({record}) {
  return (
    <div className='record'>
      <h1>{record.fields.Name}</h1>
    </div>
  )
}

export default Proptech
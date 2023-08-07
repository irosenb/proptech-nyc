import { Space, Card, Button } from 'antd';
import { useEffect, useState } from 'react';
import Airtable from 'airtable';
import { volcano } from '@ant-design/colors';

console.log(process.env.REACT_APP_AIRTABLE_KEY)
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
      <h1>Proptech NYC Events</h1>
      <Space size='middle' direction='vertical' style={{display: 'flex'}}>
        {
          records.map(record => (
            <Event key={record.id} record={record}/>
          ))
        }
      </Space>
      <p>A project by <a href='https://linkedin.com/in/irosenb'>Isaac Rosenberg</a>.</p>
    </div>
  )
}

function Event({record}) {
  return (
    <Card title={record.fields.Name} size='large'>
      <p>{record.fields.Organizer}</p>
      <p>{record.fields.Location}</p>
      <p>{record.fields.Description}</p>
      <p>{formatDate(record.fields.Date)}</p>
      <p>{record.fields.Time}</p>
      <Button type='primary'>
        <a target='_blank' href={record.fields.RSVP}>RSVP</a>
      </Button>
    </Card>
  )
}

const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);

  return formattedDate;
};

export default Proptech
import { Space, Card } from 'antd';
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
      <Space size={18} direction='vertical'>
        {records.map(record => (
          <Event key={record.id} record={record}/>
        ))}
      </Space>
      <p></p>
    </div>
  )
}

function Event({record}) {
  return (
    <Card title={record.fields.Name}>
    </Card>
  )
}

export default Proptech
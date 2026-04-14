import React, { useEffect } from 'react'

function Contacts() {

    const [dummy, setDummy] = React.useState([{id: 1, title: 'dummy data'}])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                const data = await response.json();
                setDummy(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    },[])

  return (
    <div>
      <h1>this is a contacts page</h1>
      {
        dummy.map((item) => {   
            return <p key={item.id}>{item.title}</p>
        })
      }
    </div>
  )
}

export default Contacts
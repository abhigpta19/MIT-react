import React,{useEffect} from 'react'

console.log("contact file loaded");

function Contact() {
  console.log("contact rendered");
    const [data, setData] = React.useState([]);
    useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
                    const datafetch = await response.json();
                    setData(datafetch)
                } catch (error) {
                    console.error('Error fetching data:', error)
                }
            }
            fetchData()
        },[])
  return (
    <div>
      <h1>this is contact</h1>
      {
        data.map((item) => {   
            return <p key={item.id}>{item.title}</p>
        })
      }
    </div>
  )
}

export default Contact

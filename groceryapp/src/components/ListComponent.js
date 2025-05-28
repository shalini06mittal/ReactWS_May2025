import React from 'react'

let customers = //undefined;
[
    {
      id:1,
      name:'Shalini'
    },
    {
      id:2,
      name:'Shreya'
    },
  ];
  
export default function ListComponent() {
  return (
    <div>
        <p className='head'>Customers:= {customers && customers[0].id}</p>
    
    Customers: {customers && customers.length===0 ? <p>No customers yet!!</p>: JSON.stringify(customers)}
    <div>
      {
        customers && customers.map(cust => <div> {cust.id} : {cust.name}</div>)
      }
    </div>

    <div>
      {
       customers && customers.map(cust => <div> 
            <p>Id: {cust.id}</p>  
            <p>Name : {cust.name}</p>
          </div>)
      }
    </div>
    <table className='table table-bordered'>
      <tr>
        <th>Id</th>
        <th>Name</th>
      </tr>
      {customers && customers.map(customer => <tr>
        <td>{customer.id}</td>
        <td>{customer.name}</td>
      </tr>)}
    </table>

    </div>
  )
}

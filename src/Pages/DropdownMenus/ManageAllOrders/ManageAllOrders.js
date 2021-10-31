import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SingleManageOrder from './SingleMangeOrder/SingleManageOrder';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState();
 
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
      <div>
          <h1 className="text-success">All Orders</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-5 my-3">
            
           {console.log(orders)}
            {orders?.map(order => <SingleManageOrder
                key={order._id}
                orders={order}>
                </SingleManageOrder>)}

        </div>
           
      </div>
    );
};

export default ManageAllOrders;
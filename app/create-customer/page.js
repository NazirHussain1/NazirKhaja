"use client";

import customer from "@/apis/apis/customer";
import product from "@/apis/apis/product";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default()=>{

    let [customers, setCustomers]  = useState([]);

    useEffect(()=>{

        

        customer.getCustomers().then((resp)=>{
            console.log(resp.data)
            setCustomers(resp.data);
        })

    }, [])

    function addProduct(){

        customer.addCustomer({
            customer_b_name:"Company-Name",
            customer_f_name:"First-name",
            customer_b_address:"My-address"
        }).then((resp)=>{
    
            console.log(resp.data)
            toast.success("product add hogya");
            


        }).catch(function(err){
            console.log(err);
        })

    }

    return <div>

        <table border={1}>

         <thead>
            <tr>
                <th>Company-Name</th>
                <th>First-name</th>
                <th>Address</th>
            </tr>
         </thead>

            {
                customers.map(function(product){
                    return <tr>
                        <td>{product.customer_b_name}</td>
                        <td>{product.customer_f_name}</td>
                        <td>{product.customer_b_address}</td>
                    </tr>
                })
            }
        </table>

    <button onClick={addProduct}>Add Customer </button>

    </div>

}
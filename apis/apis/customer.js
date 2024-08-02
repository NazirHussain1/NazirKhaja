import { webUrl } from "@/app/config";
import axios from "axios";

export default {
    addCustomer:(args)=>{

        return axios.post(process.env.NEXT_PUBLIC_MERI_WEBSITE+'/api/customer/addCustomer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCustomers:(args)=>{

       return axios.post(process.env.NEXT_PUBLIC_MERI_WEBSITE+'/api/customer/getCustomers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCustomer:(args)=>{

       return axios.post(process.env.NEXT_PUBLIC_MERI_WEBSITE+'/api/customer/deleteCustomer', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

}
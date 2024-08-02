"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import useSWR from "swr";


const fetcher = (...args)=>{
        return axios.get(...args).then(resp=>resp.data);
}

export default()=>{

    let {data, error, isLoading} = useSWR('https://fakestoreapi.com/products/1', fetcher);
    // let {data, error, isLoading} = useSWR('https://fakestoreapi.com/products/1', fetcher);

    return <div>

        {isLoading ?   <img style={{height:'200px'}} src ="https://www.ownerdirect.com/images/spinner.gif"  /> :null}
        
        {error ? <h1>OOPS!Check your internet</h1> :null}

        {data ? <div>
            <h1>{data.title}</h1>
            <h1>RS.{data.price}</h1>
            <img style={{height:'200px'}} src={data.image}/>
            <h3>{data.category}</h3>
            <h3>{data.description}</h3>
        </div> : null}

    </div>

}
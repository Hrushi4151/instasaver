import { NextResponse } from "next/server";

export async function POST(req,res){
    const body=await req.json();
    let token=body.token;
    console.log(token)
    console.log("token")
    const mres=await fetch(`https://app.publer.io/api/v1/job_status/${token}`,{
            credentials: 'include',
              mode: 'no-cors',
              method: "GET",
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
              },
            })
          const response =await mres.json();
      return NextResponse.json({"status":200,msg:response});

}
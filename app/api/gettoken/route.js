import { NextResponse } from "next/server";


export async function POST(req,res){
    const body=await req.json();
    let url=body.url;
    let requrl={"url": url, 
        "iphone": false}
    const mres=await fetch("https://app.publer.io/hooks/media",{
            credentials: 'include',
              mode: 'no-cors',
              method: "POST",
              headers: {
                Accept: "*/*",
                "Content-Type": "application/json",
                "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Origin":"https://publer.io",
                "Referer":"https://publer.io/"
              },
              body: JSON.stringify(requrl),
            })
          const response =await mres.json();
          console.log("11"+response)
          
      return NextResponse.json({"status":200,response});

}

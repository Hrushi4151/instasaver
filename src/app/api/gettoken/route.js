import { NextResponse } from "next/server";


export async function POST(req,res){
  const body=await req.json();
  let url=body.url;
  console.log(url)
        const myres = await fetch("https://v3.savevid.net/api/ajaxSearch", {
          credentials: 'include',
                  mode: 'no-cors',
                  method: "POST",
                  headers: {
                    Accept: "*/*",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
                    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                    "Origin":"https://saveig.app",
                    "Referer":"https://saveig.app/"
          },
          body: `q=${url}&t=media&lang=en`,
        });
        const response = await myres.json();
        console.log(response);
          
      return NextResponse.json({"status":200,response});

}

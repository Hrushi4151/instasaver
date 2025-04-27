// import { NextResponse } from "next/server";


// export async function POST(req,res){
//   const body=await req.json();
//   let url=body.url;
//   console.log(url)
//         const myres = await fetch("https://api.instasave.website/media", {
//           credentials: 'include',
//                   mode: 'no-cors',
//                   method: "POST",
//                   headers: {
//                     Accept: "*/*",
//                     "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
//                     "ACCESS-CONTROL-ALLOW-ORIGIN": "*" ,
//                     "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//                     "Origin":"https://saveig.app",
//                     "Referer":"https://saveig.app/"
//           },
//           body: `url=${url}&lang=en`,
//         });
//         const response = await myres.text();
//         console.log(response);
          
//       return NextResponse.json({"status":200,response});

// }




import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const url = body.url;

    const formData = new FormData();
    formData.append('q', url);
    formData.append('lang', 'en');

    const myres = await fetch("https://api.instasave.website/media", {
      method: "POST",
      headers: {
        "Accept": "*/*",
        "Origin": "https://saveig.app",
        "Referer": "https://saveig.app/"
      },
      body:  `url=${url}&lang=en`,
    });

    const response = await myres.text();
    // Original string with escaped backslashes

// Step 1: Replace backslashes
let cleanedResponse = response.replace(/\\/g, "");

// Step 2: Use regex to extract src attributes from img and a tags
let imgSrcRegex = /<img src="([^"]+)"/g;
let aHrefRegex = /<a  href="([^"]+)"/g;

let imgSrcs = [];
let aHrefs = [];

let match;
while ((match = imgSrcRegex.exec(cleanedResponse)) !== null) {
    imgSrcs.push(match[1]);
}

while ((match = aHrefRegex.exec(cleanedResponse)) !== null) {
    aHrefs.push(match[1]);
}

console.log("Image Sources:", imgSrcs);
console.log("Download Links:", aHrefs);
          
 return NextResponse.json({"status":200,"response":{"imgSrcs": imgSrcs, "aHrefs": aHrefs}});

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500,error });
  }
}

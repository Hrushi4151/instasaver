// import { NextResponse } from "next/server";


// export async function POST(req,res){
//   const body=await req.json();
//   let url=body.url;
//   console.log(url)
//         const myres = await fetch("https://v3.savevid.net/api/ajaxSearch", {
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
//           body: `q=${url}&t=media&lang=en`,
//         });
//         const response = await myres.json();
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

    const response = await myres.json();

    // const htmlContent = data.data;

    // // Extract thumbnail and download URL from HTML using regex
    // const thumbnailMatch = htmlContent.match(/<img[^>]*src="([^"]+)"[^>]*>/);
    // const downloadLinkMatch = htmlContent.match(/<a[^>]*href="([^"]+)"[^>]*class="[^"]*abutton[^"]*"[^>]*>/);

    // const thumbnail = thumbnailMatch ? thumbnailMatch[1] : null;
    // const download = downloadLinkMatch ? downloadLinkMatch[1] : null;

    // if (!thumbnail || !download) {
    //   return NextResponse.json({ error: "Failed to extract thumbnail or download URL." }, { status: 400 });
    // }

    console.log(response);
          
 return NextResponse.json({"status":200,"response":response});

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500,error });
  }
}

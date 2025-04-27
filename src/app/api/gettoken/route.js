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
  const body = await req.json();
  let url = body.url;

  console.log(url);

  const params = new URLSearchParams();
  params.append('q', url);
  params.append('t', 'media');
  params.append('lang', 'en');
  params.append('v', 'v2');
  params.append('cftoken', '0.ZfjLUwf12IwBmSuC584Q2AMglAsmhUMjzwxWYAVd5j6ZwYiSwv4fnOvIiAH-McFaIKi4nt-CQSZfuCAnxqq1q5r7P_82WxiUnEEYA13TyFyTDhfhLv_dkXXz5QIXl6-6XO3-KBdpRcH7ueAYtcHogbFY9K-cQl3tYLtngYZqc9nYUH5bZqWiFPZry8ZvfNA682aXMZzcL2xPEl4JZu23CHDgwVK3MbwTy3HU5OzOQT65alJSA2iCUVArXgXi-KY9Foq1Ek9Qil1mwHOduq9SkvKOPUtexq3UHKttbNjrJwQd177tufk2TClOQuZAXs8CU1u7DhtmgnZkrtMYEu8BYt53ofoDr--AGM9b4BpPXIRq9s8JB-s0vEPD1HoPYSyGIY2piUi5nVkqKlZBeXDH1UnMM7YHfpLLjUweevbTAXk-FGS_7WBfzlptZYrm4ULoPlpAeWH-p_9lWpVLi_wYCr_DhGw7600aWgG-B6X1qgVO9DV2OJovq3gOd6MpR4Fj71RqwtuY8De9X0xzVo5wMSfrDKqbIilRx-zIb5S84raoT0_ZSHHBE4ablY5iFfw7mAx1xcb_sRE9Qycl8F_hZgrU7NaoEKiPsuFkXqVYxOfgH5SVUOteZ0Mp3bQ0EauEgm1V1k0ZHbdwrifXOvJreZaLacL_sQa9cdOO5qMX1TlRaUCR2cIZvUH10PxTL8rEJGWBiwszpxtfBVuQcCunEM0ISriJejIOSdTmU7Ln8Q8SKXPrXItplHtX1LWY_8GV0TboCkB0iqNnoE09LHgpu8GX6OZjHxEnVuHBbdgggqI9ma3BndOTEzv9UJKdXN_hHTyW5mgpTfnCdOq0l7KsDMyTgahuWyeH-ORHoj84B0829-ZfGhmvivJta2JAGaU1.8nP2NTO8dQUVDWDnGbAtIg.558169b5daaf4ee89b53a6cbedc65025b2e629ee7d24e32c166212ac951a2d59');

  const myres = await fetch("https://v3.savevid.net/api/ajaxSearch", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Accept": "*/*",
      "Origin": "https://saveig.app",
      "Referer": "https://saveig.app/"
    },
    body: params.toString(),
  });

  const response = await myres.json();
  console.log(response);

  return NextResponse.json({ status: 200, response });
}

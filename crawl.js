function normalizeURL(urlSttring){
    let url = new URL(urlSttring)
    const hostpath = `${url.hostname}${url.pathname}`;
    console.log(hostpath)

    if(hostpath.length >0 && hostpath.slice(-1)==="/"){
        return hostpath.slice(0 ,-1)

    }
    return hostpath;
}

   
module.exports ={
    normalizeURL
}
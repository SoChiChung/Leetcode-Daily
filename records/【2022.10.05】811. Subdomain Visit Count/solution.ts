function subdomainVisits(cpdomains: string[]): string[] {
    let map=new Map<string,number>()
    let res=[]
    for(let i=0;i<cpdomains.length;i++)
        counttimes(map,cpdomains[i])
    for (const [key,value] of map.entries()){
        res.push(value+" "+key)
    }
    return res
};
function counttimes(map: Map<string, number>, website: string){
    let times = Number(website.split(" ")[0])
    let domainsStr = website.split(" ")[1].split(".").reverse()
    let suffix=domainsStr[0]
    domainsStr.reduce((pv: string, cv: string) => {
        let domain = cv + "." + pv
        if (map.has(domain))
            map.set(domain, times + map.get(domain))
        else
            map.set(domain, times)
        return domain
    })

    if(map.has(suffix))
        map.set(suffix, times + map.get(suffix))
    else map.set(suffix, times)
}
async function postPublicUrls(urls) {
    let res = await fetch("http://backend:4000/api/img/publicSign", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(urls)
    })
    if (!res.ok){
        console.log("error: ", res.status)
        return null
    }
    let result = await res.json();
    return result
}

const urls = [
    "vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg",
    "joseph-bobadilla-i3DxNe0ktZI-unsplash.jpg",
    "oswald-elsaboath-7EDZ1fxhgJQ-unsplash.jpg"
]

export async function load() {
    const imgUrls = await postPublicUrls(urls)
    return { surls: imgUrls.surls }
}
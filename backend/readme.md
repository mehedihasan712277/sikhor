### Carousel route

---

#### get data

request

```
https://sikhor-server0.vercel.app/carousel/668d63a883af5b237fec744d
```

response

```
{
    "id": "668d63a883af5b237fec744d",
    "imgUrls": [
        "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714469096/f0r8t5yjzwfr3p8h82l5.jpg",
        "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714470543/ulbfbstrmuw0krqcmue9.jpg"
    ]
}
```

#### update data

request url

```
https://sikhor-server0.vercel.app/carousel/update/668d63a883af5b237fec744d
```

request body (use patch method to request)

```
"imgUrls": [
    "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714469096/f0r8t5yjzwfr3p8h82l5.jpg",
    "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714470543/ulbfbstrmuw0krqcmue9.jpg",
    "https://res.cloudinary.com/dp4hpdqri/image/upload/v1719291001/bltuanpldeo4pnfecrul.jpg"
]
```

response

```
{
    "id": "668d63a883af5b237fec744d",
    "imgUrls": [
        "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714469096/f0r8t5yjzwfr3p8h82l5.jpg",
        "https://res.cloudinary.com/dp4hpdqri/image/upload/v1714470543/ulbfbstrmuw0krqcmue9.jpg",
        "https://res.cloudinary.com/dp4hpdqri/image/upload/v1719291001/bltuanpldeo4pnfecrul.jpg"
    ]
}
```

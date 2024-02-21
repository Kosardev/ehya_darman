const deployment = true;
export const SiteAddress = "http://beautifulmind.pw";
export const imageServer = "https://ehyadarman.com/image";
// export const redis_url = "redis://192.168.45.130:6379";
export const Uri = {
    shopServiceIP: "http://45.159.208.49:8000",
    loginServiceIP:SiteAddress+"/auth/login",
    ServiceIP: SiteAddress,
} as const;

export const Paths = {
    plp : "/list",
    pdp : "/product",
} as const;

import SignupPage from "@/app/(account)/signup/page";

const deployment = true;
export const SiteAddress = "http://87.107.105.66:8000";
export const imageServer = "https://ehyadarman.com/image";
// export const redis_url = "redis://192.168.45.130:6379";
export const Uri = {
    shopServiceIP: "http://87.107.105.66:8000",
    loginServiceIP:SiteAddress+"/auth/login",
    signupServiceIP:SiteAddress+"/auth/signup",
    contactFormIP:SiteAddress+"/general/registerRequest",
    contactUsIP:SiteAddress+"/general/contactUs",
    branchesIP:SiteAddress+"/general/branches",
    aboutIP:SiteAddress+"/general/aboutUs",
    ServiceIP: SiteAddress,
} as const;

export const Paths = {
    landing : "/",
    plp : "/list/",
    pdp : "/product/",
    login : "/login/",
    signup : "/signup/",
    contactUs : "/contactUs/",
    aboutUs : "/aboutUs/",
} as const;

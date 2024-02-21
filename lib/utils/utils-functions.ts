import { imageServer } from "@/environment";


const isBrowser = typeof window !== "undefined";
const isServer = typeof window === "undefined";

function getImageUrl(imageName: string) {
    return imageServer.concat(imageName);
}


export {
    isBrowser,
    isServer,
    getImageUrl,
};

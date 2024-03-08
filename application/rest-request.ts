import axios, { AxiosResponse, Method } from "axios";
import { IKeyValue } from "@/lib/interfaces";

function format(str: string, obj: object): string {
    if (obj) {
        Object.keys(obj).forEach((key) => {
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), obj[key as keyof object]);
        });
    }

    return str;
}

export default class RequestBuilder {
    constructor(method?: Method, baseUrl?: string, url?: string) {
        this.queryParams = [];
        this.headers = [];

        if (method) {
            this.method = method;
        }

        if (baseUrl) {
            this.baseUrl = baseUrl;
        }

        if (url) {
            this.url = url;
        }
    }

    private baseUrl: string = "";
    private url: string = "";

    private queryParams: IKeyValue[] = [];
    private headers: IKeyValue[] = [];
    private defaultHeader = <any>{
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    private body: any;
    private method: Method = "POST";

    private progressCallBack: ((progressEvent: any) => void) | undefined = undefined;

    addQueryParam(key: string, value: any): RequestBuilder {
        const stringValue = value.toString();
        this.queryParams?.push({ key, value: stringValue });
        return this;
    }

    addHeader(key: string, value: string): RequestBuilder {
        this.headers?.push({ key, value });
        return this;
    }

    setBaseUrl(url: string, args: {} = {}): RequestBuilder {
        this.baseUrl = format(url, args);
        return this;
    }

    setUrl(url: string, args: {} = {}): RequestBuilder {
        this.url = format(url, args);
        return this;
    }

    setBody(body: any): RequestBuilder {
        this.body = body;
        return this;
    }

    setMethod(method: Method): RequestBuilder {
        this.method = method;
        return this;
    }

    setProgressCallBack(method: (progressEvent: any) => void): RequestBuilder {
        this.progressCallBack = method;
        return this;
    }

    SetHeader(header: any): RequestBuilder {
        this.defaultHeader = header;
        return this;
    }

    async GetResultAsync(): Promise<any> {
        return (await this.ExecuteAsync()).data;
    }

    async ExecuteAsync<T>(): Promise<Promise<AxiosResponse<any>> | any> {
        let url = new URL(this.url, this.baseUrl).toString();

        if (this.queryParams?.length) {
            url += "?";

            this.queryParams.forEach((item) => {
                url += `${encodeURI(item.key)}=${encodeURI(item.value)}&`;
            });
        }

        this.headers.forEach((item) => {
            this.defaultHeader[item.key] = item.value;
        });

        try {
            const result = await axios({
                method: this.method,
                headers: this.defaultHeader,
                withCredentials: true,
                url,
                data: this.body,
                onUploadProgress: this.progressCallBack,
            });
            return result;
        }catch (err){
            console.log(err)
        }


    }
}

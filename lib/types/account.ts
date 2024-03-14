import { Scalars} from "@/lib/types/mainService";

export type TLogin ={
    username: Scalars["String"],
    password: Scalars["String"]
}
export type signUp ={
    firstName: Scalars["String"],
    lastName: Scalars["String"],
    phone: Scalars["String"],
    email: Scalars["String"],
    password: Scalars["String"]
}
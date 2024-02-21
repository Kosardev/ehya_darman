import {Maybe, Scalars} from "@/lib/types/mainService";

export type menuItem ={
    item: Maybe<Scalars["String"]>,
    link: Maybe<Scalars["String"]>,
    children: Maybe<Array<menuItem>>,
    _id: Maybe<Scalars["ObjectID"]>,
}
export type HeaderT = {
    _id:Maybe<Scalars["ObjectID"]>,
    locale:Maybe<Scalars["String"]>,
    items: Maybe<Array<menuItem>>,
    createdAt:Maybe<Scalars["DateTime"]>,
    updatedAt:Maybe<Scalars["DateTime"]>,
    __v:Maybe<Scalars["Int"]>,
}
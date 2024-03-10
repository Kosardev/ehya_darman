import { Maybe, Scalars} from "@/lib/types/mainService";
export type aboutUsItem = {
    image?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    subTitle?: Maybe<Scalars["String"]>;
    text?: Maybe<Scalars["String"]>;
    items?: Maybe<Array<Scalars["String"]>>;
}
export type AboutUsType = {
    _id?: Maybe<Scalars["ObjectID"]>;
    banner?: aboutUsItem;
    aboutUs?:aboutUsItem;
    history?:aboutUsItem;
    vision?:aboutUsItem;
    locale?: Maybe<Scalars["String"]>;
    createdAt?:Maybe<Scalars["String"]>;
    updatedAt?:Maybe<Scalars["String"]>;
}
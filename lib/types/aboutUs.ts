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
    section_1?: aboutUsItem;
    section_2?: aboutUsItem;
    section_3?: aboutUsItem;
    locale?: Maybe<Scalars["String"]>;
    createdAt?:Maybe<Scalars["String"]>;
    updatedAt?:Maybe<Scalars["String"]>;
}
import { Maybe, Scalars} from "@/lib/types/mainService";
import {footerLinkItem} from "@/lib/types/footer";

export type bannerItem = {
    image?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    subTitle?: Maybe<Scalars["String"]>;
}
export type branchCityItem = {
    code?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
};
export type branchItem = {
    title?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    city?: Maybe<Scalars["String"]>;
    cityCode?: Maybe<Scalars["String"]>;
    address?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
    mobile?: Maybe<Scalars["String"]>;
    fax?: Maybe<Scalars["String"]>;
    website?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["String"]>;
    isDefault?: Maybe<Scalars["Boolean"]>;
    socialMedias?:footerLinkItem[],
    // province?:branchCityItem
    // city?:branchCityItem
}
export type ContactUsType = {
    _id?: Maybe<Scalars["ObjectID"]>;
    formImage?: Maybe<Scalars["String"]>;
    banner?: bannerItem;
    branches?: Maybe<Array<Maybe<branchItem>>>;
};
export type CitiesAndBranches = {
    cities: Maybe<Array<Maybe<branchCityItem>>>;
    branches: Maybe<Array<Maybe<branchCityItem>>>;
};
export type contactForm = {
    fullName: Scalars["String"]
    phone: Scalars["String"]
    email: Scalars["String"]
    companyName: Scalars["String"]
    description: Scalars["String"]
};
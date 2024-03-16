// import {getProductPage} from "@/application/product";
import CatalogueComponent from "@/components/catalogues/catalogueComponent";

export default async function CatalogueContent({ code }:{code: string}) {
    // const data = await getProductPage({code})

    const data = {
        intro:{
            title:"طراحی شده برای متفاوت بودن. تنظیماتی را که متناسب با نیازهای شما باشد انتخاب کنید",
            description:"دستکاه های فوق العاده دقیق و با کارایی بالا که جدیدترین تکنولوژی ها را با خود به همراه دارند و از سمت تمامی خدمات و پشتیبانی ها از این شرکا به دوستان و مستریان عزیز ارائه می شود.",
            images:["/img/catalogue1.png","http://87.107.105.66/docs/products/EPC-2/pictures/default.png","http://87.107.105.66/docs/products/EPC-4/pictures/default.png"]
        },
        figures:[
            {
                title:"طراحی شده برای متفاوت بودن. تنظیماتی را که متناسب با نیازهای شما باشد انتخاب کنید",
                description:"دستگاه با قابلیت تنظیم فوق اعاده به هر سایز که بخواهید می توانید فرم بدهید و یک محصول فوق ااعاده با کاربری ساده و بسیار آسان از خدمات دستگاه استفاده نمایید.",
                link:{
                    title:"راه حل های حمل و نقل و ذخیره سازی (PDF)",
                    url:"#"
                },
                image:"/img/catalogue2.png"
            },
            {
                title:"داده ها برای تصویر بزرگ. راه حل های اتصال جامع برای PDMS، مانیتورینگ و EMS",
                description:"این کاربری جدید کمک می کند تا در شرایط مختلف برای از مانیتورهای متفاوت استفاده کنید و بتوان نتیجه را به بهترین شگل مشاهده کرد و نمایش داد.",
                image:"/img/catalogue3.png"
            },
        ],
        goals:[
            {
                title:"با ما در این اهداف شریک باشید",
                description:"آنها همیشه در پاسخ به سوالات متعدد ما بسیار مفید و کارآمد هستند و فقط یک تیم عالی برای کار با آنها هستند.",
                image:"http://87.107.105.66/docs/products/EPC-3/pictures/smallImage.png",
                link:{
                    title:"مشاهده محصولات",
                    url:"#"
                },
            },{
                title:"با ما در این اهداف شریک باشید",
                description:"آنها همیشه در پاسخ به سوالات متعدد ما بسیار مفید و کارآمد هستند و فقط یک تیم عالی برای کار با آنها هستند.",
                image:"http://87.107.105.66/docs/products/EPC-3/pictures/smallImage.png",
                link:{
                    title:"مشاهده محصولات",
                    url:"#"
                },
            }
        ]
    }
    return (
        <>
            <CatalogueComponent data={data}/>
        </>
    )
}

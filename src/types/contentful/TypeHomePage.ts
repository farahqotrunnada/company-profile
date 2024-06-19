import type { Entry, EntryFields } from "contentful";
import { TypeProductFields } from './TypeProduct';
import { TypeTestimonialFields } from './TypeTestimonial';



export interface TypeHomePageFields {
    contentTypeId: "homePage";
    fields: {
        heroTitle: EntryFields.Symbol;
        heroSubtitle: EntryFields.Symbol;
        companyOverview: EntryFields.Text;
        products: Entry<TypeProductFields>[];
        testimonials: Entry<TypeTestimonialFields>[];
    }
}

export type TypeHomePage = Entry<TypeHomePageFields>;

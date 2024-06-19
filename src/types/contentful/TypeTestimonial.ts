import type { Entry, EntryFields } from "contentful";

export interface TypeTestimonialFields {
    contentTypeId: "testimonial";
    fields: {
        quote: EntryFields.Text;
        author: EntryFields.Symbol;
    }
}

export type TypeTestimonial = Entry<TypeTestimonialFields>;

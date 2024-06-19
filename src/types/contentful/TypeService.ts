import type { Entry, EntryFields } from "contentful";

export interface TypeServiceFields {
    contentTypeId: "service";
    fields: {
        title: EntryFields.Symbol;
        description: EntryFields.Text;
        pricing: EntryFields.Text;
    }
}

export type TypeService = Entry<TypeServiceFields>;

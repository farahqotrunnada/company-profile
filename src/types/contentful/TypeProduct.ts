import type { Asset,Entry, EntryFields } from "contentful";

export interface TypeProductFields {
    contentTypeId: "product";
    fields: {
        title: EntryFields.Symbol;
        price: EntryFields.Text;
        description: EntryFields.Text;
        productImage: Asset;
    }
}

export type TypeProduct = Entry<TypeProductFields>;

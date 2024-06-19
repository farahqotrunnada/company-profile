import type { Asset,Entry, EntryFields } from "contentful";

export interface TypeHeroFields {
    contentTypeId: "hero";
    fields: {
        title: EntryFields.Symbol;
        description: EntryFields.Text;
        heroImage: Asset;
    }
}

export type TypeHero = Entry<TypeHeroFields>;
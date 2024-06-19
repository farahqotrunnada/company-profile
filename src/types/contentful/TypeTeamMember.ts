import type { Entry, EntryFields } from "contentful";

export interface TypeTeamMemberFields {
    contentTypeId: "teamMember";
    fields: {
        name: EntryFields.Symbol;
        title: EntryFields.Text;
        description: EntryFields.Text;
    }
}

export type TypeTeamMember = Entry<TypeTeamMemberFields>;

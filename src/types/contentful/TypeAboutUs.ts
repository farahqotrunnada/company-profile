import type { Entry, EntryFields } from "contentful";
import { TypeTeamMemberFields } from './TypeTeamMember';


export interface TypeAboutUsFields {
    contentTypeId: "aboutUs";
    fields: {
        history: EntryFields.Text;
        teamMembers?: Entry<TypeTeamMemberFields>[];
        culture: EntryFields.Text;
    }

}

export type TypeAboutUs = Entry<TypeAboutUsFields>;

import { globalSettingsSchema } from "./globalSettings";
import { eventSchema } from "./event";
import { galleryItemSchema } from "./galleryItem";
import { pageSchema } from "./page";
import { partnerSchema, teamMemberSchema, testimonialSchema } from "./people";
import { programSchema } from "./program";

export const schemaTypes = [
  globalSettingsSchema,
  pageSchema,
  programSchema,
  eventSchema,
  galleryItemSchema,
  teamMemberSchema,
  partnerSchema,
  testimonialSchema,
];

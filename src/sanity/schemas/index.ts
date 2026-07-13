import { globalSettingsSchema } from "./globalSettings";
import { eventSchema } from "./event";
import { galleryItemSchema } from "./galleryItem";
import { pageSchema } from "./page";
import { partnerSchema, teamMemberSchema, testimonialSchema } from "./people";
import { postSchema } from "./post";
import { programSchema } from "./program";
import { homeSectionSchemas } from "./homeSections";

export const schemaTypes = [
  globalSettingsSchema,
  pageSchema,
  programSchema,
  eventSchema,
  postSchema,
  galleryItemSchema,
  teamMemberSchema,
  partnerSchema,
  testimonialSchema,
  ...homeSectionSchemas,
];

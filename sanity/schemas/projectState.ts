import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectState",
  title: "ProjectState",
  type: "document",
  fields: [
    defineField({
      name: "projectState",
      title: "ProjectState",
      type: "string",
    }),
  ],
});

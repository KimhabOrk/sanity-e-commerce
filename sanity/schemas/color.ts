import { defineField, defineType } from "sanity";

export default defineType({
  name: "color",
  title: "Color",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Color Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hex",
      title: "Hex Color Code",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(/^#[0-9A-F]{6}$/i, "Invalid hex color"),
    }),
  ],
});

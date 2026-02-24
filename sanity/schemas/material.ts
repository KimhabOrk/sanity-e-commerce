import { defineField, defineType } from "sanity";

export default defineType({
  name: "material",
  title: "Material",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Material Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "composition",
      title: "Fabric Composition",
      type: "string",
      description: "e.g., 100% Silk, 80% Cotton 20% Polyester",
    }),
    defineField({
      name: "careInstructions",
      title: "Care Instructions",
      type: "text",
    }),
  ],
});

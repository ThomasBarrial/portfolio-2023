import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import projects from "./schemas/projects";
import projectState from "./schemas/projectState";
import techno from "./schemas/techno";
import socialMedia from "./schemas/socialMedia";
import services from "./schemas/services";

const schemas: SchemaTypeDefinition[] = [
  post,
  author,
  category,
  blockContent,
  projects,
  projectState,
  techno,
  services,
  socialMedia,
];

export default schemas;

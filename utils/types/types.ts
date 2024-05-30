import { Slug } from "sanity";

export interface Project {
  _type: "project";
  _id: string;
  slug: Slug;
  name: string;
  link: string;
  categories: Category[];
  mainImage: SanityImage;
  description: string;
  date: string;
  projectState: ProjectState;
  techno: Techno[];
  gallery: SanityImage[];
  //   gallery: Array<
  //     SanityKeyed<{
  //       _type: "image";
  //       asset: SanityReference<SanityImageAsset>;
  //       crop?: SanityImageCrop;
  //       hotspot?: SanityImageHotspot;
  //     }>
  //   >;
}

export interface Category {
  _type: "category";
  title: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _id: string;
}

export interface SanityImage {
  _type: "image";
  alt: string;
  asset: {
    _type: "reference";
    _ref: string;
  };
}

export interface ProjectState {
  _createdAt: Date;
  _rev: string;
  _type: "projectState";
  _id: string;
  _updatedAt: Date;
  projectState: string;
}

export interface Techno {
  title: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: "techno";
  _id: string;
}

export interface SocialMedia {
  _type: "socialMedia";
  name: string;
  link: string;
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _id: string;
}

export interface IServices {
  _type: "services";
  name: string;
  description: string;
}

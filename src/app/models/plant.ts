export class Plant {
  id: number
  common_name: string
  slug: string
  scientific_name: string
  year: string
  genus: string
  family: string
  image_url: string

  constructor(id: number, common_name: string, slug: string, scientific_name: string, year: string, genus: string, family: string, image_url: string) {
    this.id = id;
    this.common_name = common_name;
    this.slug = slug;
    this.scientific_name = scientific_name;
    this.year = year;
    this.genus = genus;
    this.family = family;
    this.image_url = image_url
  }
}

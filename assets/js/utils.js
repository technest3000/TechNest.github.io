class Employee {
    constructor(name, imageUrl, jobTitle, about, socialLinks) {
      this.name = name;
      this.imageUrl = imageUrl;
      this.jobTitle = jobTitle;
      this.about = about;
      this.socialLinks = socialLinks;
    }
  
    static fromJson(json) {
      const name = json.name;
      const imageUrl = json.imageUrl;
      const jobTitle = json.jobTitle;
      const about = json.about;
      const socialLinks = json.socialLinks;
      return new Employee(name,imageUrl, jobTitle, about, socialLinks);
    }
  
    get imageUrl() {
      return this._imageUrl;
    }
  
    set imageUrl(imageUrl) {
      this._imageUrl = imageUrl;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    get jobTitle() {
      return this._jobTitle;
    }
  
    set jobTitle(jobTitle) {
      this._jobTitle = jobTitle;
    }
  
    get about() {
      return this._about;
    }
  
    set about(about) {
      this._about = about;
    }
  
    get socialLinks() {
      return this._socialLinks;
    }
  
    set socialLinks(socialLinks) {
      this._socialLinks = socialLinks;
    }
  
    getSocialLink(platform) {
      return this.socialLinks[platform];
    }
  
    setSocialLink(platform, url) {
      this.socialLinks[platform] = url;
    }
  }

class Product {
  constructor(id, images, title, subtitle, price, brand, rating, link, type) {
    this.id = id;
    this.images = images;
    this.title = title;
    this.subtitle = subtitle;
    this.price = price
    this.brand = brand;
    this.rating = rating
    this.link = link
    this.type = type;
  }

  static fromJson(json) {
    const id = json.id;
    const images = json.images;
    const title = json.title;
    const subtitle = json.subtitle;
    const price = json.price;
    const brand = json.brand;
    const rating = json.rating;
    const link = json.link;
    const type = json.type;
    return new Product(id, images, title, subtitle, price, brand,rating, link, type);
  }
}

// Export
export { Employee, Product };
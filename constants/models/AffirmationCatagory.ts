export interface AffirmationCatagory {
  id: string;
  title: string;
  data: GallaryPriviewData[];
}

export interface GallaryPriviewData {
  id: number;
  text: string;
  image: any;
}

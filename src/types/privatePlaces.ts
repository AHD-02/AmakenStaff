

export interface IPrivatePlaceResponse extends IPrivatePlace {
  placeId: string;
  addedOn: string;
  status: string;
  userEmail: string;
}

export interface IPrivatePlace {
  registerNumber: string;
  placeName: string;
  images: string[];
  description: string;
  longitude: number | null;
  latitude: number | null;
  availableFrom: string;
  availableTo: string;
  categoryId: number;
}

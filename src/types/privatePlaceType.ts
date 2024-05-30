export interface PrivatePlaceResponse {
  numberOfRates: number;
  averageScore: number;
  place: IPrivatePlace;
}

export interface IPrivatePlace {
  placeId?: string;
  registerNumber?: string;
  placeName?: string;
  description?: string;
  userEmail?: string;
  status: string;
  addedOn: Date;
  images: string[];
  imageOfOwnerID: string;
  imageOfOwnershipProof: string;
  categoryID: string;
  longitude: number;
  latitude: number;
  availableFrom: Date;
  availableTo: Date;
}

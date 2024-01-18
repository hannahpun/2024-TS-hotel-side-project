import { AmenityInfoModel } from "./AmenityInfoModel";
import { FacilityInfoModel } from "./FacilityInfoModel";

export type RoomModel = {
    name: string;
    description: string;
    imageUrl: string;
    imageUrlList: string[];
    areaInfo: string;
    bedInfo: string;
    maxPeople: number;
    price: number;
    status: number;
    facilityInfo: FacilityInfoModel[],
    amenityInfo: AmenityInfoModel[],
    _id: string;
    createdAt: string;
    updatedAt: string;
}
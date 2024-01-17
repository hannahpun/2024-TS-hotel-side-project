import room21 from "@assets/images/pc/room2-1.png";
import room22 from "@assets/images/pc/room2-2.png";
import room23 from "@assets/images/pc/room2-3.png";
import room24 from "@assets/images/pc/room2-4.png";
import room25 from "@assets/images/pc/room2-5.png";

import room31 from "@assets/images/pc/room3-1.png";
import room32 from "@assets/images/pc/room3-2.png";
import room33 from "@assets/images/pc/room3-3.png";
import room34 from "@assets/images/pc/room3-4.png";
import room35 from "@assets/images/pc/room3-5.png";

import room41 from "@assets/images/pc/room4-1.png";
import room42 from "@assets/images/pc/room4-2.png";
import room43 from "@assets/images/pc/room4-3.png";
import room44 from "@assets/images/pc/room4-4.png";
import room45 from "@assets/images/pc/room4-5.png";
import { RoomModel } from "./RoomModel";

export function mockRoomData(): RoomModel[] {
    return [
        {
            name: "尊爵雙人房",
            description: "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
            imageUrl: "https://fakeimg.pl/300/",
            imageUrlList: [
                room21,
                room22,
                room23,
                room24,
                room25,
            ],
            areaInfo: "24坪",
            bedInfo: "一張大床",
            maxPeople: 4,
            price: 10000,
            status: 1,
            facilityInfo: [
                {
                    title: "平面電視",
                    isProvide: true
                }
            ],
            amenityInfo: [
                {
                    title: "衛生紙",
                    isProvide: true
                }
            ],
            _id: "653e4661336cdccc752127a0",
            createdAt: "2023-10-29T11:47:45.641Z",
            updatedAt: "2023-10-29T11:47:45.641Z"
        },
        {
            name: "景觀雙人房",
            description: "景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。",
            imageUrl: "https://fakeimg.pl/300/",
            imageUrlList: [
                room31,
                room32,
                room33,
                room34,
                room35,
            ],
            areaInfo: "28坪",
            bedInfo: "一張大床",
            maxPeople: 4,
            price: 10000,
            status: 1,
            facilityInfo: [
                {
                    title: "平面電視",
                    isProvide: true
                }
            ],
            amenityInfo: [
                {
                    title: "衛生紙",
                    isProvide: true
                }
            ],
            _id: "653e4661336cdccc752127a0",
            createdAt: "2023-10-29T11:47:45.641Z",
            updatedAt: "2023-10-29T11:47:45.641Z"
        },
        {
            name: "尊爵雙人房",
            description: "享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。",
            imageUrl: "https://fakeimg.pl/300/",
            imageUrlList: [
                room41,
                room42,
                room43,
                room44,
                room45,
            ],
            areaInfo: "36坪",
            bedInfo: "兩張大床",
            maxPeople: 4,
            price: 10000,
            status: 1,
            facilityInfo: [
                {
                    title: "平面電視",
                    isProvide: true
                }
            ],
            amenityInfo: [
                {
                    title: "衛生紙",
                    isProvide: true
                }
            ],
            _id: "653e4661336cdccc752127a0",
            createdAt: "2023-10-29T11:47:45.641Z",
            updatedAt: "2023-10-29T11:47:45.641Z"
        }
    ];
}
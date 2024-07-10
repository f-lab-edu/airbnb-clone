function getRandomCoordinate(centerLat, centerLng, radiusInMeters) {
    const earthRadius = 6371000 // 지구 반지름 (미터)
    const randomDistance = Math.random() * radiusInMeters
    const randomAngle = Math.random() * 2 * Math.PI

    const latOffset = (randomDistance * Math.sin(randomAngle)) / earthRadius
    const lngOffset =
        (randomDistance * Math.cos(randomAngle)) /
        (earthRadius * Math.cos((centerLat * Math.PI) / 180))

    return {
        lat: centerLat + (latOffset * 180) / Math.PI,
        lng: centerLng + (lngOffset * 180) / Math.PI,
    }
}

const centerLat = 37.566826
const centerLng = 126.9786567
const radiusInMeters = 400

export const mockListings = Array.from({ length: 100 }, (_, index) => {
    const coordinate = getRandomCoordinate(centerLat, centerLng, radiusInMeters)
    return {
        id: `listing_${index + 1}`,
        name: `서울 시내 숙소 ${index + 1}`,
        images: [
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a8/0f/73/easyhotel-london-city.jpg?w=1400&h=-1&s=1',
        ],
        address: `서울특별시 중구 세종대로 ${index + 1}길`,
        city: '서울',
        state: '서울특별시',
        // zip 코드 5자리 랜덤 숫자
        zipcode: Array.from({ length: 5 }, () =>
            Math.floor(Math.random() * 10)
        ).join(''),
        lat: coordinate.lat,
        lng: coordinate.lng,
        bedroom_count: Math.floor(1 + Math.random() * 3), // maximum 4
        bathroom_count: Math.floor(1 + Math.random() * 2), // maximum 3
        bed_count: Math.floor(1 + Math.random() * 4), // maximum 5
        person_capacity: Math.floor(2 + Math.random() * 6), // maximum 8
        rating: (4 + Math.random()).toFixed(2), // maximum 5
        review_count: Math.floor(10 + Math.random() * 190),
        room_type: ['AllTypes', 'Room', 'EntirePlace'][
            Math.floor(Math.random() * 3)
        ],
        property_type: ['Apartment', 'House', 'GuestHouse', 'Hotel'][
            Math.floor(Math.random() * 4)
        ],
        price: Math.floor(50000 + Math.random() * 200000),

        amenities: [
            'waterfront', // 해변
            'wifi', // 와이파이
            'washer', // 세탁기
            'airConditioning', // 에어컨
            'kitchen', // 주방
            'freeParking', // 무료 주차
            'essentials', // 필수품목
            'dryer', // 건조기
            'heating', // 난방
            'dedicatedWorkspace', // 전용 작업 공간
            'tv', // TV
            'hairDryer', // 헤어드라이어
            'iron', // 다리미
        ]
            .sort(() => 0.5 - Math.random())
            .slice(0, Math.floor(3 + Math.random() * 5)),
        cancelPolicy: ['Flexible', 'Moderate', 'Strict'][
            Math.floor(Math.random() * 3)
        ],
    }
})

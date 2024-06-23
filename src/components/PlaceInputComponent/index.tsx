import React from 'react'
import Image from 'next/image'
const searchWithLocation = [
    { text: '유연한 검색', icon: 'location' },
    {
        text: '유럽',
        icon: 'europe',
    },
    {
        text: '일본',
        icon: 'japan',
    },
    {
        text: '동남아시아',
        icon: 'southeast-asia',
    },
]

const DOMESTIC_CITIES = {
    seoul: '서울',
    busan: '부산',
    sokcho: '속초',
    gangneung: '강릉',
    jeonju: '전주',
    daegu: '대구',
    gyeongju: '경주',
    yeosu: '여수',
    seogwipo: '서귀포',
    daejeon: '대전',
    jeju: '제주도',
    incheon: '인천',
} as const

type CITY_KEY = keyof typeof DOMESTIC_CITIES
export default function PlaceInputComponent() {
    return (
        <div className="popover overflow-hidden rounded-xl px-3">
            <h4>지역으로 검색하기</h4>
            <div className="grid grid-cols-card-grid gap-2">
                {searchWithLocation.map((item, index) => (
                    <button key={index} className="card">
                        <div className="card-icon s">
                            <Image
                                src={`/icons/${item.icon}.png`}
                                alt={item.text}
                                width={81}
                                height={81}
                                className="border-solid border-2 border-gray-300 rounded-2xl"
                            />
                        </div>
                        <div className="card-text">{item.text}</div>
                    </button>
                ))}
            </div>

            <h4>한국</h4>
            <div className=" grid grid-cols-card-grid gap-3">
                {(Object.keys(DOMESTIC_CITIES) as CITY_KEY[]).map(
                    (cityKey, idx) => (
                        <div
                            key={cityKey}
                            className="relative border border-solid border-gray-400 rounded-xl px-5 py-1 text-center cursor-pointer"
                        >
                            <button className=" w-full">
                                {DOMESTIC_CITIES[cityKey]}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import { Carousel } from '@/components/ui/Carousel/Carousel'

export const CategoryBar = () => {
    //TODO : icon과 title을 매칭하여 같이 렌더링 해줘야 한다.
    const categoryIconDir = path.join(process.cwd(), '/public/category_icons')
    const categoryIcons = fs.readdirSync(categoryIconDir)

    return (
        <Carousel>
            {categoryIcons.map((icon, idx) => (
                <Image
                    key={idx}
                    src={`/category_icons/${icon}`}
                    width={48}
                    height={48}
                    alt={icon}
                />
            ))}
        </Carousel>
    )
}
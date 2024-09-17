import { tabs } from "@/data"
import { PriceCard } from "./PriceCard"
import { Tabs } from "./ui/Tabs"
import { PiArrowBendLeftDownBold } from "react-icons/pi"
import { useState } from "react"

const PriceSection = ({ 
    packets 
}: {
    packets: { 
        title: string, 
        price: number, 
        list: { 
            title: string, check: boolean 
        }[] 
    }[]
}) => {
    const [ tabActive, setTabActive ] = useState<string>(tabs[0].value)

    return (
        <div>
            <div className="relative w-fit mx-auto">
                <Tabs tabs={tabs} setOutsideActive={setTabActive} />
                <PiArrowBendLeftDownBold className="absolute -bottom-8 -right-4 text-logo text-3xl rotate-[150deg]" />
                <p className="absolute -bottom-12 right-0 text-logo text-3xl font-bold rotate-12">-16%</p>
            </div>
            <div className="flex justify-center gap-5 flex-wrap mt-16">
                {packets.map((packet, index) => (
                    <PriceCard product={packet} height={index == 2 ? "lg:h-[31rem]" : undefined} mostSold={index == 3 ? true : false} alternative={index == 2 ? true : false} period={tabActive} />
                ))}
            </div>
        </div>
    )
}

export default PriceSection
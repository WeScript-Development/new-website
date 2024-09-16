import { tabs } from "@/data"
import { PriceCard } from "./PriceCard"
import { Tabs } from "./ui/Tabs"
import { PiArrowBendLeftDownBold } from "react-icons/pi"

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
    return (
        <div>
            <div className="relative w-fit mx-auto">
                <Tabs tabs={tabs} />
                <PiArrowBendLeftDownBold className="absolute -bottom-8 -right-4 text-logo text-3xl rotate-[150deg]" />
                <p className="absolute -bottom-12 right-0 text-logo text-3xl font-bold rotate-12">-16%</p>
            </div>
            <div className="flex justify-center gap-5 flex-wrap mt-16">
                {packets.map((packet) => (
                    <PriceCard product={packet} />
                ))}
            </div>
        </div>
    )
}

export default PriceSection
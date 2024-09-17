"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";
import { FaCheck, FaX, FaStar, FaPaperPlane } from "react-icons/fa6";
import MagicButton from "./MagicButton";

export function PriceCard({ 
  product,
  height,
  mostSold,
  alternative,
  period,
}: { 
  product: { 
    title: string;
    price: number;
    list: {
      title: string;
      check: boolean;
    } [];
  };
  height?: string;
  mostSold: boolean;
  alternative: boolean;
  period: string;
}) {
  return (
    <CardContainer className="inter-var max-w-sm">
      <CardBody className={`relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/15 ${alternative ? 'bg-logo' : 'bg-[#04071d]'} w-auto sm:w-[30rem] h-fit ${height || 'lg:h-[28rem]'} rounded-xl p-6 border m-0`}>
        {mostSold && (
          <CardItem translateZ="60" rotateZ={20} className="absolute z-40 -top-5 -right-5">
            <FaStar size={64} color="#4287f5" className="" />
          </CardItem>
        )}
        <CardItem
          translateZ="50"
          className="text-3xl font-bold w-full text-center"
        >
          {product.title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4 font-extrabold text-5xl text-center">
          {period === "monthly" ? (<>
            €<span className={`${!alternative && 'text-logo'}`}>{product.price}</span><span className="text-lg">/ maand</span>
          </>) : (<>
            €<span className={`${!alternative && 'text-logo'}`}>{product.price*10}</span><span className="text-lg">/ jaar</span>
          </>)}
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4 text-center">
          <ul>
            {product.list.map((item) => (
              <li className="flex text-xl text-start">
                {item.check ? <FaCheck color="#42f542" /> : <FaX color="#f54242" />}
                <span className="my-auto ml-2">{item.title}</span>
              </li>
            ))}
          </ul>
        </CardItem>
        <CardItem translateZ={60} className="md:absolute bottom-2 right-2">
            <MagicButton title="Contact" icon={<FaPaperPlane />} position="right" />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

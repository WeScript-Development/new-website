"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";
import Link from "next/link";
import { intranetIntranet } from "@/data";
import { FaCheck, FaX } from "react-icons/fa6";

export function PriceCard({ 
  product 
}: { 
  product: { 
    title: string,
    price: number,
    list: {
      title: string,
      check: boolean,
    } [],
  } 
}) {
  return (
    <CardContainer className="inter-var max-w-sm">
      <CardBody className="relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] border-white/15 bg-[#04071d] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border m-0">
        <CardItem
          translateZ="50"
          className="text-3xl font-bold text-neutral-600 dark:text-white w-full text-center"
        >
          {product.title}
        </CardItem>
        {/* <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Het intra
        </CardItem> */}
        <CardItem translateZ="100" className="w-full mt-4 font-extrabold text-5xl text-center">
          €<span className="text-logo">{product.price}</span><span className="text-lg">/ maand</span>
        </CardItem>
        <CardItem translateZ="50" className="w-full mt-4 text-center">
          <ul>
            {product.list.map((item) => (
              <li className="flex text-xl text-start">
                {item.check ? <FaCheck color="green" /> : <FaX color="red" />}
                <span className="my-auto ml-2">{item.title}</span>
              </li>
            ))}
          </ul>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

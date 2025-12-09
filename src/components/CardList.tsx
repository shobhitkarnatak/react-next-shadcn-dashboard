import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Badge } from "./ui/badge";

interface CardListProps {
  title: string;
}

const popularContent = [
  { id: 1, title: "Understanding React Hooks", badge:"Development", views: 1500 },
  { id: 2, title: "JavaScript ES6 Features", badge:"Development", views: 1200 },
  { id: 3, title: "CSS Grid vs Flexbox", badge:"Development", views: 900 },
  { id: 4, title: "TypeScript Basics", badge:"Development", views: 800 },
];

const latestTransaction = [
  { id: 1, title: "Subscription Renewal", badge:"John Doe", views: 1400 },
  { id: 2, title: "Payment for Services", badge:"John Doe", views: 2100 },
  { id: 3, title: "Payment for Services", badge:"John Doe", views: 2500 },
  { id: 4, title: "Subscription Renewal", badge:"John Doe", views: 1400 },
];

const CardList = (props: CardListProps) => {
  const list =
    props.title === "Popular Content" ? popularContent : latestTransaction;

  return (
    <div className="">
      <div className="text-lg font-medium mb-6">{props.title}</div>
      <div className="flex flex-col gap-2">
        {list.map((item: any) => (
          <Card
            key={item.id}
            className="flex-row items-center justify-between gap-4 px-4"
          >
            <div className="w-10 h-10 rounded-sm relative overflow-hidden">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                ></AvatarImage>
              </Avatar>
            </div>
            <div className="flex justify-between flex-1">
            <CardContent>
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
             <Badge variant="secondary" className="text-xs mt-1">{item.badge}</Badge>
            </CardContent>
            <CardFooter className="text-sm">{item?.views / 1000}K</CardFooter>
          </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CardList;

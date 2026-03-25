import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/10 dark:bg-black dark:border-white/20 border-black/10 w-full h-full min-h-[450px] rounded-xl p-6 border flex flex-col justify-between">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {study.title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
          >
            {study.description}
          </CardItem>

          <CardItem
            translateZ="100"
            rotateX={10}
            rotateZ={-10}
            className="w-full mt-4"
          >
            <Image
              src={study.image}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt={study.title}
            />
          </CardItem>
        </div>

        <div className="flex justify-between items-center mt-8">
          <Link href={study.href} passHref>
            <CardItem
              translateZ={20}
              translateX={-10}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white text-2xl"
            >
              See case study →
            </CardItem>
          </Link>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Register
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

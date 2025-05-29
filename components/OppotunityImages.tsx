'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { DialogTitle } from '@radix-ui/react-dialog'

export default function OpportunityImages({ opportunity }: { opportunity: any }) {
  const [open, setOpen] = useState(false)
  const [startIndex, setStartIndex] = useState(0)

  const handleImageClick = (index: number) => {
    setStartIndex(index)
    setOpen(true)
  }

  const imagesToShow = opportunity.images.slice(0, 5)
  const showMore = opportunity.images.length > 5

  return (
    <>
      <div className="hidden md:flex flex-col lg:flex-row gap-4 mb-8 px-4 sm:px-8 md:px-16">
        <div
          className="w-full lg:w-1/2 h-[300px] sm:h-[400px] relative overflow-hidden shadow-md rounded-lg lg:rounded-l-3xl lg:rounded-r-none cursor-pointer"
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={opportunity.images[0]}
            alt={`${opportunity.name} main image`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg lg:rounded-l-3xl lg:rounded-r-none"
          />
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 grid-rows-2 gap-4">
          {imagesToShow.slice(1, 5).map((image: string, index: number) => {
            const globalIndex = index + 1
            const roundingClass =
              index === 1 ? 'lg:rounded-tr-3xl' : index === 3 ? 'lg:rounded-br-3xl' : ''
            const isLastVisible = index === 3 && showMore

            return (
              <div
                key={index}
                className={`relative w-full h-36 sm:h-48 overflow-hidden shadow-md rounded-lg lg:rounded-none ${roundingClass} cursor-pointer`}
                onClick={() => handleImageClick(globalIndex)}
              >
                <Image
                  src={image}
                  alt={`${opportunity.name} image ${globalIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`${roundingClass}`}
                />
                {isLastVisible && (
                  <button
                    className="absolute bottom-3 right-3 text-xs sm:text-sm px-3 py-1 bg-white text-black font-semibold rounded cursor-pointer hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleImageClick(0)
                    }}
                  >
                    Show All Photos
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl p-4 sm:p-6">
          <DialogTitle className="mb-4">Images</DialogTitle>

          <div className="relative">
            <Carousel
              opts={{
                loop: true,
                startIndex: startIndex,
              }}
            >
              <CarouselContent>
                {opportunity.images.map((img: string, index: number) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[400px] sm:h-[350px]">
                      <Image
                        src={img}
                        alt={`Carousel Image ${index + 1}`}
                        layout="fill"
                        className="rounded-3xl object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Navigation Buttons */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
            </Carousel>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

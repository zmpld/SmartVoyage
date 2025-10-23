import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Clock, ExternalLink, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';


const TRIP_DATA ={

    "destination": "Paris, France",

    "duration": "2 Days",

    "origin": "Manila, Philippines",

    "budget": "Low",

    "group_size": "Solo",

    "hotels": [

      {

        "hotel_name": "string",

        "hotel_address": "string",

        "price_per_night": "string",

        "hotel_image_url": "string",

        "geo_coordinates": {

          "latitude": "number",

          "longitude": "number"

        },

        "rating": "number",

        "description": "string"

      },
       {

        "hotel_name": "string",

        "hotel_address": "string",

        "price_per_night": "string",

        "hotel_image_url": "string",

        "geo_coordinates": {

          "latitude": "number",

          "longitude": "number"

        },

        "rating": "number",

        "description": "string"

      }

    ],

    "itinerary": [

      {

        "day": 1,

        "day_plan": "string",

        "best_time_to_visit_day": "string",

        "activities": [

          {

            "place_name": "string",

            "place_details": "string",

            "place_image_url": "string",

            "geo_coordinates": {

              "latitude": "number",

              "longitude": "number"

            },

            "place_address": "string",

            "ticket_pricing": "string",

            "time_travel_each_location": "string",

            "best_time_to_visit": "string"

          }

        ]

      }

    ]




}

function Itinerary() {
   const data = [
    {
      title: "Recommended Hotels",
      content: (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {TRIP_DATA?.hotels.map((hotel, index) => (
              <div key={index} className='flex flex-col gap-1'>
                  <Image src={'/placeholder.jpg'} alt='place-image' width={400} height={200} 
                  className='rounded-xl shadow object-cover mb-2'
                  />
                  <h2 className='font-semibold text-lg'>{hotel?.hotel_name}</h2>
                  <h2 className='text-gray-500'>{hotel?.hotel_address}</h2>

                  <div className='flex justify-between items-center'>
                  <p className='flex-gap-2 text-green-600'> <Wallet/>{hotel.price_per_night}</p>
                  <p className='text-yellow-500 flex gap-2'><Star/>{hotel.rating}</p>
                  </div>
                  <Button variant={'outline'} className='mt-1'>View</Button>
                  {/*<p className='line-clamp-2 text-gray-500'>{hotel.description}</p>*/}
              </div>
            ))}
        </div>
      ),
    },
    ...TRIP_DATA?.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day} Plan`,
      content:(
        <div>
            <p>Best Time:{dayData?.best_time_to_visit_day}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {dayData?.activities.map((activity, index) => (
                <div key={index}>
                    <Image src={'/placeholder.jpg'} width={400} height={200} alt={activity.place_name} 
                    className='object-cover rounded-xl'
                    />
                    <h2 className='font-semibold text-lg'>{activity?.place_name}</h2>
                    <p className='text-gray-500 line-clamp-2'>{activity?.place_details}</p>
                    <h2 className='flex gap-2 text-blue-500 line-clamp-1'> <Ticket/>{activity?.ticket_pricing}</h2>
                    <p className='flex text-orange-400 gap-2 line-clamp-1'><Clock/>{activity?.best_time_to_visit}</p>
                    <Button size={'sm'} variant={'outline'} className='w-full mt-2'>View <ExternalLink/></Button>
                    
                </div>
            ))}
            </div>
        </div>
      )
    }))

  ];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      <Timeline data={data} tripData={TRIP_DATA}/>
    </div>
  );
}

export default Itinerary
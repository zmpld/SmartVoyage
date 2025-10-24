import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Clock, ExternalLink, Link, Star, Ticket, Timer, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HotelCardItem from './HotelCardItem';


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

          },
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

          },
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

          },
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

      },
      {

        "day": 2,

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

          },
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

          },
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

          },
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
              <HotelCardItem hotel={hotel}/>
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
                    <Link href={'https://www.google.com/maps/search/?api=1&query='+activity?.place_name} target='_blank'>
                    <Button size={'sm'} variant={'outline'} className='w-full mt-2'>View <ExternalLink/></Button>
                    </Link>
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
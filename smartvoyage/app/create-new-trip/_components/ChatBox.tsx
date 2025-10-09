'use client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Send } from 'lucide-react'
import React from 'react'

function ChatBox() {

    const onSend = () =>{

    }

  return (
    <div className='h-[85vh] flex flex-col'>
        {/* Display Messages */}
        <section className='flex-1 overflow-y-auto p-4'>
            <div className='flex justify-end mt-2'>
                <div className='max-w-lg bg-primary text-white px-4 py-2 rounded-lg'>
                    User Msg
                </div>
            </div>
            <div className='flex justify-start mt-2'>
                <div className='max-w-lg bg-gray-100 text-black px-4 py-2 rounded-lg'>
                    AI Agent Msg
                </div>
            </div>
        </section>
        {/* User Input */}
        <section>
            <div className="border rounded-2xl p-4 relative">
            <Textarea
              placeholder="Create a trip for Japan from Philippines"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            />
            <Button
              size={"icon"}
              className="absolute bottom-6 right-6"
              onClick={() => onSend()}
            >
              <Send className="h-4 h-4" />
            </Button>
          </div>
        </section>
    </div>
  )
}

export default ChatBox
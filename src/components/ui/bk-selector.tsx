import React, { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import Image from 'next/image'

const example = [
  { id: 1, value: 'Durward Reynolds', unavailable: false },
  { id: 2, value: 'Kenton Towne', unavailable: false },
  { id: 3, value: 'Therese Wunsch', unavailable: false },
  { id: 4, value: 'Benedict Kessler', unavailable: true },
  { id: 5, value: 'Katelyn Rohan', unavailable: false },
]

interface SelectorProp {
  id: number
  value: string | number
  unavailable?: boolean
}

export default function BKSelector({
  data = example,
}: {
  data?: SelectorProp[]
}) {
  const [selectedValue, setSelectedValue] = useState(data[0])

  return (
    <Listbox value={selectedValue} onChange={setSelectedValue}>
      <div className="h-full x-full">
        <Listbox.Button className={'text-lg flex items-center gap-2'}>
          {selectedValue.value}
          <Image
            src={'/spread-button.svg'}
            width={13}
            height={13}
            alt={selectedValue.value + 'alt'}
          />
        </Listbox.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Listbox.Options className="absolute z-20 mt-2 overflow-auto text-black bg-white border border-gray-300 rounded-md shadow-lg w-max max-h-60">
            {data.map((el) => (
              <Listbox.Option
                key={el.id}
                value={el}
                disabled={el.unavailable ?? false}
                className="font-medium cursor-pointer hover:bg-slate-200"
              >
                {el.value}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  )
}

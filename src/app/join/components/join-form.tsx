'use client'

import { Transition } from '@headlessui/react'
import { useState } from 'react'
import NameForm from './sections/name-form'
import JobForm from './sections/job-form'
import AccountForm from './sections/account-form'
import { BKButton } from '@/ui/bk-button'

export default function JoinForm() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1)
  }

  return (
    <div className="flex justify-center w-screen h-screen p-4 pt-32">
      <Transition
        appear={true}
        show={step === 1}
        enter="transition-all ease-in-out duration-500 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        {step === 1 && (
          <>
            <NameForm />
            <div className="flex flex-row justify-center gap-4 mt-14">
              <BKButton onClick={nextStep}>다음 단계로</BKButton>
            </div>
          </>
        )}
      </Transition>

      <Transition
        show={step === 2}
        enter="transition-all ease-in-out duration-500 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        {step === 2 && (
          <>
            <JobForm />
            <div className="flex flex-row justify-center gap-4 mt-14">
              <BKButton onClick={prevStep}>이전 단계로</BKButton>
              <BKButton onClick={nextStep}>다음 단계로</BKButton>
            </div>
          </>
        )}
      </Transition>

      <Transition
        show={step === 3}
        enter="transition-all ease-in-out duration-500 delay-[300ms]"
        enterFrom="opacity-0 translate-y-6"
        enterTo="opacity-100 translate-y-0"
        leave="transition-all ease-in-out duration-0"
        leaveFrom="opacity-0"
        leaveTo="opacity-0"
      >
        {step === 3 && (
          <>
            <AccountForm />
            <div className="flex flex-row justify-center gap-4 mt-14">
              <BKButton onClick={prevStep}>이전 단계로</BKButton>
              <BKButton onClick={() => alert('제출 완료')}>제출하기</BKButton>
            </div>
          </>
        )}
      </Transition>
    </div>
  )
}

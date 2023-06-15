import React from 'react'
import Title from './components/title'
import NoWorksToFeedback from './components/no-works'

export default function FeedbackPage() {
  return (
    <div className="mt-12">
      <div>
        <Title />
      </div>
      <div className="mt-32">
        <NoWorksToFeedback />
      </div>
    </div>
  )
}

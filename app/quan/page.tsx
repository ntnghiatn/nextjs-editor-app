"use client"
import dynamic from 'next/dynamic'

const ContentEditor = dynamic(() => import("@/components/Edit"), {
  ssr: false,
})


export default function Home() {
  return (
    <>
      <div className="max-w-[680px] mx-auto">

        <ContentEditor setOutputData={(data) => {
          console.log('Data::', data)
        }} />
      </div>
    </>
  )
}
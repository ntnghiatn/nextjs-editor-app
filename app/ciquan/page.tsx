"use client";
import Editor from "@/components/Editor";

export default function Home() {
  return (
    <>
      <div className="max-w-[680px] mx-auto">

        <Editor
          onChange={(value) => {
            console.log(JSON.stringify(value))
          }}
          initialContent=""
          editable={true}
        />
      </div>
    </>
  )
}
"use client"

import { useEffect, useState } from "react"
import hljs from "highlight.js"
import bash from "highlight.js/lib/languages/bash"
import { Check, CopyIcon } from "lucide-react"

import { Card } from "./ui/card"

export default function CopyCard(props: { text: string }) {
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    hljs.registerLanguage("bash", bash)
    hljs.highlightAll()
  }, [])
  return (
    <Card className="flex flex-row p-4 bg-slate-900 text-white relative">
      <div
        className="absolute right-4 top-5 cursor-pointer"
        onClick={() => {
          setCopied(true)
          navigator.clipboard.writeText(props.text)
          setTimeout(() => {
            setCopied(false)
          }, 2000)
        }}
      >
        {copied ? (
          <Check className="w-4 h-4" />
        ) : (
          <CopyIcon className="w-4 h-4"></CopyIcon>
        )}
      </div>
      <pre>
        <code className="language-bash">{props.text}</code>
      </pre>
    </Card>
  )
}

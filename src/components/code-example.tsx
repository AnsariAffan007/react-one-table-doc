import { BundledLanguage, codeToHtml } from "shiki"

interface Props {
  children: string
  lang: BundledLanguage
}

export async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: 'dark-plus'
  })

  return <div className="[&>pre]:p-2" dangerouslySetInnerHTML={{ __html: out }} />
}
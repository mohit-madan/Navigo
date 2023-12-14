import { lusitana } from '@/app/ui/fonts';

export default function Description (){
    return (
    <div className="rounded-xl bg-gray-50">
      <div className="flex p-2">
        <h4 className="ml-4 mt-2 text-xl font-medium">Welcome to workflows by Navigo AI</h4>
      </div>
      <p
        className={`${lusitana.className}
        rounded-xl px-8 py-8 text-l`}
      >
        Describe your workflow and we'll generate it. <br />
        Example:
        "Given a blog url, scrape the url and then summarize it into 3 bullet points"
      </p>
    </div>
    )
}
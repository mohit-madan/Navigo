import 'reactflow/dist/style.css';
import { lusitana } from '@/app/ui/fonts';
import Flow from '@/app/ui/builder/flow';


export default function Page() {
    return (
        <div>
        <div className="flex w-full items-center justify-between">
            <h1 className={`${lusitana.className} text-2xl`}>Builder</h1>
        </div>
        {/* <div className="flex w-50 items-center justify-between">
            <Flow />
        </div> */}
        </div>
  );
}
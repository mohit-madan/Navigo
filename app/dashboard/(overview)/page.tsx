import Description from '@/app/ui/dashboard/description';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default async function Page() {
    return (
        <main>
        <Description />
        <form>
            <div className="flex justify-between mt-6 gap-4">
                <textarea 
                    placeholder='Describe your workflow here...'
                    rows={1}
                    className="resize-none rounded-l w-full"
                />
                <button type='submit' className='bg-gray-100 rounded-xl w-12 hover:bg-gray-200 items-center '>
                    <PaperAirplaneIcon className='h-5 md:ml-3'/>
                </button>
            </div>
        </form>
        </main>
    );
}
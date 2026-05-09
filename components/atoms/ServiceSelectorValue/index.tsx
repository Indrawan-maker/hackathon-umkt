import  ServiceSelectorAiForm  from '@/components/atoms/ServiceSelectorAiForm';
import  ServiceSelectorBasicForm  from '@/components/atoms/ServiceSelectorBasicForm';

export default function ServiceSelectorValue({ setActiveTab }: { setActiveTab: string }) {
    return (
 <div>
            <div className="flex md:grid md:w-full md:h-auto border-2 rounded-xl border-white">
                {
                    setActiveTab === 'work' ?
                        <>
                            <ServiceSelectorAiForm />
                        </>
                        :
                        <>
                            <ServiceSelectorBasicForm />
                        </>
                }
            </div>
        </div>
    )
}
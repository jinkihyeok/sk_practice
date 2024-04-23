import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/accordion";


export default function AccordionSection() {
    return (
        <div className="flex items-center justify-center h-56 border-2 border-gray-500 px-8 bg-gray-100">
            <Accordion defaultValue="item-1" type="single" collapsible className="w-full bg-white rounded-xl">
                <AccordionItem className="px-5 border rounded-t-xl shadow-sm" value="item-1">
                    <AccordionTrigger>Accordion 1</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="px-5 border shadow-sm" value="item-2">
                    <AccordionTrigger>Accordion 2</AccordionTrigger>
                    <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem className="bg-gray-300 text-gray-400 px-5 border rounded-b-xl shadow-sm cursor-none" disabled value="item-3">
                    <AccordionTrigger>Disabled Accordion</AccordionTrigger>
                    <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
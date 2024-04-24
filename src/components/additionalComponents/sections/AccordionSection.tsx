import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "../../ui/accordion";
import koMessages from "../../../libs/locales/ko.json"
import enMessages from "../../../libs/locales/en.json"
import {FormattedMessage, IntlProvider} from "react-intl";
import {useLocaleState} from "../../../contexts/LocaleStateContext";

export default function AccordionSection() {
    const {locale} = useLocaleState();

    const messages = {
        ko: koMessages,
        en: enMessages,
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <div className="flex items-center justify-center h-fit border-2 border-gray-500 px-8 py-5 bg-gray-100">
                <Accordion defaultValue="item-1" type="single" collapsible className="w-full bg-white rounded-xl">
                    <AccordionItem className="px-5 border rounded-t-xl shadow-sm" value="item-1">
                        <AccordionTrigger className="font-bold">
                            <FormattedMessage id="accordion.label1"/>
                        </AccordionTrigger>
                        <AccordionContent className="whitespace-pre-wrap">
                            <FormattedMessage id="accordion.item1"/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="px-5 border shadow-sm" value="item-2">
                        <AccordionTrigger className="font-bold">
                            <FormattedMessage id="accordion.label2"/>
                        </AccordionTrigger>
                        <AccordionContent className="whitespace-pre-wrap">
                            <FormattedMessage id="accordion.item2"/>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="px-5 border rounded-b-xl shadow-sm"
                                   value="item-3">
                        <AccordionTrigger className="font-bold">
                            {<FormattedMessage id="accordion.label3"/>}
                        </AccordionTrigger>
                        <AccordionContent className="whitespace-pre-wrap">
                            {<FormattedMessage id="accordion.item3"/>}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </IntlProvider>
    )
}
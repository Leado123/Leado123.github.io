import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import { Accordion } from 'flowbite-react';

interface SyllabusData {
    header: string;
    body: string;
}

export function MarkdownView({ data }: { data: SyllabusData[] }) {
    return (
        <div className="markdown-body">
            <Accordion>
                {data.map((i, idx) => {
                    return (
                        <Accordion.Panel key={idx}>
                            <Accordion.Title>{i.header}</Accordion.Title>
                            <Accordion.Content>
                                {/* @ts-ignore */}
                                <Markdown remarkPlugins={[remarkGfm]} children={i.body} />
                            </Accordion.Content>
                        </Accordion.Panel>
                    );
                })}
            </Accordion>
        </div>
    );
}
export interface InfoBlockProps {
    title: string;
    content: string[];
    enableAccordian: boolean;
    subtitle?: string;
    startDate?: string;
    endDate?: string;
}

export interface InfoBlockCollection {
    data: InfoBlockProps[];
}

import { DetailedHTMLProps, HTMLAttribute } from 'react';

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttribute<HTMLDivElement>, 
                    HTMLDivElement> {
                        productId: string;
                    };
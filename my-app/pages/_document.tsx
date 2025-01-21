import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";
// import Head from "next/head";
import { JSX } from "react";

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    };
};

export default MyDocument;
import { Htag } from "../components";
import { withLayout } from "../layout/Layout";
import React, { JSX } from "react";

 export function Error500 (): JSX.Element {
    return (
        <>
            <Htag tag="h1">Error 500. Internal server error.</Htag>
        </>
    );
};

export default withLayout(Error500);
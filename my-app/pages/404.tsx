import { Htag } from "../components";
import { withLayout } from "../layout/Layout";
import React, { JSX } from "react";

export function Error404 (): JSX.Element {
    return (
        <>
            <Htag tag="h1">Error 404. Page not found.</Htag>
        </>
    );
};

export default withLayout(Error404);
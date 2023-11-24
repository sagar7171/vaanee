import React from "react";
import SpinnerCom from "./SpinnerCom";
import { useAppSelector } from "../hooks/redux-hooks";

const SiteLoader = () => {
    const siteLoader = useAppSelector((state) => state.modal.siteLoader);
    if (!siteLoader) return null;
    return <SpinnerCom />;
};

export default SiteLoader;

import React from "react";
import { SkeletonStyles } from "./styles";
import Skeleton from "@mui/material/Skeleton";

export const Skeletons = () => {
    return (
        <SkeletonStyles>
            <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginBottom: "1em" }} className="round" />
            <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginBottom: "1em" }} className="round" />
            <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginBottom: "1em" }} className="round" />
            <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginBottom: "1em" }} className="round" />
            <Skeleton variant="rectangular" width="100%" height={250} sx={{ marginBottom: "1em" }} className="round" />
        </SkeletonStyles>
    );
};
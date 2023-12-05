import React from "react";
import { Spinner } from "react-bootstrap";

export default function PostPreloader() {
    return(
        <Spinner 
            animation="border" 
            variant="primary"
        />
    )
}
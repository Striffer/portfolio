import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import Home from "../pages/Home"

export default function RouteBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        return (
          <Home />  
        )
    }
}
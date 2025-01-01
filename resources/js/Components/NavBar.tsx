import { Link, usePage } from "@inertiajs/react";
import BackButton from "./BackButton";
import { useState } from "react";

export default function NavBar({}){

    const {props} = usePage();
    const {cartCount} = props;

    const page = usePage();

    const backToPreviewPage = () => {
        window.history.back();
    }

    return(
        <nav className="px-4 flex justify-between h-16">
            <div>
                { (page.url === '/' ?
                    (
                        <p className="p-4">logo</p>
                    ) : (
                        <BackButton
                            className="flex items-center justify-center p-4"
                            onClick={backToPreviewPage}
                        >
                            <svg className="w-6 h-6 transform rotate-180 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 6L16 12" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M10 18L16 12" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </BackButton>
                    ))
                }

            </div>
            <Link href="/cart" className="flex space-x-2 block">
                <div className="py-4">
                    <svg className="size-6" aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="8" width="12" height="10" rx="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"></rect><path d="M9 7V7C9 5.34315 10.3431 4 12 4V4C13.6569 4 15 5.34315 15 7V7" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
                <span className="py-4">{cartCount}</span>
            </Link>
        </nav>
    )
}
